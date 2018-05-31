function Server() {}
Server.prototype.initExpress = function(done) {
    var express = require('express');

    this.app = express();

    this.app.use(express.static(__dirname + '/../dist/MoodCloud/'));
    // this.app.use('/js', express.static(__dirname + '/client/'));
    var Routes = require('./Routes');
    var routes = new Routes(this.app);
    routes.loadRoute();
    done();
};

Server.prototype.listen = function() {
    const hostname = '127.0.0.1';
    const port = 3000;
    this.app.listen(port, hostname, () => {
       console.log('Server started!');
    });
};

if (require.main === module) {
    var server = new Server();
    server.initExpress(function(err) {
        console.info('Starting Mood Cloud');
        server.listen();
    });
}

module.exports = Server;
