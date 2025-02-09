// models/ContactPerson.js
export default function (sequelize, DataTypes) {
    const ContactPerson = sequelize.define('ContactPerson', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true, // Optional
      },
    });
  
    return ContactPerson;
  }