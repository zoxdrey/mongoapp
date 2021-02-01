const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const app = express();
const jsonParser = express.json();
var cors = require('cors');

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, {useUnifiedTopology: true});
let dbClient;
let appPort = 3001;

app.use(express.static(__dirname+"/clientapp"));
app.use(cors());

mongoClient.connect(function(err, client){
    if(err) return wr(err);
    dbClient = client;
    const db = client.db("userdb");
    const collection = db.collection("users");
    app.locals.collection = collection;
    app.listen(appPort, function(){
        wr(`server ready dor connection on port ${appPort}`)
    })
});

app.get("/api/users", function(req, res){
        
        const collection = req.app.locals.collection;
        collection.find({}).toArray(function(err, users){
             
            if(err) return console.log(err);
            res.send(users)
        });
         
    });


const wr = (str) => console.log(str);

process.on("SIGINT", () => {
        dbClient.close();
        process.exit();
    });