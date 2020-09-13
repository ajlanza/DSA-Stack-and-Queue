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

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverse = new Stack();
  for(let i = 0; i < s.length; i++){
    reverse.push(s[i]);
  }
  for(let j = 0; j < s.length; j++){
    if(s[j] === reverse.pop()){
        continue;
    } else {
      return false;
    }
  }
  return true
}
module.exports = { peek, isEmpty, display, is_palindrome }