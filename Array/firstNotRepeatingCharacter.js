/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.
*/

/*
1. Understanding the problem
    1. Input / Output
    2. Constraints
    3. Examples
2. Diagram the problem
3. Pseudocode (Depends on the company)
    1. Talk about how you would approach the problem
    2. Pseudocode out onto a whiteboard or editor
4. Code

Input: String
Output: Char of first non repeating char
Constraints: 
    String length is greater than 1 but less than 10,000
    Only lowercase English letters
Edges: Input is something else than a string or empty
*/

// TC: O(2n) -> O(n)
// SC: O(n)
function firstNotRepeatingCharacter(s) {
  if (s.length <= 1) return s;

  const hashTable = {};

  for (let i = 0; i < s.length; i += 1) {
    let char = s[i];
    if (!hashTable[char]) {
      hashTable[char] = 1;
    } else {
      hashTable[char] += 1;
    }
  }

  for (let key in hashTable) {
    if (hashTable[key] === 1) {
      return key;
    }
  }

  return "_";
}

function firstNotRepeatingCharacter(s) {
  if (s.length <= 1) return s;

  for (let char of s) {
    // If both the first index and last index of the curr char is equal
    // Then return that char because there's only 1 in the string and it's the first non repeating char
    const nonRepeatingChar = s.indexOf(i) === s.lastIndexOf(i);
    if (nonRepeatingChar) {
      return char;
    }
  }

  return "_";
}

firstNotRepeatingCharacter("bcccccccb");
