import User from './../../models/users'
import chalk from 'chalk'
import pick from 'lodash/pick'

const UserResolver = {
  Query: {
    users: async (root, args, { user }) => {
      if (!user) { throw new Error(chalk.red('Faça login primeiro')) }
      try {
        return User.find({}, { password: 0 })
      } catch (error) { throw new Error(chalk.red(error)) }
    },
    user: async (root, { _id }, { user }) => {
      if (!user) { throw new Error('Faça login primeiro') }
      try {
        return User.findById(_id)
      } catch (error) { throw new Error(error) }
    }
  },
  Mutation: {
    create: async (root, { name, email, password, picture, access }) => {
      try {
        const user = await new User({name, email, password, picture, access}).save()
        return pick(user, ['name', 'email', 'picture'])
      } catch (error) { throw new Error(error) }
    },
    update: async (root, { name, email, picture, access }, { user }) => {
      if (!user) { throw new Error('Faça login primeiro') }
      try {
        return User.findOneAndUpdate({ _id: user._id }, { name, email, picture, access })
      } catch (error) { throw new Error(error) }
    },
    delete: async (root, args, { user }) => {
      if (!user) { throw new Error('Faça login primeiro') }
      try {
        return User.findByIdAndRemove(user._id)
      } catch (error) { throw new Error(error) }
    },
    login: async (root, { email, password }) => {
      try {
        const user = await User.findOne({ email })
        if (!user) throw new Error('Email não cadastrado')
        return user.login(password, user)
      } catch (error) { throw new Error(error) }
    }
  }
}

export default UserResolver
