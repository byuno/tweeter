$(document).ready(function () {
  // --- This disables/endables the button ---
  const $button = $(".tweetButton")

  // $(".tweetTextArea").on('input', function () {
    $button.on('click', function () {

    if(this.value.length === 0 || this.value === null){
      // console.log("should be disabled", this.value.length);
      // $(".alert p").text("The text box is empty. Please tweet something").slideDown(400);
      $button.prop('disabled', true);
    } else if(this.value.length > 140){
      // $(".alert p").text("The text box is empty. Please tweet something").slideDown(400);
       $button.prop('disabled', true);
      // alert("You've entered too many words. Please remove some.")
    }else {
      $button.prop('disabled', false);
    }
  })
});