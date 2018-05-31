function WordCloudMiddleware() {
}

WordCloudMiddleware.prototype.getWords = function(req, res, next) {
    res.locals.words = [
        {
            mood: 'negative',
            list: ['sad', 'melancholic', 'worried']
        },
        {
            mood: 'positive',
            list: ['happy', 'enjoy', 'smile']
        }
    ];

    next();
};

WordCloudMiddleware.prototype.returnWordsAsJson = function(req, res) {
    console.log('the words are: ', res.locals.words);
    res.json(res.locals.words)
};

module.exports = WordCloudMiddleware;