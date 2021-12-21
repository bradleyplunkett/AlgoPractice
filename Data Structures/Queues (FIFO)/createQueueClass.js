//stacks are LIFO (Last in First Out)
//queues are FIFO (First in First Out)

function Queue() {
    var collection = [];
    this.print = function () {
      console.log(collection);
    };
    this.enqueue = function (val) {
      collection.push(val) 
    };
  
    this.dequeue = function (val) {
      return collection.shift()
    };
  
    this.front = function (val) {
      return collection[0]
    };
  
    this.size = function (val) {
      return collection.length
    };
  
    this.isEmpty = function () {
      if (collection.length < 1) {
        return true;
      }
      return false;
    };
  }