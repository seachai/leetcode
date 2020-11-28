const str = "hello world goodbye";
// Expect -> "eybdoog dlrow olleh";

const reverseStr = (str) => {
  // Set a mid point for the str
  const mid = Math.floor((0 + str.length) / 2);
  // Split string into array so we can manipulate
  str = str.split("");
  for (let i = 0; i <= mid; i++) {
    // Cache the current char
    const temp = str[i];
    // Swap last char -> first char
    str[i] = str[str.length - 1 - i];
    // Set last char -> current char
    str[str.length - 1 - i] = temp;
  }
  // Join the string
  return str.join("");
};

reverseStr(str);
