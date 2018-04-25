var quoteHTML = document.getElementById("quote");
var bodyTag = document.getElementById("body");
var ourRequest = new XMLHttpRequest();
var quoteRequest = new XMLHttpRequest();
var btn = document.getElementById('button');
var twit = document.getElementById('twHref');

ourRequest.open('GET', 'https://scomen.github.io/Quote-Machine/colors.json');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
 renderHTML(ourData);

}
ourRequest.send();

function renderHTML(data){
  ranNum = Math.floor((Math.random()*data.length));
  quoteRequest.open('GET', 'https://scomen.github.io/Quote-Machine/quotes.json');
  quoteRequest.onload = function(){
  var ourQuote = JSON.parse(quoteRequest.responseText);
  quoteHTML.insertAdjacentHTML("beforeend", ourQuote[ranNum].quoteText);
  twit.href="https://twitter.com/intent/tweet?hashtags=quotes&text=" + ourQuote[ranNum].quoteText;
};
   quoteRequest.send();
   
   bodyTag.style.background=data[ranNum].color;
   bodyTag.style.color=data[ranNum].color;
   btn.style.background=data[ranNum].color;
};

btn.addEventListener("click", pageReload)
function pageReload(){
  location.reload(true)
}