// Write your JS here
import test from './script2.js';

// Declare your database
var database = firebase.database();

// Create your reference to your data. In this case we are rerencing the entire database at '/'
var databaseRef = database.ref('/');

//Listen to your database and get a snapshot at that reference
databaseRef.once('value').then(function(snapshot) {
  //Get the values from the snapshot of the data
  const databaseValues = snapshot.val();
  //Log all the data to the console
  console.log(databaseValues);
  // append the first name to the screen
  $('body').append(databaseValues['Img'].Image1);
});