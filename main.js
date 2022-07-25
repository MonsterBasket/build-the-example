// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
let errorMessage = document.querySelector('#modal');
errorMessage.className = "hidden";

for (const heart of document.querySelectorAll(".like-glyph")){
  heart.addEventListener('click', like);
}

function like(event){
  mimicServerCall()
    .then((a) => {
  const heart = event.target;
  if (heart.className === "like-glyph"){
    heart.innerText = FULL_HEART;
    heart.className = "activated-heart"
  }
  else{
    heart.innerText = EMPTY_HEART;
    heart.className = "like-glyph";
  }
  console.log(event.target, "clicked");})
      .catch((object) => {
        errorMessage.className = "";
        document.querySelector("#modal-message").innerHTML = (JSON.stringify(object))
        setTimeout(a => errorMessage.className = "hidden", 5000)
      })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
