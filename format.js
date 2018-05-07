/*
This function will take the student array, reverse the order of the names and remove
the white space between them HINT: this regex might come in useful in the replace method
/\s\s+/g
*/

function format (names) {
  let newNames = names.map((val, idx, arr) => {
    let re = /\s\s+/g;
    let [a, b] = val.trim().split(re);
    [b, a] = [a, b];
    return `${a} ${b}`;
  })
//  console.log(newNames);
}

// let names = [
//   "  Wilson   Janice  ",
//   "   Redway    Michele  "
// ]

// format(names);
