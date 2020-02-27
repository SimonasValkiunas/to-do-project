
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;


const PORT = process.env.PORT || 5000;
const CLIENT_ADR = "http://127.0.0.1:5500";


app.use('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", CLIENT_ADR);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next(); 
});

//enable pre-flight
app.options('*', cors());


app.use(express.json());

const uri =  "mongodb+srv://simonas:anarchija@cluster0-rmuoz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

//Task schema
const Task = {
    _name : "",
    _description: "",
    _due_date : "",
}

app.get('/tasks', (req,res)=>{
    client.connect(err => {
        const collection = client.db("TO_DO_DB").collection("Tasks");
        let tasks = collection.find();
        let results = [];
        tasks.forEach(r=>{
            results.push(r);
        }, ()=>{
            res.status(200);
            res.send(results);
            res.end();
        });
    });
});

app.post('/tasks',(req,res)=>{
    client.connect(err => {
        const collection = client.db("TO_DO_DB").collection("Tasks");
        let task = req.body;
        console.log(req.body);
        if(checkSchema(task,Task)) {
            collection.insertOne(task).then(()=>{
                res.status(200);
                res.send(task);
            });
        } else {
            res.status(400);
            res.send("Schema mismatch");
        }
        res.end();
    });
});

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));

//check if testObj has correct schema
function checkSchema(testObj,correctObj){
    for(let key of Object.keys(correctObj)){
        if(!testObj.hasOwnProperty(key)) return false;
    }
    return true;
}