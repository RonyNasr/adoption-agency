$(document).ready(function() {
  $("#list").click(function() {
    $(".new-animal").show();
  });
  $("#new-animal").submit(function(event) {
    event.preventDefault();


    var name = $("#name").val();
    var sex = $("#male-female").val();
    var type = $("#type").val();
    var age = parseInt($("#age").val());
    var description = $("#description").val();
    var image = $("#image").val();

    $("p#test").append("<img src=" + image + ">");
    // var newPet = new Pet
  });
  $("#adopt").click(function() {
    $(".new-animal").hide();
  });
});
