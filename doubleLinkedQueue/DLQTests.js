const DLQ = require('./doubleLinkedQueue');

function main(){
  const starTrek = new DLQ();
  starTrek.enqueue('Kirk');
  starTrek.enqueue('Spock');
  starTrek.enqueue('Uhura');
  starTrek.enqueue('Sulu');
  starTrek.enqueue('Checkov');
  starTrek.dequeue();

  return starTrek;
}

console.log(main());
