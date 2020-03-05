const express = require("express");
const app = express();
const port = 3000;
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
// const rand = require("Random")
// const assert = require("assert");
const dbUri = "mongodb+srv://ymirrp:Bjuga.109@ord-cluster-t5llt.azure.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(dbUri, {useUnifiedTopology: true}, (err, client) => {
    if (err) throw err;
    console.log("Mongodb connects successfully!");
    client.close();
});

app.use(express.static("public"));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getPW', (req, res) => {
    MongoClient.connect(dbUri, {useUnifiedTopology: true}, (err, client) => {
        if (err) throw err;
        var db = client.db("Ord_db");
        var ord = db.collection("Ord");
        var rand = Math.random() * 1000;
        rand = Math.floor(rand);
        console.log(rand);
        ord.find({type: 'n'}, {" word": 1, _id: 0}).limit(1).skip(rand).toArray().then((rec, err) => {
            if (err) throw err;
            if (rec) {
                console.log(rec[0][" word"]);
                client.close();
                res.status(200).send(rec[0][" word"]);
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});