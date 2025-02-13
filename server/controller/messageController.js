import db from "../models/index.js";
import nodemailer from "nodemailer";
import axios from "axios";


export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
console.log(name, email, subject, message )
    const newMessage = await db.Message.create({ name, email, subject, message });

    const io = req.app.get('socketio');
    io.emit('newMessage', newMessage);

    return res.status(201).json({ message: 'Message sent successfully', data: newMessage });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await db.Message.findAll({ order: [['createdAt', 'DESC']] });
    return res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const replyToMessage = async (req, res) => {
  try {
    const { messageId } = req.params;
    const { reply } = req.body;


       console.log("Received messageId:", messageId);
    console.log("Received reply:", reply);
    if (!reply) {
      return res.status(400).json({ error: 'Reply message is required' });
    }

    const message = await db.Message.findByPk(messageId);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    message.adminReply = reply;
    message.status = "replied";
    message.repliedAt = new Date();
    await message.save();

    const io = req.app.get('socketio');
    io.emit('messageReplied', message);

    await sendEmailNotification(message.email, message.subject, reply);

    return res.status(200).json({ message: 'Reply sent successfully', data: message });
  } catch (error) {
    console.error('Error replying to message:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const sendEmailNotification = async (recipientEmail, subject, reply) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: `Re: ${subject}`,
    text: `Admin Response: ${reply}`,
  };

  await transporter.sendMail(mailOptions);
};


////////////////////// Subscribe controller ////////////////////////////////////////////////

export const subscribe = async (req, res) => {
  console.log(req.body)
  // Environment variables
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER || !MAILCHIMP_AUDIENCE_ID) {
    return res.status(500).json({ error: "Missing Mailchimp environment variables" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    
    const url = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;
    const encodedApiKey = Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64");

    const response = await axios.post(
      url,
      { email_address: email, status: "subscribed" },
      { headers: { Authorization: `Basic ${encodedApiKey}`, "Content-Type": "application/json" } }
    );

    return res.status(200).json({ message: "Subscription successful", data: response.data });

  } catch (error) {
    console.error("Error subscribing:", error.response?.data || error.message);

    if (error.response?.status === 400 && error.response?.data?.title === "Member Exists") {
      return res.status(400).json({ error: "This email is already subscribed." });
    }

    return res.status(error.response?.status || 500).json({ 
      error: error.response?.data?.detail || "Failed to subscribe. Please try again later." 
    });
  }
};