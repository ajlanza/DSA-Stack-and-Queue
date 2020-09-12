const Stack = require('./stack');

function peek(stack) {
  if(!stack || !stack.top) {
    return 'Bad stack.';
  }
  return stack.top.data;
}
module.exports = { peek }