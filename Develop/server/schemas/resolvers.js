const { AuthenticationError } = require('apollo-server-express');
const {User, Book} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      findAllUsers: async () => {
        return User.find({});
      }
    },

    Mutation: {
      addUser: async (parent, {username, email, password}) => {
        const user = await User.create({username, email, password});
        const token = signToken(user);
        return {token, user};
      },
      login: async (parent, {email, password}) => {
        const user = await User.findOne({email});

        if(!user){
          throw new AuthenticationError("No user found with this email")
        }
        const correctPW = await user.isCorrectPassword(password)

        if(!correctPW){
          throw new AuthenticationError('Incorrect username or password')
        }
        const token = signToken(user)

        return {token, user}
      }
    }
}

module.exports = resolvers