const Stack = require('./stack');
const { peek, isEmpty, display, is_palindrome, parens } = require('./stackHelp');

function starTrek(){
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();

  return starTrek;
}

function empty() {
    const emptyStack = new Stack();
    return emptyStack;
}

// console.log(starTrek());
// console.log(peek());
// console.log(peek(starTrek()));
// console.log(isEmpty(starTrek()));
// console.log(isEmpty(empty()));
// display(starTrek());
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));
// console.log(is_palindrome("racecaR"));
// console.log(is_palindrome("No way!"));
console.log(parens("(6+5(3-5))"));
console.log(parens("(6+5(3-5)"));
console.log(parens("6+5(3-5))"));