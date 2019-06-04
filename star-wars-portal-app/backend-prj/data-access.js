//Including mySQL as the database for the application:
var mysql = require ('mysql');

//Connection Parameters:
var con = { 
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    database: 'starwarsapp' };

//Defining the  modules to be exported to the index.js (Only readFromDB)
module.exports = {
    //Read Character inforamtion from Database
    readCharacterFromDB: function(req,res,body){

        var connection = mysql.createConnection(con);
        connection.connect();
        console.log("[debug]Connection established with database.")

        var dbQuery = "SELECT characterId, characterName, characterSpecies FROM swCharacters;";
        console.log("[debug]Query: " + dbQuery);
        
        connection.query(dbQuery, function (err,rows,fields){
            if (!err){
                res.json(rows);
            }
            else {
                res.json(err);
            }
        })
    },

    //Read Starship inforamtion from Database
    readStarshipFromDB: function(req,res,body){

        var connection = mysql.createConnection(con);
        connection.connect();
        console.log("[debug]Connection established with database.")

        var dbQuery = "SELECT starshipId, starshipName, starshipPilot FROM swStarships;";
        console.log("[debug]Query: " + dbQuery);

        connection.query(dbQuery, function (err,rows,fields){
            if (!err){
                res.json(rows);
            }
            else {
                res.json(err);
            }
        })
    }
}

