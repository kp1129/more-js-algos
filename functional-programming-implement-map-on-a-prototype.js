/* Write your own Array.prototype.myMap(), 
which should behave exactly like Array.prototype.map(). 

You may use a for loop or the forEach method. */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  
    this.forEach(function(x){
    newArray.push(callback(x));
  });
 
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
