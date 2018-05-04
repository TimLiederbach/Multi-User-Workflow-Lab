// Fischer-Yates shuffle from this so post (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
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
Hint: slice is your friend.
*/
