const myTitle = 'all in green my love went riding'
let myObject = {'adjectives': ['green', 'great', 'gold', 'silver','lean', 'merry', 'dappled', 'red', 'rare'], 'nouns': ['love', 'horse', 'dawn', 'houd', 'deer', 'dream']}
let myArticleArray = ['the', 'a', 'my']

function returnPoem(title, article, noun, adjective) {
  return title + ': ' 
}

W(returnPoem(myTitle, myArticleArray[0], myObject.adjectives[0],myObject.nouns[0]))

function forLoopPoem(title, articles, nouns, adjectives) {
  W(title)
  for (i = 0; i < 3; i++) {
    W(articles[i] + ' ' + nouns[i] + ' ' + adjectives[i])
  }
}

// forLoopPoem(myTitle, myArticleArray, myObject.nouns, myObject.adjectives)


// while loop poem:
let counter = 0
while(counter < 7) {
  W(getRandomItem(myArticleArray) + '   ' + getRandomItem(myObject.adjectives) + '   ' + getRandomItem(myObject.nouns))
  counter++

}

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

return array[Math.floor(Math.random()*array.length)]
}

var divs = document.getElementsByTagName('div');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

for ( var i=0; i < divs.length; i++ ) {
 	
    var thisDiv = divs[i];
    
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}
