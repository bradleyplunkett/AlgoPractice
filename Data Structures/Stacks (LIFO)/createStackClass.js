function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
    this.peek = function() {
      return collection[collection.length-1]
    };
  
    this.push = function(val) {
      return collection.push(val)
    };
  
    this.pop = function() {
      return collection.pop()
    };
  
    this.isEmpty = function() {
      if (collection.length<1){
        return true;
      }
      return false;
    };
  
    this.clear = function() {
      while (collection.length){
        collection.pop()
      }
    };
  }