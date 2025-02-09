import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/routes.js';
import db from './models/index.js';

dotenv.config();

const app = express();
const server = createServer(app);  // Create HTTP server
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());
app.use('/api/messages', router);

io.on('connection', (socket) => {
  console.log('Admin connected');
  socket.on('disconnect', () => {
    console.log('Admin disconnected');
  });
});

app.set('socketio', io);

// Test database connection
const testDatabaseConnection = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    console.log('Server will continue running without database connection...');
  }
};

// Start server function
const startServer = async () => {
  try {
    // Test database connection but don't wait for it
    testDatabaseConnection();

    // Example route
    app.get('/', (req, res) => {
      res.send('Server is running!');
    });

    // Start the HTTP server, not app.listen()
    server.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

// Start the server
startServer();
