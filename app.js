let allTypes = document.getElementById('allTypes');
let nameOutput = document.getElementById('pokemonOutput');
let matchedTypes = [];

let pokemon = [
  {name: 'pikachu', type: 'electric'},
  {name: 'charmander', type: 'fire'},
  {name: 'squirtle', type: 'water'},
  {name: 'bulbasaur', type: 'grass'},
  {name: 'manectrike', type: 'electric'},
];

function search() {
  pokemonOutput.innerHTML = '';
  let matchedTypes = [];
  for(let i = 0; i < pokemon.length; i++) {
    if(pokemon[i].type === allTypes.value){
      matchedTypes.push(pokemon[i]);
    } else {
      continue;
    }
  }

  for(let i = 0; i < matchedTypes.length; i++) {
    console.log(matchedTypes[i]);
    pokemonOutput.innerHTML +=
    '<ul>' +
      '<li>' + 'Name: ' +matchedTypes[i].name + '</li>' +
      '<li>' + 'Name: ' +matchedTypes[i].type + '</li>' +
    '</ul>'
  }
}
