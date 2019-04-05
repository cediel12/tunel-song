import * as dotenv from 'dotenv';
dotenv.config();

//mode
export const mode = process.env.NODE_ENV === 'production';
//app
export const appName = process.env.APP_NAME;
export const appHost = process.env.APP_HOST;
export const appPrefix = process.env.APP_URL_PREFIX;
export const appPort = process.env.APP_PORT;
export const JWTKey = process.env.JWT_KEY;
export const hostSite = process.env.HOST_SITE;
//db
export const dbName = process.env.DB_NAME;
export const dbHost = process.env.DB_HOST;
export const dbPort = process.env.DB_PORT;
export const dbUser = process.env.DB_USERNAME;
export const dbPwd = process.env.DB_PASSWORD;