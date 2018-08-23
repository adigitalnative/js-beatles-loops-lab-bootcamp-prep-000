// add solution here

function theBeatlesPlay(musicians, instruments) {
  const array = []
  
  for(let i=0, len = musicians.length; i < len; i++) {
    array.push(`${musicians.shift()} plays ${instruments.shift()}`)
  }
  
  return array
}

function johnLennonFacts(array) {
  var counter = array.length
  var newArray = []
  while (counter.length > 0) {
    newArray.push(array[1] + "!!!");
  }
  return newArray
}