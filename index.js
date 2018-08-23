// add solution here

function theBeatlesPlay(musicians, instruments) {
  const array = []
  
  for(let i=0, len = musicians.length; i < len; i++) {
    array.push(`${musicians.shift()} plays ${instruments.shift()}`)
  }
  
  return array
}

function johnLennonFacts(facts) {
  const emphasisFacts = []

  let i = 0  
  while (i < facts.length) {
    emphasisFacts.push(`${facts[1]}!!!`);
    i++
  }
  
  return emphasisFacts
}

// function johnLennonFacts(facts) {
//   const shoutedFacts = []

//   let i = 0
//   while (i < facts.length) {
//     shoutedFacts.push(`${facts[i]}!!!`)
//     i++
//   }

//   return shoutedFacts
// }
