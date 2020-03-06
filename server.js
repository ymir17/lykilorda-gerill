const express = require("express");
const app = express();
const port = 3000;
const MongoClient = require("mongodb").MongoClient;
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

app.get('/get', (req, res) => {
    MongoClient.connect(dbUri, {useUnifiedTopology: true}, (err, client) => {
        if (err) throw err;
        var db = client.db("Ord_db");
        var ord = db.collection("Ord");
        var rand = Math.random() * 1000;
        rand = Math.floor(rand);
        ord.find({type: 'n', $expr: {$lte: [{$strLenCP: "$word"}, 8]}}, {word: 1, _id: 0})
        .limit(1)
        .skip(rand)
        .toArray()
        .then((rec, err) => {
        // ord.find({type: 'n', word: {$in: [{$range: [4, 5, 6, 7, 8]}]}}, {word: 1, _id: 0})
        //     .limit(1)
        //     .skip(rand)
        //     .toArray()
        //     .then((rec, err) => {
            if (err) throw err;
            if (rec) {
                // console.log(rec);
                var word = rec[0]["word"];
                client.close();
                word = word.charAt(0).toUpperCase() + word.slice(1);
                var rand2 = Math.random()
                console.log(word + ': ' + word.length.toString());
                console.log('rand: ' + rand2.toString());
                var rand3;
                var rand4;
                switch (word.length) {
                    case 8:
                        rand2 *= 1000;
                        break;
                    case 7:
                        rand2 *= 10000;
                        break;
                    case 6:
                        rand2 *= 10000;
                        // rand3 = Math.random() * 100;
                        break;
                    case 5:
                        rand2 *= 1000;
                        rand3 = Math.random() * 1000;
                        break;
                    case 4:
                        rand2 *= 10000;
                        rand3 = Math.random() * 10000;
                        break;
                    case 3:
                        rand2 *= 100000;
                        rand3 = Math.random() * 100000;
                        break;
                    case 2:
                        rand2 *= 1000000;
                        rand3 = Math.random() * 1000000;
                        break;
                    case 1:
                        rand2 *= 10000000;
                        rand3 = Math.random() * 10000000;
                        break;
                }
                console.log('rand: ' + rand2.toString());
                rand2 = Math.floor(rand2);
                console.log('rand: ' + rand2.toString());
                word += '.' + rand2.toString();
                if (rand3) {
                    rand3 = Math.floor(rand3);
                    word += '.' + rand3.toString();
                }
                res.status(200).send(word);
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});