function ColaboreDAO(app){
    this._app = app; 
}

ColaboreDAO.prototype.selectAll = function(callback){
    
    this._app.infra.connectionFactory(function (err, connection) {
        
        connection.query('SELECT * FROM colaborador WHERE ativo = "X";', function(err,results){
            connection.release();
            callback(err, results);
        });
    });
}

module.exports = function(){
    return ColaboreDAO;
}
