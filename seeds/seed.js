/*************************************************
* 
* The purpose of this file is to seed your database 
* with starter data relevant to you spplication.
*
**************************************************/


const sequelize = require('../config/connection');
// This is an example, change this
const { YourCustomModel } = require('../models');

// This is an example, change this. This json file does not exist yet.
const customData = require('./data.json');

// This is an example, change this
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await YourCustomModel.bulkCreate(customData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
