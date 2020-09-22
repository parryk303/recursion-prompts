//
/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // If the number is negative, it doesn't have a factorial. Return null value to indicate this.
  if (n < 0) {
    return null;
  }
  // If the number is zero, its factorial is one.
  if (n === 0) {
    return 1;
  }
  // If the number is neither null nor zero, call factorial again, this time passing in a smaller number. Eventually we'll reach 0, causing each call to return to its caller and the recursion terminates.
  return (n * factorial(n - 1));
}

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // base case
  if (!array.length) {
    return 0;
  }
  // recursive case
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  return array.reduce((sum, element) => {
    // base case: add integer element to sum
    // recursive case: call arraySum on non-integer element
    return sum + (Array.isArray(element) ? arraySum(element) : element)
  }, 0);
};

// 4. Check if a number is even.
var isEven = function(n) {
  // base cases
  if (n === 0) {
    return true;
  }
  if (n === 1 || n === -1) {
    return false;
  }
  // recursive case
  return isEven(n > 0 ? n - 2 : n + 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base case
  if (n === 0) {
    return 0;
  }
  // recursive case
  n = n > 0 ? n - 1 : n + 1;
  return n + sumBelow(n)
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // base case
  if (y - x === 1 || y - x === 0) {
    return [];
  }
  // recursive case
  y = y > x ? y - 1 : y + 1
  return y === x ? [] : range(x, y).concat(y);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base case
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  // recursive cases
  return exp > 0 ? base * exponent(base, exp - 1)
  : 1 / (base * exponent(base, -1 * exp - 1));
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base case
  if (n === 1) {
    return true;
  }
  if (n === 0 || n % 2 === 1) {
    return false;
  }
  // recurseive case
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // base case: empty string
  // recursive case: reverse substring
  return string === '' ? '' : reverse (string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // base cases
  if (string === '' || string.length === 1) {
    return true;
  }
  if (string[0].toLowerCase() !== string.slice(-1).toLowerCase()) {
    return false;
  }
  // recursive case
  return palindrome(string.substr(1, string.length - 2));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x < 0 && y < 0) {
    if (x > y) {
      return x;
    }
  } else if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    if (-x < y) {
      return x;
    }
    return modulo(x + y, y);
  } else {
    if (x < y) {
      return x;
    }
  }
   return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (y < 0) {
    return -x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (x < 0 && y > 0 && -x < y || x < -y) {
    return 0;
   }
  if (x > 0 && y > 0 && x < y) {
    return 0;
   }

  if (x > 0 && y > 0) {
    return 1 + divide(x - y, y);
  } else {
    return -1 + divide(x + y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    // base cases
    if (x < 0 || y < 0) {
      return null;
     }
    if (y % x === 0) {
       return x;
       }
    // recursive cases
    return x > y ? gcd(y, x) : gcd(x, y % x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base cases
  if (str1 === '' && str2 === '') {
    return true;
   }
  if (str1.charAt(0) !== str2.charAt(0)) {
    return false;
   }
  // recursive case
  return compareStr(str1.substr(1), str2.substr(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  // base case: resolve to array containing first character of string
  // recursive case: concatenate results of calling createArray on substrings
  return str.length === 1 ? [str.charAt(0)] : [str.charAt(0)].concat(createArray(str.substr(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  // base case: resolve to (original) empty array
  // recursive case: call reverseArray on sliced array and concatenate with first element
  return !array.length ? array : reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // base case: resolve to empty array
  // recursive case: concatenate results of calling buildList on value and decremented length
  return length === 0 ? [] : [value].concat(buildList(value,length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var results = [];
  var val = n;
  // base case
  if (n === 0) {
    return results;
  }
  // recursive cases
  if (n % 3 === 0 && n % 5 !== 0) {
     val = 'Fizz';
    }
  if (n % 3 !== 0 && n % 5 === 0) {
    val = 'Buzz';
  }
  if (n % 3 === 0 && n % 5 === 0) {
    val = 'FizzBuzz';
  }
  results.push(val.toString());

  return fizzBuzz(n - 1).concat(results);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base case
  if (array.length === 0) {
    return 0;
  }
  // recursive case
  var increment = array[0] === value ? 1 : 0;
  return increment + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if(array.length === 1) {
  	return callback(array);
  }
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let num = 0;
  console.log(obj)
  for (prop in obj) {
    if (prop === key) {
      num++;
    } else {
      let value = obj[prop]
      if (typeof value === 'object') {
        num += countKeysInObj(value, key);
      }
    }
  }
  return num;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let num = 0;
  for (key in obj) {
    if (obj[key] === value) {
      num++;
    } else {
      let actual = obj[key];
      if (typeof actual === 'object') {
        num += countValuesInObj(actual, value);
      }
    }
  }
  return num;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (key in obj){
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    } else {
      let hold = obj[key];
      if (typeof hold === 'object') {
        replaceKeysInObj(hold,oldKey, newKey);
      }
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
   }
  if (n === 1) {
    return [0, 1];
   }
  let a = fibonacci(n - 1);
  a.push(a[n - 2] + a[n - 1]);
  return a;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
   }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
     return 1;
    }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  return [array[0].toUpperCase()].concat((array.length===1)
  ? []
  : capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  let result = [];
    if (!array.length) {
      return result;
    }
    result.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
    result = result.concat(capitalizeFirst(array.slice(1)));
    return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  console.log(obj);
  let sum = 0;
  for (key in obj) {
    if (typeof obj[key] === 'number' && (obj[key]%2===0)) {
      sum += obj[key];
    } else if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  console.log(array)
  if (Array.isArray(array[0])) {
    let hold = array.shift();
    array.unshift(...hold)
    return flatten(array);
  }
  return [array[0]].concat((array.length === 1) ? []
  : flatten(array.slice(1)));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  let result = Array.from(arguments)[1] || {};
    if (str.length === 0) {
      return result;
    }
    if (!result[str[0]]) {
      result[str[0]] = 1;
    } else {
      console.log(result[str[0]], 'hey');
      result[str[0]]++;
    }
    return letterTally(str.slice(1), result);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  return (list[0]===list[1]) ? compress(list.slice(1))
  : [list[0]].concat((list.length === 1)
  ? []
  : compress(list.slice(1)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  array[0].push(aug);
  return [array[0]].concat((array.length === 1)
  ? []
  : augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) { return array };
    if (minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
      return minimizeZeroes(array.slice(1));
    } else {
      return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) { return array; }
    if (array[0] < 0) {
      array[0] = -array[0];
    }
    if (array[1] > 0) {
      array[1] = -array[1];
      }
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  console.log(str);
  let numObj = {
    0:'zero',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
  }
  if (numObj[str[0]]) {
    return numObj[str[0]].concat((str.length===1) ? ''
    : numToText(str.slice(1)));
  }
  return str[0].concat((str.length===1) ? ''
  : numToText(str.slice(1)));
};

// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};