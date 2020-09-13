const Stack = require('./stack');
const { peek, isEmpty, display, is_palindrome, parens, sortStack } = require('./stackHelp');

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

function sortThis(){
  const sortMe = new Stack();

  sortMe.push(5);
  sortMe.push(1);
  sortMe.push(4);
  sortMe.push(7);
  sortMe.push(3);
  sortMe.push(2);
  sortMe.push(6);

  return sortMe;
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
// console.log(parens("(6+5(3-5))+5"));
// console.log(parens("(6+5(3-5)+5"));
// console.log(parens("6+5(3-5))"));
// console.log(parens("(6+5(3-5))+18/h)"));
// console.log(parens("6+(5(3-(5))+18/h"));
// display(sortStack(sortThis()));
