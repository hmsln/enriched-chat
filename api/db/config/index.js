var config = {
    "mongoUrl": process.env.IS_ON_AWS != undefined ? process.env.MONGO_URL : '',
}

module.exports = config;
