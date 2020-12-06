const isEven = (num) => {
  // write code for numbers.isEven
if(num % 2 == 0 ){
  return true
} else{
  return false
}
}

const sum = (arr) => {
  // write code for numbers.sum
  let placeholder = 0
  for(let i = 0; i <= arr.length -1; i++){
   placeholder = arr[i] + placeholder 
  }
  return placeholder
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  //take each position of the array and add together to see if when added, they equal 
  // the given sum

  for(let i = 0; i <= arr.length; i++ ){
    for(let arraytemp = 0; arraytemp = arr.length; arraytemp++){
      if(arr[i] + arr[arraytemp] == sum){
        return true
      } else {
        return false
      }
    }
  }  
}

module.exports = {
  isEven,
  sum,
  comboSum
}

// ## Numbers

// * Complete the following functions in `numbers/index.js`:

// * isEven
//   * Return a boolean that represents whether a given number is even
//   * Hint: Modulus

// * Sum
//   * Return a value that represents the sum of an array of numbers
//   * Hint: Reduce

// * ComboSum
//   * Determine if any combination of numbers in an array equals a given sum. Return a boolean
//   * Hint: Loop in loop OR indexOf for diff
