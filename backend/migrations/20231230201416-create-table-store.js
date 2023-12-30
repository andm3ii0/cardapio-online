'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, {INTEGER, STRING}) {
    await queryInterface.createTable('store', {
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    storeName: {
      type: STRING,
      allowNull: false,
      field: "store_name",
    },
  });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('store');
  }
};
