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

module.exports = { peek, isEmpty }