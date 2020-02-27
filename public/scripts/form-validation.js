$(document).ready(function () {
  // --- our code goes here ---
  const $button = $(".tweetButton")

  $(".tweetTextArea").on('input', function () {

    if(this.value.length === 0 || this.value === null){
      // console.log("should be disabled", this.value.length);
      alert("The text box is empty. Please tweet something")
    } else if(this.value.length > 140){
      $button.prop('disabled', true);
      alert("You've entered too many words. Please remove some.")
    }else {
      $button.prop('disabled', false);
    }
  })
});