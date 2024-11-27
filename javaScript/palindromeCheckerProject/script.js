const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkForPalindrome = input => {
  const firstInput = input;

if (input === '') {
  alert("Please input a value");
  return;
}

resultDiv.replaceChildren();

const lowerCaseString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
let resultMessage = `${firstInput} ${lowerCaseString === [...lowerCaseString].reverse().join("") ? "is" : "is not"} a palindrome.`;

const pElement = document.createElement("p");
pElement.className = "user-input";
pElement.innerHTML = resultMessage;
resultDiv.appendChild(pElement);

resultDiv.classList.remove("hidden");
};

checkPalindromeBtn.addEventListener("click", () => { 
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

checkPalindromeBtn.addEventListener('click', () => {
checkForPalindrome(userInput.value);
userInput.value = '';
});

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
  }
});