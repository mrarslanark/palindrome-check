function getValue() {
  var inputVal = document.querySelector("#value").value;
  var paragraph = document.querySelector("#test");

  if (checkPalindrome(inputVal)) {
    paragraph.innerHTML = "Yes, it's a Palindrome";
  } else if (checkPalindrome(inputVal) === undefined) {
    paragraph.innerHTML = "Enter something!";
  } else {
    paragraph.innerHTML = "No! it isn't a Palindrome!";
  }
}

function checkPalindrome(str) {
  if (str == "" || str == null) {
    return undefined;
  }

  let front = 0;
  let back = str.length - 1;

  while (back > front) {
    if (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }

    if (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }

    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  }

  return true;
}
