/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {
  //console log appears on the console (dev tools) on page.

  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd"
  //     },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ];

  console.log("ready!");
  // --- our code goes here ---
  const createTweetElement = function (tweet) {
    const $tweet = $(
      `
  <article class="tweetContainer">
    <header class="tweetHeader">
    <div>
      <span><img src=${tweet["user"]["avatars"]}> </span>
      <p class="tweetUserName">${tweet["user"]["name"]}</p>
    </div>
    
    <div>
      <span class="tweetHandle">${tweet["user"]["handle"]}</span>
    </div>
    </header>
    
    <p class= "tweetBody">${tweet["content"]["text"]}</p>
    
    <footer class="tweetFooter">
      <div>
        <span>${moment(tweet["created_at"]).fromNow()}</span>
      </div>
      <div>
        <span>Icons</span>
      </div>
    </footer>
  </article>
  `
    ).addClass('tweet');

    return $tweet;
  }

  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let i = 0; i < tweets.length; i++) {
      //console.log(tweets[i]);
      let $tweet = createTweetElement(tweets[i]);
      $(".tweetsContainer").prepend($tweet);
    }

  }

  // AJAX to post new tweets
  $(function () {
    const $form = $('#tweetForm');
    $form.submit(function (event) {
      event.preventDefault();
      const hasLength = function () {
        return $(".tweetTextArea").val() && $(".tweetTextArea").val().length > 0 ? true : false
      }
      // console.log(hasLength());
      if (!hasLength()) {
        alert("hello world")
      } else {
        const serializedForm = $(this).serialize();
        $.post('/tweets', serializedForm)
          .then(function () {
            loadTweets();
          })
      }

    })
  });

  //GET data from the server and present them on the page.
  const loadTweets = function () {
    $.get("/tweets", function (data) {
      renderTweets(data);
    });
  }
  loadTweets()

});


