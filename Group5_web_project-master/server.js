var express = require('express');
var app = express();


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var data=[];
var genre=[];
var topmovies=[];
var serach_movie=[];
  app.all('*', (req, res, next) =>  {
                  res.header('Access-Control-Allow-Origin', '*')
                  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
                  next();
            });



app.get('/topratedmovies', function (req, res) {
	  MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  /*Return only the documents where the address starts with an "S":*/
	  dbo.collection("topratedmovies").find().toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		topmovies=result;
		db.close();
		return res.json(result);
	  });

      //res.send( JSON.stringify(topmovies) );
   });
})

app.get('/genre', function (req, res) {
	  MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  /*Return only the documents where the address starts with an "S":*/
	  dbo.collection("genre").find().toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		genre=result;
		db.close();
		return res.json(result);
	  });

      //res.send( JSON.stringify(genre) );
   });
})
app.get('/movie/:id', function (req, res) {

	  var idpass = Number(req.params.id);
		console.log(idpass);
	  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  /*Return only the documents where the address starts with an "S":*/
	  var query = {id: Number(idpass)};
	  console.log(query)
	  dbo.collection("movie_detail").aggregate([
	   { "$match": { "id": idpass }},
	  { $lookup:
		  {
			from: 'Team',
			localField: 'id',
			foreignField: 'id',
			as: 'castdetails'
		  }
		
	  },
	  {
      $unwind:"$castdetails"
		},
	    {
      $lookup:{
         from:'user_review',
         localField:'id',
         foreignField:'id',
         as:'review'
      }
   }
	  
	  ]).toArray(function(err,result){
		if(err) throw err;
		console.log(result);
		db.close();
		return res.json(result);
	  });
	
    //  res.send( JSON.stringify(serach_movie) );
   })
});

app.get('/genres/:id', function (req, res) {

	  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	  if (err) throw err;
      var dbo = db.db("mydb");
      var movie_id = parseInt(req.params.id);

	  dbo.collection("topratedmovies").find({genre_ids:{$eq:movie_id}}).toArray(function(err, result) {
		if (err) throw err;
        console.log(result);
        data = result;
         
		db.close();
		return res.json(result);
      });

   })
  // res.send(data);
});


app.get('/movienames', function (req, res) {

	  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	  if (err) throw err;
      var dbo = db.db("mydb");
      var movie_id = parseInt(req.params.id);

	  dbo.collection("topratedmovies").find({}, { projection: { _id: 0, title: 1,id :1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
	return res.json(result);
  });
});

  // res.send(data);
});

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/review', function (req, res) {
	var review = {
		user : req.body.user,
		id : parseInt(req.body.id),
		comment :req.body.comment,
		rating: parseInt(req.body.rating)
	}

//	console.log(req.body.comment);
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	 
	  dbo.collection("user_review").insertOne(review, function(err, res) {
		if (err) throw err;
		console.log("1 document inserted");
		db.close();
		
	  });
	});
res.send("Inserted a review");
});