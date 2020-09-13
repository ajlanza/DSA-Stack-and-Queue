const Queue = require('./queue');
const { peek, isEmpty } = require('./queueHelp');

function starTrek() {
  const starTrek = new Queue();
  starTrek.enqueue('Kirk');
  starTrek.enqueue('Spock');
  starTrek.enqueue('Uhura');
  starTrek.enqueue('Sulu');
  starTrek.enqueue('Checkov');

  return starTrek;
}

console.log(peek(starTrek()));
console.log(peek('bad queue'))
console.log(isEmpty(starTrek()));
console.log(isEmpty('bad queue'));