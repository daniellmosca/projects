var restify = require('restify');
var mysql = require ('mysql');

var con = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testschema'
};

function listItem(req,res,next){

    var connection = mysql.createConnection(con);
    connection.connect();

    var strQuery = "SELECT id, lote, conteudo, validade FROM toddy;";
    console.log(strQuery);

    connection.query(strQuery, function(err, rows, fields){
        if (!err){
            res.json(rows);
        } else {
            res.json(err);
        }
    });

    next();
}

function insertItem(req,res,next){

    var lote = req.body.lote;
    var conteudo = req.body.conteudo;
    var validade = req.body.validade;
    
    var toddy = {
        lote: lote,
        conteudo: conteudo,
        validade: validade
    }

    var connection = mysql.createConnection(con);
    connection.connect();

    var strQuery = "INSERT INTO toddy (lote, conteudo, validade)" + "VALUES ('"+ toddy.lote + "','" + toddy.conteudo + "','" + toddy.validade + "');";
   
    console.log(strQuery);

    connection.query(strQuery, function(err,rows,fields){
        if(!err){
            res.json(rows);
        }
        else {
            res.json(err)
        }
    });    

    connection.end();

    next();
}

function updateItem(req,res,next){
    
    next();
}

function deleteItem(req,res,next){
    
    next();
}

var server = restify.createServer(
    {
        name: 'TestServer'
    }
);

var port = process.env.port || 5000;

server.use(restify.plugins.bodyParser());

server.get('/list', listItem);
server.post('/insert', insertItem);
server.post('/update', updateItem);
server.post('/delete', deleteItem)


server.listen(port, function(){
    console.log('%s rodando', server.name);
})

