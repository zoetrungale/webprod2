document.title= "zoe's fortune teller"
document.getElementById("title").innerHTML = "get your fortune!"
document.getElementById("title").style.color="#5372E0"
document.getElementById("title").style.backgroundColor="#ACE053"
function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function getFortune() {
  
  let numElement = O('pickNumber') // get the element
  let num1 = parseInt(numElement.value) //get its value and
  //convert it to a number
  let num = random(10)

  let numElement2 = O('pickNumber2') // get the element
  let num2 = parseInt(numElement2.value) 
  let evencheck= num2/2

  
  let nameElement = O('userName')
  let name = nameElement.value
  let fortuneString = 'In ' + num1 + ' years you will'
  let fortune = O('fortune')
  //in an if/else statement, everything should evaluate to true or false
  //


  if (name == 'Brent') {
    fortuneString += ' be a professor'
  }

  if (num >= 8) {
    fortuneString += ' find true love'
  } else if (num >= 5) {
    fortuneString += ' win great riches'
  } 
  else if (num > 0) {
    fortuneString += ' lose all your money'
  } else {
    fortuneString += ' become a pauper'
  }

  switch (num) {
    case 0:
      fortuneString += ' and move to Alaska'
      break; //this ends execution for this case - if other cases are true and you don't include a break statement, they can get executed too

    case 1:
      fortuneString += ' and become a reality star'
      break;     
    case 2:
      fortuneString += ' and marry a royal'
      break;
    case 3:
      fortuneString += ' and adopt 10 cats'
      break;
    case 4:
      fortuneString += ' and move to the moon'
      break;
    case 5:
      fortuneString += ' and become a witch'
       break;
      case 6:
        fortuneString += ' and take a vow of silence'
        break;  
      case 7:
       fortuneString += ' and rewatch Game of Thrones'
       break;
      case 8:
        fortuneString += ' and start a fight club'
       break;
      case 9:
        fortuneString += ' and get really into k pop'
         break;
      case 10:
        fortuneString+= ' and become a blacksmith'
        break;    

  }

  if (Number.isInteger(evencheck)){
    fortuneString += ', until you die of old age.'
    fortune.style.backgroundColor = 'white'

  }

  else{
    fortuneString+=', until you die in a fire.'
    fortune.style.backgroundColor = '#E0535B'

  }
  

  
  // set the inner text of the fortune element to our new string
  // you could also try HTML elements instead of just adding the text!
  fortune.innerText = fortuneString
  // and don't forget to clear out the inputs for the next fortune
  numElement.value = 0;
  nameElement.value = ''
}
