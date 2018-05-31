function Routes(app) {
    this.app = app;
}

Routes.prototype.loadRoute = function() {
    console.info('Loading route ...');
    this.app.use(new (require('./routes/WordCloud.route.js'))(this.app).router());
};

module.exports = Routes;