'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    let data = [
      {
        "name": "DC Shoes Striker",
        category: 'Shoes',
        LocationId: 1,
        uom: 'pcs'
      }
    ]

    data.forEach(el => {
      el.createdAt = new Date(),
          el.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Products', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {})
  }
};