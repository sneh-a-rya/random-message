var button = document.querySelector("button");



var songs = ["You Should See Me in a Crown - Billie Eilish", "Water - Pentatonix", "Fall Back - Cimorelli", "Shallow - Lady Gaga & Bradley Cooper", "Xanny - Billie Eilish", "Ref - Pentatonix", "Million Reasons - Lady Gaga", "Flames - Lauren Cimorelli", "Cracked - Pentatonix", "Rose Gold - Pentatonix"];

var randomNum = Math.random();
var randomNumBig = randomNum*songs.length;
var randomRound = Math.floor(randomNumBig);

button.addEventListener("click", function () {
  document.getElementById ("song").innerHTML = songs [randomRound];
})
