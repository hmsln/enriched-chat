var config = {
    "mongoUrl": process.env.IS_ON_AWS != undefined ? process.env.MONGO_URL : 'dummy',
}

module.exports = config;
