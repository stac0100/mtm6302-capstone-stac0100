const $pokemonGrid = document.getElementById('pokemonGrid')
const url = "https://pokeapi.co/api/v2/pokemon/1";

let pokemons = []

function createPokemon (pokemons) {
  const html = []
  for (const pokemon of pokemons) {
    html.push(/*html*/ `
      <div>
        <div class="mainPokemon">
          <div><img src="${pokemon.sprites.other[official-artwork].front_default}" alt="pokemon"></div>
          <span>${pokemon.id}</span>
        </div>
        <div class="pokemonContent">
          <h2 id="pokemonName">${pokemon.name}</h2>
          <div>
            <button class="grass">${abilities[0].ability.name}</button>
            <button class="poison">${abilities[1].ability.name}</button>
          </div>
        </div>
      </div>
    `)
  }
  return html
}
async function getPokemon () {
  const response = await fetch(url)
  pokemons = await response.json()

  const html = createPokemon(pokemons)
  console.log(html)
}

getPokemon()


// adding dropdown menu for filters
// toggle between hiding and showing the dropdown content

function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropButton')) {
    var dropdowns = document.getElementsByClassName("dropdown-filter");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// hamburger menu

const $hamburger = document.getElementById('hamburger')
const $nav = document.getElementById('nav')

$hamburger.addEventListener('click', function(){
  $nav.classList.add('show');
})

const $x = document.getElementById('x');

$x.addEventListener('click', function(){
  $nav.classList.remove('show');
});

// this is the pokemon structure 
//pokemon.push(`<div>
//     <div class="mainPokemon">
//         <div><img src="images/001.png" alt="pokemon"></div>
//         <span>#001</span>
//     </div>
//     <div class="pokemonContent">
//         <h2 id="pokemonName">Bulbasaur</h2>
//         <div>
//             <button class="grass">Grass</button>
//             <button class="poison">Poison</button>
//         </div>
//       </div>
//     </div>`)


