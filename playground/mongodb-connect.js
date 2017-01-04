const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
if(err){
  return console.log("Unable to connecto to MongoDB server");
}
console.log('Connected to MongoDB server');
// db.collection('Todos').insertOne({
//   text:'Somethin to do',
//   completed:false
// }, (err, result)=>{
// if (err) {
//   return console.log("Unable to insert todo ", err);
// }
// console.log(JSON.stringify(result.ops, undefined, 2 ));
// });

db.collection('Users').insertOne({
  name:"midhet",
  age:26,
  location:"BiH"
}, (err, result)=>{
if (err) {
return console.log("Unable to insert users "+ err);
}
console.log(JSON.stringify(result.ops, undefined, 2));
});
db.close();
});
