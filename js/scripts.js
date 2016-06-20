// Backend logic
//Shelter
function Shelter (){
  this.animals = [];
}

Shelter.prototype.addAnimal = function (animal) {
  this.animals.push(animal);
  animal.id = this.animals.length -1;
};

Shelter.prototype.listAnimals = function (adopted) {
    var htmlText = ""
    this.animals.forEach(function(animal,index){
      console.log(index);
      if (animal.adopted === adopted) {
        htmlText = htmlText +
                  "<div class='col-xs-4 preview-pic animal'  id='" + index + "'  data-toggle='modal' data-target='#myModal' >" +
                  "<h3 id='preview-name'>" + animal.name + "</h3>" +
                  "<img src=" + animal.image + ">" +
                  "<p>" +
                  animal.type+ "," + animal.age + " Years Old, " + animal.gender +
                  "</p>" +
                  // "<button type='button' id='" + index + "' class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal'>" +
                  // "more info..." +
                  // "</button>" +
                  "</div>";
      }else if (adopted = "all") {
        htmlText = htmlText +
                  "<div class='col-xs-4 preview-pic animal'  id='" + index + "'   data-toggle='modal' data-target='#myModal' >" +
                  "<p id='preview-name'>" + animal.name + "</p>" +
                  "<img src=" + animal.image + ">" +
                  "<p>" +
                  animal.type+ "," + animal.age + " Years Old, " + animal.gender +
                  "</p>" +
                  // "<button type='button' id='" + index + "' class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal'>" +
                  // "more info..." +
                  // "</button>" +
                  "</div>";
      }
  });
  console.log(htmlText);
  return htmlText;
};

// Animal
function Animal (type,name, age, gender, description, image, dateAdded){
  this.id = null;
  this.type = type;
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.description = description;
  this.image = image;
  this.adopted = 0;
  this.dateAdded = dateAdded;
}

Animal.prototype.adopt = function () {
  this.adopted = 1;
};

Animal.prototype.showDetails = function(id) {
  var htmlText = ""
  //add here code for modal with description
  return htmlText
};


//Front End
$(document).ready(function() {
  var newShelter = new Shelter();

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

    var newAnimal = new Animal (type, name,age, sex, description, image, Date.now());

    newShelter.addAnimal(newAnimal);

    $(".row").prepend(newShelter.listAnimals("all"));
    $("form").trigger("reset");
  });

  $("#adopt").click(function() {
    $(".new-animal").hide();
    $("#animal-display").show();
  });

  $("div#animal-row").on("click",".animal",function(){
    var animalId = this.id;
    $("p#species").text("Species: " + newShelter.animals[animalId].type);
    $("p#name").text("Name: " + newShelter.animals[animalId].name);
    $("p#age").text("Age: " + newShelter.animals[animalId].age);
    $("p#sex").text("Sex: " + newShelter.animals[animalId].gender);
    $("p#description").text("Description: " + newShelter.animals[animalId].description);
  });

});
