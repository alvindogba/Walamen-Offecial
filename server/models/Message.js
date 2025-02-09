export default (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("unread", "read", "replied"),
      defaultValue: "unread",
    },
    
    adminReply: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    repliedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return Message;
};
