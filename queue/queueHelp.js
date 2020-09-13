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

module.exports = { peek, isEmpty };