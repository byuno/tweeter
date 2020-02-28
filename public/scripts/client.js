/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {
  //console log appears on the console (dev tools) on page.

  console.log("ready!");
  // --- our code goes here ---
  const createTweetElement = function (tweet) {

    const escape =  function(str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }

    const $tweet = $(
      `
      <article class="tweetContainer">
        
        <header class="tweetHeader">
          
        <div>
          <span><img src=${tweet["user"]["avatars"]}> </span>
          <p class="tweetUserName">${tweet["user"]["name"]}</p>
        </div>
        
        <div>
          <span class="tweetHandle">${escape(tweet["user"]["handle"])}</span>
        </div>
      
      </header>
        
        <p class= "tweetBody">${escape(tweet["content"]["text"])}</p>
        
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
    const getLength = function () {
      return $(".tweetTextArea").val() && $(".tweetTextArea").val().length
    }
    
    $form.submit(function (event) {
      event.preventDefault();
      
      // console.log(hasLength());
      if (getLength() <= 0) {
        $(".alert").text("The text box is empty. Please tweet something").slideDown(400);
      } else if(getLength() > 140 ){
        $(".alert").text("The text box is full. Please delete something").slideDown(400);
      } else{
        $(".alert").text("The text box is full. Please delete something").slideUp(400);
        $(".alert").text("The text box is empty. Please tweet something").slideUp(400);
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

//Arrow feature
  $( ".arrow-icon" ).click(function() {
    if($(this).hasClass("open")){
      $(".new-tweet").slideUp(400);
      $(".arrow-icon").removeClass("open");
    } else {
      $(this).addClass("open");
      $(".new-tweet").slideDown(400);
    }
      
  });

});


