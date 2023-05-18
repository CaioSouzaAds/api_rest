"use strict";/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Jaqueline Rinaldi 1',
      email: 'jaqueline1@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },

    {
      nome: 'Jaqueline Rinaldi 2',
      email: 'jaqueline2@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },

    {
      nome: 'Jaqueline Rinaldi 3',
      email: 'jaqueline3@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },

    ], {});
  },

  down: () => {},

};
