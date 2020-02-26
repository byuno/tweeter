$(document).ready(function () {
  // --- our code goes here ---
  const $counter = $(".tweetCounter")
  $(".tweetTextArea").on('input', function () {
    $counter.html(140 - this.value.length)
    if ((140 - this.value.length) < 0) {
      $counter.css("color", "red");
    } else {
      $counter.css("color", "#545149");
    }
  })
});

