/* Change the nonMutatingPush function so it uses concat 
to add newItem to the end of original instead of push. 

The function should return an array.*/

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);  
}
