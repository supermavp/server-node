require('dotenv').config();

const config = {
    appName: process.env.APP_NAME,
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    apiRM: process.env.API_RICK_MORTY,
    redisUrlDB: process.env.REDIS_URL
};

module.exports = { config };