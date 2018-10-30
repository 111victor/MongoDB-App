const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('5bd7919b8079b5060034e74f')},{
		$set:{
			completed:true
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(JSON.stringify(result,undefined, 2));
	});

	db.close();
});