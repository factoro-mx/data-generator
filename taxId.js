const generateRandomString = (length) => {
  const mask = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return [...Array(length)].reduce(
    (a) => a + mask[~~(Math.random() * mask.length)],
    ""
  );
};

const generateRandomNumber = (base) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(base)) + 1;

  return randomNumber < 10 ? `0${randomNumber}` : randomNumber;
};

const create = ({ type = "moral" }) =>
  `${generateRandomString(type === "moral" ? 3 : 4)}${generateRandomNumber(
    99
  )}${generateRandomNumber(12)}${generateRandomNumber(
    28
  )}${generateRandomString(2)}${Math.floor(Math.random() * Math.floor(10))}`;

module.exports = create;
