$(document).ready(function() {
  function Animals(animalObj) {

    this.keyword = animalObj.keyword;
    this.image_url = animalObj.image_url;
    this.title = animalObj.title;
    this.description = animalObj.description;
    this.horns = animalObj.horns;

  }
  Dog.prototype.render = function() {
    let $animalClone = $("#photo-template").clone();
    $animalClone.find("h2").text(this.title);
    $animalClone.find("img").attr("src", this.image_url);
    $animalClone.find("p").text(this.description);
    $animalClone.removeAttr("id");
    $animalClone.attr("id", this.keyword);
    $("main").append($animalClone);

    //// Dog.prototype.renderoption = function() {
    //   let $animaselect = $("select").clone();
    //   $animalClone.find("h3").text(this.keyword);
    //   $("option").append($animaselect);
    //// };
  };

  const readJson = () => {
    $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
      data.forEach(animal => {
        let animalObj = new Animals(animal);
        animalObj.render();
      });
    });
  };
  readJson();
});




