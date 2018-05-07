/*
Import the files you need to run this file and then write the final function shuffle.
The function should write a file called studentGroups.txt
and console log the final array of groups.
*/
const format       = require('./format');
const randomGroups = require('./randomGroups');
const writeToFile  = require('./writeToFile');
const students     = require('./students');



function shuffle(){

  const formattedStudents = format(students);
  const shuffledStudents  = randomGroups(formatted);

  writeToFile(shuffled);
  console.log(shuffled);
}

shuffle();
