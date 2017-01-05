const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
if (err) {
return console.log("error "+ err);
}
console.log("Connected to MongoDB server");

//delete many

// db.collection('Todos').deleteMany({text:'relax'}).then((result)=>{
// console.log(result);
// }, (err)=>{
//  console.log(err);
// });

//delete one
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
// console.log(result);
// });

//findeOneANdDelete
// db.collection('Todos').findOneAndDelete({
// completed:false
// }).then((result)=>{
// console.log(result);
// });

// db.collection('Users').deleteMany({name:'me'}).then((result)=>{
// console.log(result);
// });
db.collection('Users').findOneAndDelete({
  _id:new ObjectID("586ccd2b5b2d71435a972cf5")
}).then((res)=>{
console.log(res);  
});
//db.close();
});
