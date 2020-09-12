const Stack = require('./stack');
const { peek } = require('./stackHelp');

function starTrek(){
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  return starTrek;
}

console.log(starTrek());
//  console.log(peek());
console.log(peek(starTrek()));