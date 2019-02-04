const express = require('express');
const app = express();
const firebase = require('firebase');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.set("port", process.env.PORT || 3000);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(app.get("port"), () => {
  console.log("  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});
//firebase
//init firebase
firebase.initializeApp({
  apiKey: "AIzaSyDQ7VKiiKDzjljd-1-krrxY85lGO7G3Yc0",
  authDomain: "infinity-fe8d8.firebaseapp.com",
  databaseURL: "https://infinity-fe8d8.firebaseio.com",
  projectId: "infinity-fe8d8",
  storageBucket: "infinity-fe8d8.appspot.com",
  messagingSenderId: "617951758035"
});


module.exports.config = app
