const Stack = require('./stack');
const { peek, isEmpty } = require('./stackHelp');

function starTrek(){
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  return starTrek;
}

function empty() {
    const emptyStack = new Stack();
    return emptyStack;
}

console.log(starTrek());
//  console.log(peek());
console.log(peek(starTrek()));
console.log(isEmpty(starTrek()));
console.log(isEmpty(empty()));