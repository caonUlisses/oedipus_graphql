'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This is the main configuration file
 * If you don't want to use process.env to manage configs,
 * simply edit this file.
 *
 * You can remove the 'process.env.key' and set your own value
 * or leave it and use it as it is
 */

exports.default = {
  /**
   * Application configuration
   */
  app: {
    name: process.env.APP_NAME || 'Oedipus',
    keys: {
      verification: process.env.VERIFICATION_KEY || 'f8712762e4261c092c2bd861b1f4d351d789a6229b4055653da4ab9752d49f82',
      models: process.env.MODELS_KEY || 'bd0b342b23d17a52b4ff91e5f9683f0495f80c0b89b247e64892734025ddfb21'
    }
  },
  /**
   * Server related configuration
   */
  server: {
    files: {
      path: process.env.FILE_PATH || './../../files'
    },
    port: process.env.PORT || 3000,
    db: {
      uri: process.env.DB_URI || 'mongodb://localhost:27017/oedipus'
    }
  },
  /**
   * Model related configuration
   */
  models: {
    users: {
      access: process.env.USER_DEFAULT_ACCESS || 'user'
    }
  }
};