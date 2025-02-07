import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.UUID
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Message;
