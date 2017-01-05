const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
if (err) {
return console.log("error "+ err);
}
console.log("Connected to MongoDB server");

// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('586d2accb1ab3101ae0e981d')
// }, {
//   $set:{
//     completed:true
//   }
// }, {
//   returnOriginal:false
// }).then((result)=>{
// console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('586e49f79189d30c8b45e0fb')
}, {
  $set:{
    name:"someone else"
  },
  $inc:{
    age:+1
  }
}, {
  returnOriginal:false
}).then((res)=>{
console.log(res);  
});

//db.close();
});
