const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if(err){
    return console.log("Error in Connection");
  }
  console.log("Connection Successful");
  const db = client.db('TodoApp');
  db.collection('Todos').find({
    _id : new ObjectID('5e50fbb6d2fdad4868bc6f12')
  }).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });
   client.close();
});
