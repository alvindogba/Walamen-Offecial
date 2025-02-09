export default {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Messages", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        subject: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        message: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        status: {
          type: Sequelize.ENUM("unread", "read", "replied"),
          defaultValue: "unread",
        },
        adminReply: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        repliedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Messages");
    },
  };
  