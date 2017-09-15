const loooooooooooooooooooooooong = {}
const something = {}

// this is Standard compliant, but trips up Prettier
const { makeStandardHappy } = loooooooooooooooooooooooong[something].some.thiiiiiiiiiiiiing[0]

// this is Prettier compliant, but trips up Standard
const { makePrettierHappy } = loooooooooooooooooooooooong[
  something
].some.thiiiiiiiiiiiiing[0]

console.log(makeStandardHappy, makePrettierHappy)
