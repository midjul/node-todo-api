const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
if (err) {
return console.log("error "+ err);
}
console.log("Connected to MongoDB server");

// db.collection('Todos').find({
//   _id:new ObjectID("586ccbc15ce91e41a1bbe65f")
//
// }).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=>{
// console.log("unable to fetch todos", err);
// });

// db.collection('Todos').find().count().then((count)=>{
// console.log('Todos '+ count);
// }, (err)=>{
// console.log("unable to fetch todos", err);
// });

db.collection('Users').find({name:"me"}).toArray().then((me)=>{
console.log(me);
}, (err)=>{
console.log(err);
});

//db.close();
});
