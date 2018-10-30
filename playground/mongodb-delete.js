// const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('User').findOneAndDelete({name: 'Qingyang'}).then((result)=>{
		console.log(JSON.stringify(result,undefined, 2));
	});

	db.close();
});