module.exports = {
  app: {
    name: process.env.APP_NAME || 'Oedipus',
    keys: {
      verification: process.env.VERIFICATION_KEY || 'f8712762e4261c092c2bd861b1f4d351d789a6229b4055653da4ab9752d49f82',
      models: process.env.MODELS_KEY || 'bd0b342b23d17a52b4ff91e5f9683f0495f80c0b89b247e64892734025ddfb21'
    }
  },
  server: {
    files: {
      path: process.env.FILE_PATH || './../../files'
    },
    port: process.env.PORT || 3000,
    db: {
      uri: process.env.DB_URI || 'mongodb://localhost:27017/oedipus'
    }
  },
  models: {
    users: {
      access: process.env.USER_DEFAULT_ACCESS || 'user'
    }
  }
}
