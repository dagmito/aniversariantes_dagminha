var mySql = require('mysql');
var pool = null;

function _criaPool() {
    
        pool = mySql.createPool({
            connectionLimit: 10,
            host: "us-cdbr-iron-east-04.cleardb.net",
            user: "b2b067f709e488",
            password: "63d6a555",
            database: "heroku_d7490343066279b",
            debug: false
        });
    // }
    
    pool.on('enqueue', function () {
        console.error('Waiting for available connection slot');
    });
}

_criaPool();

var createDBConnection = function (callback) {
    
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log('Error getting mysql_pool connection: ' + err);
            pool.end(function onEnd(error) {
                if (error) {
                    console.log('Erro ao terminar o pool: ' + error);
                }
                _criaPool();
            });
            return;
        }
        return callback(null, connection);
    });
    
};

module.exports = function () {
    return createDBConnection;
};