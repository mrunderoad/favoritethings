let storeData = {
  "food":"",
  "band":"",
  "animal":"",
  "ice":""
};

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let food = $("input#food").val(); 
    let band = $("input#band").val(); 
    let animal = $("input#animal").val(); 
    let ice = $("input#ice").val(); 

    storeData.food = food;
    storeData.band = band;
    storeData.animal = animal;
    storeData.ice = ice;
    console.log();

    $(".food").text(food);
    $(".band").text(band);
    $(".animal").text(animal);
    $(".ice").text(ice);

  
  });
});