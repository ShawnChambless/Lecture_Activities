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

/*
    Week 4 Day 4 toy Problem

    Write a function that accepts a number, n, and returns the nth Fibonacci number. USe a recursive solution to this problem; if you finish with time left over, implement an iterative solution.
*/

var fib = function(num) {
    if (num < 2) {
        return num;
    }else {
        return fib(num - 2) + fib(num -1);
    }
}
fib(5)

// Week 4 day 5 toy problem
//Make this work

// function dan() {
//     arguments.slice();
// }
// dan(1, 2, 3, 4)
function dan() {
    return Array.prototype.slice.call(arguments);
}

// Week 5 day 4 toy problem
// Write a function that will calculate whether or not a nubmer is a primer number.

var prime = function(num) {
    for(var i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            console.log('Not a prime ' + num)
        }
        else {
            console.log('Prime ' + num)
        }
    }

}
prime(15)

//Week 6 Day 1 toy problem
var animals = [
    {
        name: 'Dog',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        species: 'Canis lupus'
    },
    {
        name: 'Cat',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        species: 'Felis catus'
    },
    {
        name: 'Hippopotamus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Artiodactyla',
        family: 'Hippopotamidae',
        species: 'Hippopotamus amphibius'
    },
    {
        name: 'Playtpus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Monotremata',
        family: 'Ornithorhynchidae',
        species: 'Ornithorhynchus anatinus'
    },
    {
        name: 'Lizard',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Reptilia',
        order: 'Squamata',
        family: 'Agamidae',
        species: 'Pogona vitticeps'
    },
    {
        name: 'Blackbird',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Passeriformes',
        family: 'Turdidae',
        species: 'Turdus merula'
    }
];



//given the above object, write a function that returns an object whose keys are the fields found above and whose values are objects containing all the values as keys and a count for how many times that value occurs

//e.g.
//{
//    kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}
var looper = function(obj) {
    var otherAnimals = {
        kindom: {};
        phylum: {};
        class: {};
        order: {};
        family: {};
        species: {};
    };
    for (var i = 0; i < obj.length; i++) {
        var item = arr[i];
        for(var prop in item) {
            if(obj[prop][item[prop]]) {
                obj[prop][item[prop]]++;
            }
            else{
                obj[prop][item[prop]] = 1;
            }
        }
    }
        return otherAnimals;
}
looper(animals);


/*
Create a function that will take in an array of random numbers and sort them from least to greatest.
You are not alloweed to user Array.prototype.sort()
*/
// var arr = [2, 3, 5, 1, 6, 2];
// var sorter = function(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] < arr[i-1]) {
//             arr.push(i[i], i);
//         }
//     }
//     return arr;
//
// }
// sorter(arr);

/*
* Week 6 day 4 toy problem
* Write a function that takes in an array of numbers. Have the function return a new array with each number *being tripled.
*/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var tripler = function(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 3);
    }
    return newArr;
};
tripler(arr);

//Same problem done with arr.map
var mapper = function(arr) {
    arr.map(function(num) {
        console.log(num*3);
    });

};
mapper(arr);

// Week 8 day 1 toy problem
// Write a fnction that can only be invoked once
// Rob's solution, mine ran as many times as you wanted, but only once for each invokation.
var once  = function() {
    once = null;
    console.log('Ran');
};
once();

// Week 8 day 4 toy problem
// Write a function that takes in a number, and returns true if the number is a prime number, and false if it is not a prime number.

var prime = function(num) {
        if (num % 2 === 0) {
            return false;
        }
        else {
            return true;
        }
}
prime(15)
