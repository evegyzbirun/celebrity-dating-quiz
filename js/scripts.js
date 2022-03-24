$(document).ready(function() {
  $("form#profile").submit(function(event) {
    event.preventDefault();
    const income = parseInt($("input#income").val());
    const gender = $("select#gender").val();
    let match =""
    if (income < 100) {
      $("#fail").show(); 
    } else if (gender === "m")  {
      match = "Angelina Jolie"
      $("#fail").hide();
      $("#match").text(match);
      $("#result").show();
    } else {
      match = "Hank Willaims"
      $("#fail").hide();
      $("#match").text(match);
      $("#result").show();
    }

    

  });
});