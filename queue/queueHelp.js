const Queue = require('./queue');

function peek(q) {
  if(!q.first) {
    return 'Bad queue.';
  }
  return q.first.value;
}

function isEmpty(q) {
  if(!q.first) {
    return true;
  }
  return false;
}

function display(q){
  if(isEmpty(q)){
    return console.log('Bad queue.')
  }
  let currNode = q.first;
  while(currNode.next !== null){
    console.log(currNode.value);
    currNode = currNode.next;    
  }
  console.log(currNode.value);
}

module.exports = { peek, isEmpty, display };