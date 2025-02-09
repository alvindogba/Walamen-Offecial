import express from 'express';
import { sendMessage, getMessages, replyToMessage } from '../controller/messageController.js';

const router = express.Router();

router.post('/send', sendMessage);
router.get('/', getMessages);
router.post('/reply/:messageId', replyToMessage);

export default router;