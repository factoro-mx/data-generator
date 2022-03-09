/**
 * Selects a random ABM Code
 *
 * An AMB Code is the identifier set to the bank, for creating
 * account numbers.
 */
const randomBankCode = () => {
  const abmCodes = ["002", "012", "014", "044", "072"];
  return abmCodes[Math.floor(Math.random() * abmCodes.length)];
};

/**
 * Creates a {digits} sized number
 */
const generateRandomNDigits = (digits) => {
  return (
    Math.floor(Math.random() * (9 * Math.pow(10, digits))) +
    Math.pow(10, digits)
  );
};

const controlDigit = (clabe) => {
  const characterSum = [...clabe].reduce(
    (sum, character, index) =>
      sum + ((parseInt(character) * weightFactor(index)) % 10),
    0
  );
  return (10 - (characterSum % 10)) % 10;
};

const weightFactor = (index) => {
  switch (index % 3) {
    case 2:
      return 1;
    case 1:
      return 7;
    default:
      return 3;
  }
};

const create = () => {
  const abmCode = randomBankCode();
  const variableNumber = generateRandomNDigits(13);
  const clabe = `${abmCode}${variableNumber}`;
  const clabeControlDigit = controlDigit(clabe);
  return `${clabe}${clabeControlDigit}`;
};

module.exports = create;
