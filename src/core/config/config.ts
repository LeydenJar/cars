export var config = {
  mongo: {
    connString: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
    user: process.env.MONGO_USER as string,
    password: process.env.MONGO_PASS as string,
    dbName: process.env.MONGO_NAME as string,
  },
  app: {
    appPort: parseInt(process.env.APP_PORT as string),
    tokenSecret: process.env.TOKEN_SECRET as string,
  },
};
