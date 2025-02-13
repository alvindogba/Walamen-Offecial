import express from 'express';
import { sendMessage, getMessages, replyToMessage, subscribe } from '../controller/messageController.js';

const router = express.Router();

router.post('/send', sendMessage);
router.get('/messages', getMessages);
router.post('/reply/:messageId', replyToMessage);
// Route to Subscrib 
router.post('/subscribe', subscribe)

export default router;