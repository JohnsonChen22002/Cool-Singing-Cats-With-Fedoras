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
  var pic= [

  ];
  for (var key in databaseValues) {
    // $('#messages').append(JSON.stringify(databaseValues[key]));
    //clean html before loop
    // pic.push("<img style='width:50%' src="+ databaseValues[key].url +">")
    pic.push("<img style='width:75%; display:block; margin:auto;' src="+ databaseValues[key].url +">")
  }; 
  
var reverse= pic.reverse()
  $('#messages').html(reverse.join())
  // append the first name to the screen
  // $('#messages').append("<img style='width:50%' src="+ databaseValues['Img'].Image1 +">")

});

// inputString.indexOf('http://') > -1 || inputString.indexOf('https://') > -1 

// if (c) {
  
// } else {
  
// }

  $('#submit').click(function(){
    var url = $("#input").val();
    databaseRef.push({
      "url": url
    })
    $('#input').val('');
    })
  
  console.log('test');

  