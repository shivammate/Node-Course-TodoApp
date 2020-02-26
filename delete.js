const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if(err)
  {
    return console.log("Failed to Connect");
  }
  console.log("Successfully Connected");
  const db = client.db('TodoApp');
  db.collection('Todos').findOneAndDelete({
    completed : false
  }).then((result)=>{
    console.log(result);
  });

});
