const express = require("express");
const app = express();
const port = 3000;
const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");
const dbUri = "mongodb+srv://ymirrp:Bjuga.109@ord-t5llt.azure.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(dbUri, /*{useUnifiedTopology: true},*/ (err, db) => {
    if (err) throw err;
    console.log("Success!");
    db.close();
});

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/#', (req, res) => {
    MongoClient.connect(dbUri, {useUnifiedTopology: true}, (err, db) => {
        if (err) throw err;
        var word = db.ord.find().sort
        res.send(/* Some JSON */)
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});