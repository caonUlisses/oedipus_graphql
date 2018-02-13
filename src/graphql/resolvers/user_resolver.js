import User from './../../models/users'

const UserResolver = {
  Query: {
    users: () => {
      return User.find({})
    },
    user: (root, { _id }) => {
      return User.findById(_id)
    }
  },
  Mutation: {
    create: (root, { name, email, password, picture, access }) => {
      return new User({name, email, password, picture, access}).save()
    }
  }
}

export default UserResolver
