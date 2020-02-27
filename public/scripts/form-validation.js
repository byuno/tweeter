$(document).ready(function () {
  // --- our code goes here ---
  const $button = $(".tweetButton")
//$button.prop('disabled', true);



  // $button.on('click', function(){
  //   //if textbox is empty then display alertp
  //   const hasLength = function(){
  //     return $(".tweetTextArea").val() && $(".tweetTextArea").val().length > 0 ? true : false
  //   }
  //   // console.log(hasLength());
  //   if(!hasLength()){
  //     alert("hello world")
  //   }

  // })

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

    // $counter.html(140 - this.value.length)
    // if ((140 - this.value.length) < 0) {
    //   $counter.css("color", "red");
    // } else {
    //   $counter.css("color", "#545149");
    // }
  })
});