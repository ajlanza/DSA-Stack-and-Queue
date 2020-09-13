const Queue = require('./queue');

function peek(q) {
  return q.first.value;
}
module.exports = { peek }