const $pokedex = document.getElementById('pokemonGrid')
const $saved = document.getElementById('caughtList')

let pokedex = []
let saved = []


function buildPokedex (pokedex) {
  const html = []

  for (const pokemon of pokedex) {
    html.push(/*html*/ `
        <a>
          <img>
          <h2>${pokemon.name}</h2>
        </a>
    `)
  }
  return html
}

async function getPokedex () {
  const response = await fetch ('https://pokeapi.co/api/v2/pokemon/')
  const pokedex = await response.json()

  //parseUrl(pokedex.results[object.url])
  
  const html = buildPokedex(pokedex)
  // console.log(html)
  $pokedex.innerHTML = html.join('')
}

getPokedex()

async function getPokemon (id) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
  const pokemon = await response.json()

  $pokedex.innerHTML = `<div class="container">
  <div id="next" class="next">
      <!-- adding go back and go to next button -->
      <button>
          <img class="transform" src="icons/arrow-white.png" alt="arrow white">
          <span id="hex">#905</span><span>Enamorus</span>
      </button>
      <button>
          <span>Ivysaur</span><span id="hex">#002</span>
          <img class="transform-left" src="icons/arrow-white.png" alt="arrow white">
      </button>
  </div>
  <div class="pokemon">
      <div>
          <h1>${pokemon.name}<span>${pokemon.id}</span></h1>
      </div>
      <div id="caught">
          <!-- adding buttons that state if a pokemon is caught or not -->
      </div>
      <div class="cta">
          <p>Add your pokemon to the caught list and save it to local storage. This way you'll be able to acess your pokemon at all times!</p>
          <button>Add to My Pokemon</button>
      </div>
  </div>
  <div class="myPokemonGrid">
      <div class="pokeImage">
          <!-- displaying the pokemon -->
          <img class="responsive" src="${pokemon.sprites.pokemon.other.official-artwork.front_default}" alt="${pokemon.name}">
      </div>
      <p class="description">
          <!-- description -->
          There is a plant seed on its back right from the day this Pokemon is born. The seed slowly grows larger.
      </p>
      <div class="version">
          <!-- showing the version (red or blue)-->
          <div class="versionFlex">
              <p>Version:</p>
              <img class="ball" src="icons/ball_blue.png" alt="pokemone ball blue">
              <img class="ball" src="icons/ball_red.png" alt="pokemon ball red">
           </div>
      </div>
      <div id="information" class="information">
           <div>
              <!-- height -->
              <p class="bold">Height</p>
              <p>${pokemon.height}</p>
          </div>
          <div>
              <!-- weight -->
              <p class="bold">Weight</p>
              <p>${pokemon.weight}</p>
          </div>
          <div>
              <!-- gender -->
              <p class="bold">Gender</p>
              <p>${pokemon.gender}</p>
          </div>
          <div>
              <!-- category -->
              <p class="bold">Category</p>
              <p>Seed</p>
          </div>
          <div>
              <!-- abilities -->
              <p class="bold">Abilities</p>
              <ul>
                  <li>${pokemon.abilities[1].ability.name}</li>
              </ul>
          </div>
      </div>
  </div>
  <div class="facts">
      <div>
          <div class="type">
              <!-- type -->
              <p>Type:</p>
              <ul>
                  <li><button class="grass">Grass</button></li>
                  <li><button class="poison">Poison</button></li>
              </ul>
          </div>
          <!-- weaknesses -->
          <div class="weak">
              <p>Weaknesses:</p>
              <ul class="weak-buttons">
                  <li><button class="fire">Fire</button></li>
                  <li><button class="psychic">Psychic</button></li>
                  <li><button class="flying">Flying</button></li>
                  <li><button class="ice">Ice</button></li>
              </ul>
          </div>
      </div>
  </div>`
}

// parse function 
// returns pokemon id
function parseUrl (url) {
  return url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
}