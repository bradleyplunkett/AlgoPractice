//creating a set in ES6 is significantly easier than ES5.  There are some built in things.

function checkSet() {
    var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
    // Only change code below this line
    set.add('Taco')
    set.add('Cat')
    set.add('Awesome')
    // Only change code above this line
    console.log(Array.from(set));
    return set;
  }
  
  checkSet();