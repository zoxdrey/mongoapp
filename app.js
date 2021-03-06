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
app.use(express.json())
mongoClient.connect(function(err, client){
    if(err) return wr(err);
    dbClient = client;
    const db = client.db("time");
    const collection = db.collection("timelist");
   
    app.locals.collection = collection;
    app.listen(appPort, function(){
        wr(`server ready for connection on port ${appPort}`)
    })
});

app.get("/api/totaltime", function(req, res){
      
        const collection = req.app.locals.collection;
        collection.find({}).toArray(function(err, times){
             
            if(err) return console.log(err);
            let totalTime = 0;
            for(let i = 0; i < times.length; i++){
                totalTime += parseInt(times[i].time);
            }
            console.log(totalTime)
            res.send(totalTime+'');
        });
         
    });

app.get("/api/time", function(req, res){
            const collection = req.app.locals.collection;
            collection.find({}).toArray(function(err, times){
                 
                if(err) return console.log(err);
                res.send(times)
            });
             
     });

app.post('/api/savetime', function(req, res){
    const collection = req.app.locals.collection;
    console.log(req.body)
    const data = req.body;
    collection.insertOne(data, function(err, result){
          
     if(err){ 
           return console.log(err);
      }
       console.log(result.ops);
})
}
);


const wr = (str) => console.log(str);

process.on("SIGINT", () => {
        dbClient.close();
        process.exit();
    });