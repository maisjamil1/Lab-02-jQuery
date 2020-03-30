$(document).ready(function() {
  function Animals(animalObj) {

    this.keyword = animalObj.keyword;
    this.image_url = animalObj.image_url;
    this.title = animalObj.title;
    this.description = animalObj.description;
    this.horns = animalObj.horns;

  }
  Dog.prototype.render = function() {
    let $animalClone = $("#animals-template").clone();
    $animalClone.find("h2").text(this.keyword);
    $animalClone.find("img").attr("src", this.image_url);
    $animalClone.find("p").text(this.description);
    // $dogClone.removeClass("dog-template");
    $animalClone.removeAttr("id");
    $animalClone.attr("id", this.keyword);
    $("main section:first").append($animalClone);
  };

  const readJson = () => {
    $.ajax("page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
      data.forEach(animal => {
        let animalObj = new Animals(animal);
        animalObj.render();
      });
    });
  };
  readJson();
});


