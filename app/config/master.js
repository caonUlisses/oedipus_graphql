'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  app: {
    name: process.env.APP_NAME || 'Oedipus'
  },
  server: {
    files: {
      path: process.env.FILE_PATH || './../../files'
    },
    port: process.env.PORT || 3000,
    db: {
      uri: process.env.DB_URI || 'mongodb://localhost:27017',
      default_collection: process.env.DEFAULT_COLLECTION || 'oedipus'
    }
  }
};