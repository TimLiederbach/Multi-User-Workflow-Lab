/*
This function should take a string and write a file called
studentGroups.txt to the directory from which it's called. You will need to require the
node fs object and use the fs.writeFile method. Google it.
*/

//Requires file system
const fs = require('fs');

//Variable that can be changed to fit any string value
const string = 'Our String Value'

//Function that writes string to studentsGroups.txt
fs.writeFile('studentGroups.txt', string, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
