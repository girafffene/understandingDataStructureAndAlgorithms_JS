// Stacks

//BASIC USAGE OF STACKS WITH AN ARRAY////////////////////////////////////////////////////////////////////////////////////////////
// functions: push(to add), pop(to remove), peek(display top element), length(size - determines how many elements are in the stack)

var letter = [] //this is the stack
var word = "racecar"
var rword = '' 

//put letts of word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
}
//will take each letter of the word and "push" it into the stack(letter array)

//pop off the stack in reverse order
for (var i = 0; i< word.length; i++) {
    rword += letters.pop
}
//this is to create the rword, adding one letter at a time, by "popping" off the top letter

if(rword === word) {
    console.log(word + " is a palindrome.")
} else {
    console.log(word + " is not a palindrome.")
}

//USING STACKS WITH FUNCTINONS///////////////////////////////////////////////////////////////////////////////////////////////////

//creating a stack
var Stack = function() {
    //keeps count of how many items are in the stack
    this.count = 0;
    //empty object
    this.storage = {};

    //adds a value onto the end of the stack
    this.push = function(value) {
        //puts the value at the "top" of the stack
        this.storage[this.count] = value;
        //increments count up 1 to show another item in stack
        this.count++
    }

    //removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            //if the stack is equal to 0, then there is nothing in the stack so we can "return" undefined
            return undefined
        }

        //decrementing the count by 1 every time an item is "popped"(removed) out of the stack
        this.count--
        //sets the result to the last item added onto the stack
        var result = this.storage[this.count]
        //deletes the item off the stack
        delete this.storage[this.count]
        return result
    }

    this.size = function() {
        //returning the number of items in the stack
        return this.count;
    }

    //returns the value at the end of the stack
    this.peek = function() {
        // returns the value at the end of the stack but will not remove it
        return this.storage[this.count-1];
    }
}

//creating a new Stack called myStack
var myStack = new Stack();

//pushing 1 into the stack
myStack.push(1);
//pushing 2 into the stack
myStack.push(2);
//peeks 2
console.log(myStack.peek());
//"pops" or removes 2
console.log(myStack.pop());
//peeks 1, now that 2 has been popped off
console.log(myStack.peek());
