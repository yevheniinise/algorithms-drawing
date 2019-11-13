export const isPrime = (number) => {
  if (number === 0) return false;
  if (number === 1) return false;
  if (number === 2) return true;
  if (number === 3) return true;
  if (number % 2 === 0) return false;
  if (number % 3 === 0) return false;
  if (number < 9) return true;

  const bound = Math.sqrt(number);
  for (let i = 2; i <= bound; i++) {
    if (number % i === 0) return false;
  }

  return true;
};
