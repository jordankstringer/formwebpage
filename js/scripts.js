$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var beginningInput= $("input#beginning").val();
    var endingInput = $("input#ending").val();


    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".beginning").text(beginningInput);
    $(".ending").text(endingInput);


    $("#confirmation").show();

    event.preventDefault();
  });
});
