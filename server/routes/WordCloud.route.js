var WordCloudMiddleware = require('../middleware/WordCloud.middleware.js');
var Router = require('express').Router;

function WordCloud(app) {
    this.middleware = new WordCloudMiddleware(app);
}

WordCloud.prototype.router = function() {
    var router = new Router();

    router.route('/api/words').get(
        this.middleware.getWords,
        this.middleware.returnWordsAsJson
    );

    return router;
};

module.exports = WordCloud;