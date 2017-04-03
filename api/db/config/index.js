var config = {
    "mongoUrl": process.env.IS_ON_AWS != undefined ? process.env.MONGO_URL : 'your_db_url_here'
}

module.exports = config;
