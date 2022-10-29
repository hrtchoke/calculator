// text box
const inputField = document.getElementById('input');

// add number to text box
const insertNum = num => inputField.textContent += num;

// send equation to be evauluated
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

// del
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

// full clear
const clearInput = () => inputField.textContent = '';

// equals button counter
let countNum = 0
function buttonCount(){
  countNum += 1;
  console.log(countNum)
  if (countNum > 1){
    clearInput();
    countNum = 0;
  }
  console.log(countNum);

};
//resets the equals button counter when any other button is pressed
function resetCount(){
  countNum = 0;
  console.log("equals pressed counter has been reset");
}