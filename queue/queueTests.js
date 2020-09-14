const Queue = require('./queue');
const { peek, isEmpty, display } = require('./queueHelp');

function starTrek() {
  const starTrek = new Queue();
  starTrek.enqueue('Kirk');
  starTrek.enqueue('Spock');
  starTrek.enqueue('Uhura');
  starTrek.enqueue('Sulu');
  starTrek.enqueue('Checkov');
  starTrek.dequeue();

  return starTrek;
}

function ophidianBank(q){
  if(isEmpty(q)){
    return 'The bank is empty.';
  }
  console.log('Ophidian bank line consists of: ');
  display(q);
  console.log('The tellers start helping customers: ')
  while(q.first){
    let currNode = q.dequeue();
    if(Math.random() <= .25) {
      q.enqueue(currNode);
      console.log(`${currNode}'s paperwork incorrect, moved to end of line.`);
    } else {
      console.log(`${currNode} served.`);
    }
  }
  console.log('All customers served.')    
}

ophidianBank(starTrek());
// console.log(peek(starTrek()));
// console.log(peek('bad queue'))
// console.log(isEmpty(starTrek()));
// console.log(isEmpty('bad queue'));
// display(starTrek());
// display('not a queue');