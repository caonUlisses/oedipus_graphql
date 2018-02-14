import User from './../../models/users'

const UserResolver = {
  Query: {
    users: async () => {
      return User.find({})
    },
    user: async (root, { _id }) => {
      return User.findById(_id)
    }
  },
  Mutation: {
    create: async (root, { name, email, password, picture, access }) => {
      return new User({name, email, password, picture, access}).save()
    },
    update: async (root, { _id, name, email, picture, access }) => {
      return User.findByIdAndUpdate(_id, { name, email, picture, access })
    },
    delete: async (root, { _id }) => {
      return User.findByIdAndRemove(_id)
    },
    login: async (root, { email, password }) => {
      const user = await User.findOne({ email })
      if (!user) throw new Error('Email não cadastrado')
      return user.login(user, password)
    }
  }
}

export default UserResolver
