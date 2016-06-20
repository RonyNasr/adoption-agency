$(document).ready(function() {
  $("#list").click(function() {
    $(".new-animal").show();
    $("#animal-display").hide();
  });
  $("#new-animal").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var sex = $("#male-female").val();
    var type = $("#type").val();
    var age = parseInt($("#age").val());
    var description = $("#description").val();
    var image = $("#image").val();
    // var newPet = new Pet
    $(".row").prepend("<div class='col-xs-4' class='preview-pic'>" + "<img src=" + image + ">" +
                        "<p id='preview-name'>" + name + "</p>" +
                      //   "<button id='more-info'>" + "Click for more info" + "</button>" +
                      // "</div>"
                      "<button type='button' class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal'>" +
                        "Click for more info" +
                      "</button>"
                    );
    $("form").trigger("reset");
  });

  $("#adopt").click(function() {
    $(".new-animal").hide();
    $("#animal-display").show();
  });

  // $("button.btn btn-primary btn-lg").click(function() {
  //   $("#myModal").modal('show');
  // });

      // '<div id="myModal" class="modal fade" role="dialog">' +
    //                       '<div class="modal-dialog">' +
    //                         '<div class="modal-content">' +
    //                           '<div class="modal-header">' +
    //                             '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
    //                             '<h4 class="modal-title">Modal Header</h4>' +
    //                           '</div>' +
    //                         '<div class="modal-body">' +
    //                           '<p>Some text in the modal.</p>' +
    //                         '</div>' +
    //                         '<div class="modal-footer">' +
    //                           '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
    //                         '</div>' +
    //                       '</div>' +
    //                     '</div>' +
    //                   '</div>');

  // });
});
