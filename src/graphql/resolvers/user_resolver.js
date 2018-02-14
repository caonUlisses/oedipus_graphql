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
    },
    update: (root, { _id, name, email, picture, access }) => {
      return User.findByIdAndUpdate(_id, { name, email, picture, access })
    },
    delete: (root, { _id }) => {
      return User.findByIdAndRemove(_id)
    }
  }
}

export default UserResolver
