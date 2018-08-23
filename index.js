// add solution here

function theBeatlesPlay(musicians, instruments) {
  const array = []
  
  for(let i=0, len = musicians.length; i < len; i++) {
    array.push(`${musicians.shift()} plays ${instruments.shift()}`)
  }
  
  return array
}

// function johnLennonFacts(array) {
//   const newArray = []

//   let i=0  
//   while (i < array.length) {
//     newArray.push(`${array[1]}!!!`);
//     i++
//   }
  
//   return newArray
// }

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}
