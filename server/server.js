const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;   
const createRouter = require('./helpers/create_router');  
const cors = require('cors');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })    /// this is the default port for the mongo client & coonects us to the server
  .then((client) => {                               ///Promise of client object that we use to connect to DB
    const db = client.db('hotel');              ///Connects client object to DB'hotel'
    const bookingsCollection = db.collection('bookings');  ///Acesses the bookings collection from DB using collection method and passing in name of the collection
    const bookingsRouter = createRouter(bookingsCollection);  // sets bookings router as router
    app.use('/api/bookings', bookingsRouter);               ///Delegates routing to server with use method, takes in the path and router
  })
  .catch(console.error)                                ///if connection fails this gives us error in terminal

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`);
});