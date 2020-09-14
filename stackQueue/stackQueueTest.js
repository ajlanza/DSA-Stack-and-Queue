const StackQueue = require('./stackQueue');

function main(){
    const queue = new StackQueue()
  
    queue.enqueue(1) // adds item to stack1    stack1: top: 1 => null
    queue.enqueue(2) // adds item to stack1    stack1: top: 2 => 1 => null
    queue.enqueue(3) // adds item to stack1    stack1: top: 3 => 2 => 1 => null
    queue.enqueue(4) // adds item to stack1    stack1: top: 4 => 3 => 2 => 1 => null
    console.log(queue.dequeue()) // creates stack 2 which is stack 1 reversed;   stack1: null;  stack2: top: 1 => 2 => 3 => 4 => null; pops 1 from stack2
    queue.enqueue(5) // adds item to stack1 which is empty after stack 2 was created; stack1: top: 5 => null;    stack2: top: 2 => 3 => 4 => null
    queue.enqueue(6) // adds item to stack1    stack1: top: 6 => 5 => null    stack2: top: 2 => 3 => 4 => null
    queue.enqueue(7) // adds item to stack1    stack1: top: 7 => 6 => 5 => null    stack2: top: 2 => 3 => 4 => null
    console.log(queue.dequeue()) // pops2 from stack 2;  stack2: top: 3 => 4 => null;   stack1: stack1: top: 7 => 6 => 5 => null
    console.log(queue.dequeue()) // pops3 from stack 2;  stack2: top: 4 => null;   stack1: stack1: top: 7 => 6 => 5 => null
    console.log(queue.dequeue()) // pops4 from stack 2;  stack2: top: null;   stack1: stack1: top: 7 => 6 => 5 => null
    console.log(queue.dequeue()) // stack2 is empty so it check stack1 for items reversing them again;  stack1: null   stack2: top: 5 => 6 => 7 => null; pops 5 from stack2
    console.log(queue.dequeue()) // pops 6 from stack 2;  stack2: top: 7 => null;
    console.log(queue.dequeue()) // pops 7 from stack 2;  stack2: top: null;
    console.log(queue.dequeue()) // stack2 is empty and so is stack1 so we get our message indicating this;
}

main();