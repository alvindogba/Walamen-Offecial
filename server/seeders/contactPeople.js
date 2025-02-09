"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("ContactPerson", [
    {
      name: "Evelyna B. Sawah",
      email: "sawahevelyna@gmail.com",
      phone: "0888692491",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Alvin Dogba jr",
      email: "alvindr2000@gmail.com",
      phone: "0771989967",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("ContactPerson", null, {});
}
