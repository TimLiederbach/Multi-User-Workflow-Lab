// This will be in the starter code.
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/*
Using the above array shuffling method, create a function called randomGroups that takes
an array and returns a random array of arrays each of which will have two students.
*/

// function randomGroups(arr) {
//   const rndArr = shuffle(arr);
//   const acc = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     acc.push(rndArr.slice(i, i + 2));
//   }
//   return acc;
// }

// module.exports = randomGroups;


