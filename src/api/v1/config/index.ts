import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),
  /**
   * Your Database config
   */
  databaseURL:process.env.MONGODB_URI,


  /**
   * API configs
   */
  api: {
    prefix: '/api/v1/',
  },


};
