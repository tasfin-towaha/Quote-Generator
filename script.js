const QuoteElm = document.getElementById("Quote");
const author = document.getElementById("author");
const btnElm = document.getElementById("btn");
const tweetBtn = document.getElementById("tweet");

const api_url = "https://dummyjson.com/quotes/random";

async function quote() {
  const response = await fetch(api_url);
  const data = await response.json();

  QuoteElm.innerHTML = data.quote;
  author.innerHTML = data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      QuoteElm.innerHTML +
      "--- by" +
      data.author,
    "Tweet Window",
    "width=600px, height=300px"
  );
}

btnElm.addEventListener("click", quote);
tweetBtn.addEventListener("click", tweet);

quote();
tweet();
