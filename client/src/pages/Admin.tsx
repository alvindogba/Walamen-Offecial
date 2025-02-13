import { useEffect, useState } from "react";
import axios from "axios";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "replied";
  adminReply?: string;
};

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState<{ [key: number]: string }>({});

  // Fetch messages
  useEffect(() => {
    axios.get("https://walamen.com/api/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  // Handle reply submission
  const sendReply = async (id: number) => {
    if (!reply[id] || reply[id].trim() === "") {
      return alert("Reply cannot be empty");
    }

    try {
      await axios.post(`https://walamen.com/api/reply/${id}`, {
        reply: reply[id],
      });

      setMessages(messages.map((msg) => 
        msg.id === id ? { ...msg, status: "replied", adminReply: reply[id] } : msg
      ));
      setReply({ ...reply, [id]: "" }); // Clear input
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard - Messages</h2>
      {messages.map((msg) => (
        <div key={msg.id} className={`border p-2 rounded mb-2 ${msg.status === "unread" ? "bg-red-100" : ""}`}>
          <p><strong>{msg.name}</strong> ({msg.email})</p>
          <p><strong>Subject:</strong> {msg.subject}</p>
          <p>{msg.message}</p>

          {msg.status === "replied" && (
            <div className="bg-green-100 p-2 rounded mt-2">
              <strong>Admin Reply:</strong>
              <p>{msg.adminReply}</p>
            </div>
          )}

          {msg.status !== "replied" && (
            <div className="mt-2">
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Type your reply..."
                value={reply[msg.id] || ""}
                onChange={(e) => setReply({ ...reply, [msg.id]: e.target.value })}
              />
              <button
                onClick={() => sendReply(msg.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
              >
                Send Reply
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
