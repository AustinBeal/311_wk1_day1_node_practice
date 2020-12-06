const split = (str, delim) => {
  // write code for strings.split
stringed = str.split(delim)
return stringed
}

const pairs = (str) => {
  // write code for strings.pairs
  let newpairs = []
  stringly = str.split('')
  for(let i = 0; i <= 7; i++){
    let section = stringly.slice(0,2) //[x, x] returns two letters in an array, with commas
    stringly.shift()
    stringly.shift()//removes first two from array
    var str1 = section[0]
    var str2 = section[1]
    var pushme = str1.concat(str2)
    //console.log(section)
    newpairs.push(pushme)
  }
  //console.log(newpairs)
  return newpairs
}


// pairs('abcdefghijklmnop')



const reverse = (str) => {
  // write code for strings.reverse
  let splitup = str.split('')
  let tempstr = str
  let newarray = []
  for(let i = 0; i <= tempstr.length-1; i++){
    let lastvar = splitup.pop() //last index of array
    //console.log(lastvar)
    newarray.push(lastvar)
    //console.log(newarray)
  }
  let finished = newarray.join('')
  return finished
}
//reverse('cody')


module.exports = {
  split,
  pairs,
  reverse
}

// ## Strings

// * Complete the following functions in `strings/index.js`:

// * Split
//   * Split a string on a given delimiter and return the resulting array
//   * Hint: split

// * Pairs
//   * Break a string into pairs of two characters each. Return the array of pairs
//   * Hint: For loop, increment by 2

// * Reverse
//   * Reverse the characters in a given string
//   * Hint: split, reverse, join