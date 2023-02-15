const { User } = require("./Model.js");
const sequelize = require("./db");

async function main() {
  await sequelize.sync();

  // CREATE/INSERT
  //   await User.create({
  //     username: "Andy",
  //     email: "andyb@email.com",
  //     password: "test123",
  //     rating: 5,
  //   });

  // READ/SELECT
  //   const users = await User.findAll();

  //   console.log(JSON.stringify(users, null, 2));

  // UPDATE
  //   await User.update({ username: "Dave" }, { where: { id: 2 } });

  // DELETE
  await User.destroy({ where: { username: "Dave" } });
}

main();
