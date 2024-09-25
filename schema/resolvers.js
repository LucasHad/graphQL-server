const UserList = require("../fakeData.json");
const s = require();

const resolvers = {
  Query: {
    getAllUsers: () => {
      return UserList;
    },

    getMe: () => {
      return UserList.filter((item) => {
        if (item.isNew !== null) {
          return item;
        } else return;
      });
    },
  },

  Mutation: {
    createUser(parent, args) {
      const newUser = args;
      UserList.push(newUser);
      return newUser;
    },
  },
};

module.exports = {
  resolvers,
};
