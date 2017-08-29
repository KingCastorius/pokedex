let name = document.getElementById("name")
let type = document.getElementById("type")
let outputName = document.getElementById("outputName")
let outputType = document.getElementById("outputType")
let id = 0;


function submit() {
  id += 1;
  outputName.innerHTML +=
    '<ul>' +
      '<li id="' + id + '">' + name.value + " " + type.value + '</li>'
    '</ul>'
}
