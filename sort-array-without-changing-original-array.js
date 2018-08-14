function nonMutatingSort(arr) {
 return arr.concat().sort((a, b) => a - b);
}

// had to use .concat()
