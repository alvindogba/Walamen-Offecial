export default {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("ContactPerson", {
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
        phone: {
            type: Sequelize.STRING,
            allowNull: true, // Optional
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
      await queryInterface.dropTable("ContactPerson");
    },
  };
  