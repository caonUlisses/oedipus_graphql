import User from './../../models/users'
import pick from 'lodash/pick'

const UserResolver = {
  Query: {
    users: async (root, args, { user }) => {
      if (!user) { throw new Error('Faça login primeiro') }
      return User.find({}, { password: 0 })
    },
    user: async (root, { _id }, { user }) => {
      if (!user) { throw new Error('Faça login primeiro') }
      return User.findById(_id, { password: 0 })
    }
  },
  Mutation: {
    create: async (root, { name, email, password, picture, access }) => {
      const user = await new User({name, email, password, picture, access}).save()
      return pick(user, ['name', 'email', 'picture'])
    },
    update: async (root, { name, email, picture, access }, { user }) => {
      if (!user) { throw new Error('Faça login primeiro') }
      return User.findOneAndUpdate({ _id: user._id }, { name, email, picture, access })
    },
    delete: async (root, args, { user }) => {
      return User.findByIdAndRemove(user._id)
    },
    login: async (root, { email, password }) => {
      const user = await User.findOne({ email })
      if (!user) throw new Error('Email não cadastrado')
      return user.login(password, user)
    }
  }
}

export default UserResolver
