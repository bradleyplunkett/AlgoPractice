//A set is like an array, but it cannot contain duplicate values. The typical use for a set is to simply check for the presence of an item

class Set {
    constructor() {
        // Dictionary will hold the items of our set
        this.dictionary = {};
    }

    // This method will check for the presence of an element and return true or false
    has(element) {
        return this.dictionary[element] !== undefined;
    }

    // This method will return all the values in the set
    values() {
        return Object.values(this.dictionary);
    }

    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = element;
            return true
        } else {
            return false
        }
    }

    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element];
            return true
        }
        else { return false }
    }

    size() {
        return Object.keys(this.dictionary).length
    }


    union(set) {
        const newSet = new Set();
        this.values().forEach(value => {
            newSet.add(value);
        })
        set.values().forEach(value => {
            newSet.add(value)
        })
        return newSet
    }

    intersection(set) {
        const newSet = new Set();
        this.values().forEach(value => {
          if (set.dictionary[value]){
            newSet.add(value);
          }
      })
      console.log(newSet)
      return newSet;
      }
}