const Stack = require('./stack');

function peek(stack) {
  if(!stack || !stack.top) {
    return 'Bad stack.';
  }
  return stack.top.data;
}

function isEmpty(stack) {
  if(stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  if(isEmpty(stack)){
    return 'Bad Stack';
  }
  let node = stack.top;
  while(node !== null){
    console.log(node.data);
    node = node.next;
  }
}
module.exports = { peek, isEmpty, display }