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
  $nav.classList.add('show')
})

const x = document.getElementById('x')

x.addEventListener('click', function(){
  $nav.classList.remove('show')
})

// adding pokemon to homepage 
const $pokemonGrid = document.getElementById('pokemonGrid')
const pokemon = []

// adding pokemon to myPokemon 

const $myPokemonGrid = document.getElementById('myPokemonGrid')
const myPokemon = []

// might need to change to a for of loop?
// needs ${i} to show different images 
for (let i = 0; i < 19; i++) {
    pokemon.push(`<div>
    <div class="mainPokemon">
        <div><img src="images/001.png" alt="pokemon"></div>
        <span>#001</span>
    </div>
    <div class="pokemonContent">
        <h2>Bulbasaur</h2>
        <div>
            <button class="grass">Grass</button>
            <button class="poison">Poison</button>
        </div>
      </div>
    </div>`)
    myPokemon.push(`<div class="pokem">
  <img class="responsive" src="images/001.png" alt="pokemon">
  </div>`)
}
// adding pokemon to HTML
$pokemonGrid.innerHTML = pokemon.join('')

// adding myPokemon to HTML
$myPokemonGrid.innerHTML = myPokemon.join('')