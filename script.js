//make a function that makes a new object.

var makePerson = function(name, age, weight) {
    return {
        name: name,
        age: age,
        weight: weight,
    }
}

var me = makePerson("Tyler", 25, 180);

me['name'];

// only run function once (and make a new object)

var sayName = function() {
    if(sayName.alreadyCalled === true) {
        alert('You already called this');
        return;
    }
    sayName.alreadyCalled = true;
    return {
        name: 'Tyler',
        age: 25
    }
};


//Driving instructions (object)

var instructions = {};
var counter = 0;

var addInstruction = function(instruction) {
        instructions[counter] = instruction;
        ++counter;
};

addInstruction('Get on I 15');


// function called reverse, which takes in a string and returns that string after it's been reversed.

var reverse = function(str) {
    return str.split('').reverse().join('');
}

reverse('This is my string');


//Make and array called friends that contains:
    //Jake
    //Tyler
    //Ryan
    //Jason
//Then loop through, and remove 'Ryan'
var friends = ['Jake', 'Tyler', 'Ryan', 'Jason'];
for (var i = 0; i < friends.length; i++) {
    if (friends[i] === 'Ryan') {
        friends.splice(i, 1);
    }
}

//'this' practice

var person = function(name, age) {
    return {
        name: name,
        age: age,
        sayMyName: sayName
        }
};

//creates one function instead of one per instance
var sayName = function() {
    alert(this.name);
}

var me = person('Shawn', 27);
var tyler = person('Tyler', 25);
var dan = person('Dan', 45);

me.sayMyName();
tyler.sayMyName();
dan.sayMyName();


var welcome = function() {
    //alert(this.name);
};
welcome('Shawn');

var person = function(name, age) {
    return {
        name: name,
        age: age,
        myFn: function() {
            alert(this.name);
        },
        mother: {
            name: 'Cheryl',
            sayName: function() {
                alert(this.name);
            }
        }
    }
};
//me.mother.sayName(); will alert 'Cheryl'

//explicit binding
var colt = {
    name: 'Colt'
    //no sayName method
}
//use .call

//sayName.call(colt); **colt becomes the 'this' keyword

var sayName = function(welcomeMsg) {
    alert(welcomeMsg + this.name);
};

//sayName.call(colt, 'Welcome, ');
//sayName.apply(colt, [1, 2, 3,4]);
//var boundFn = sayName.bind(colt) **returns function with 'this' bound to colt

//default binding
var sayName = function() {
    console.log(this);
}
//sayName(); **will log window global object


/*
    Toy Probem:
    Write a function called combinator that is given two arrays as arguments. The first array is an array of first
    names, and the second array is an array of last names. Have the function return a new array combining the first
    names and the last names.
*/
var first = ['Tyler', 'Shawn', 'Ean', 'Angela'];
var last = ['McGinnis', 'Chambless', 'Not-Sure', 'Also-Chambless'];

var combinator = function(arr1, arr2, newArr) {

    var newArr = [];

    for (var i = 0; i < arr1.length; i++) {
        newArr.push(first[i] + " " + last[i]);
    }
    return newArr;
}
combinator(first, last);


//Callbacks

var func = function() {
    setTimeout(function() {
        console.log('Juicebox');
        setTimeout(function() {
            console.log("Callback");
        }, 1000);
    }, 1000);
};
func();

var cb = function(num) {
    console.log(num * 4000000);
};
var newFunc = function(callback) {
    callback;
};
newFunc(cb(47));

//Toy Problem Week 2, Day 4

//Write a funciton that takes an array and replaces all of the odd numbers with the letter 'o'.
//Worked on the first try
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var replaces = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            array.splice(i, 1, 'o');
        }
    }
    return array;
}
replaces(numbers);

// Factorial: Write a function that takes in a number and returns the factorial of that number. Ex: factorial(5) returns 120 because 5*4*3*2*1 === 120

var factorial = function(num) {
    var num2=1;
    for (var i = 2; i <= num; i++)
        num2 = num2 * i;
    return num2;
};
factorial();

/*Week 3 day 3 Toy Problem
    Write a function called simpleSymbols that takes in a string parameter and determines
    if it is an acceptable sequence by either returning the string true or false. the str parameter wiill be
    composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for
    the string to be true each letter must be surrounded by a + smbol. The string to the left would be false.
    The string iwll not be empty and will have at lease one letter.
*/
//Didn't work...

var simpleSymbols = function(str) {
    for (var i = 0; i < str.length; i++){



    }
}
simpleSymbols('+s+=+d+');

/*
    Week 3 Day 4 Toy Problem
    Given an arbitrary input string, return the first non repeated caharacter in the string.
    for example:
    firstNonRepeatedCharacter('ABA') = b
    firstNonRepeatedCharacter('AABCABD') = C
*/

var nonRepeat = function(str) {
    for(var i = 0; i < str.length; i++){
        if (str[i].indexOf(str[i], (i+1) === -1)) {
            return str[i];
        }
        else{
            return 'No non-repeating characters';
        }
    }
};

nonRepeat('AABCABD')

/*
    Write a funciton called ABCheck that takes a string parameter and returns the string true if the characters a and b are separated by exactly 3 places
    anywhere in the string and at least once (ie. 'lane borrowed' would result in true because there is exactly three characters between a and b).
    Otherwise return the string false
*/
var abcheck = function(str) {
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) === 'a' && str.charAt(i + 4) === 'b' || str.charAt(i) === 'b' && str.charAt(i + 4) === 'a') {
                return true;
            }
        }
        return false;
};
abcheck('lane borrowed');
/*
    Week 4 Day 2 Toy Problem
    Write a funciton that generates an array of integers of the Fibonacci sequence, up to i = 100. The Fibonacci sequence is defined by : Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. Teh first two numbers in the sequence are 0 and 1. Write a funciton to check if a given number is in the Fibonacci sequence, return 'yes' if it is, if not return the string 'no'.
*/
var fib = function(num) {
    var fibArr = [];
    fibArr[0] = 0;
    fibArr[1] = 1;
    for (var i = 2; i < 101; i++){
        fibArr[i] = fibArr[i -1] + fibArr[i - 2];
        console.log(fibArr);
    }
    if(fibArr.indexOf(num) !== -1) {
        return 'yes';
    }
        return 'no';
}
fib(13);

/*
Week 4 Day 3 toy Problem
write a function that console logs nubmers from 1 to 100. for multiples of 3, print 'fizz', for multiples of 5, print 'buzz', and for multiples of both 3 and 5, print 'fizz-buzz'.
*/

var fizz = function() {
    for (var i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizz buzz');
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        }
        else if (i % 3 === 0) {
            console.log('fizz');
        }
            console.log(i);
    }
}
fizz();
