// Question 1 -- sortByStrings(s,t)
// Sort the letters in the string s by the order they occur in the string t.
// You can assume t will not have repetitive characters.
// For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw"
// For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByString(s, t) {
  // create an object that exists like a dictionary and refer to it when iterating through t
  const dictionary = {};
  s.split('').forEach((letter) => {
    if (!dictionary.hasOwnProperty(letter)) {
      dictionary[letter] = letter;
    } else {
      dictionary[letter] += letter;
    }
  });
  let sorted = '';
  t.split('').forEach((letter) => {
    if (dictionary.hasOwnProperty(letter)) {
      sorted += dictionary[letter];
    }
  });
  return sorted
}

sortByString('good', 'odg');
sortByString('weather', 'therapyw');

// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is
// repeated exactly k times. Note: k is guaranteed to be a positive integer.
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
