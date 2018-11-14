// Write your JS here
import save from './handlers.js';
import test2 from './script2.js';
// Declare your database
var database = firebase.database();

// Create your reference to your data. In this case we are rerencing the entire database at '/'
var databaseRef = database.ref('/');

//Listen to your database and get a snapshot at that reference
databaseRef.on('value', function(snapshot) {
  //Get the values from the snapshot of the data
  const databaseValues = snapshot.val();
  //Log all the data to the console
  console.log(databaseValues);
  for (var key in databaseValues) {
    $('#messages').append(JSON.stringify(databaseValues[key]));
  }
  
  // append the first name to the screen
  // $('#messages').append("<img style='width:50%' src="+ databaseValues['Img'].Image1 +">")
});


  $('#submit').click(function(){
    var input = $("#input").val();
    databaseRef.push({
      "test": input
    })
  })
  
  console.log('test');

  