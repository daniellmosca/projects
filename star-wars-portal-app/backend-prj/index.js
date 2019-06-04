//Importing the data-access depedency
var dBaccess = require ('./data-access');
//Including restify libraries
var restify = require ('restify');

//Creating the server itself
var server = restify.createServer(
    { name: 'Star Wars Portal Application Server v1.0' }
);

//Specify the port in which the requests are driven to (8080)
var port = process.env.port || 8080;

var pathIncrement = "/starwars";

//Specifies the use of JSONs
server.use(restify.plugins.bodyParser());

//Creating the endpoints
server.get(pathIncrement + '/listAll', getAllItemsFromDb);
server.get(pathIncrement + '/characterDetails', getCharacterFromDb);
server.get(pathIncrement + '/starshipDetails', getStarshipFromDb);

//Starting the server and logging it
server.listen(port, function(){
    console.log('[debug]%s running', server.name);
})

/*APPLICATION FUNCTIONS*/

function getCharacterFromDb(req, res, body)
{
    console.log("[debug]Attempting to read Character from DB...");
    
    var swCharacter = {
        characterId: Number,
        name: String,
        species: String
    }

    dBaccess.readCharacterFromDB(req,res,body);
};

function getStarshipFromDb(req, res, body)
{
    console.log("[debug]Attempting to read Starship from DB...");

    var swStarship = {
        characterId: Number,
        name: String,
        pilot: String
    }

    dBaccess.readStarshipFromDB(req,res,body);
};

function getAllItemsFromDb(req,res,body)
{
    getCharacterFromDb(req,res,body);
    getStarshipFromDb(req,res,body);
};