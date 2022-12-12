const $pokeContainer = document.getElementById('poke_container')
let pokemons_number = 20;

async function getPokemon (id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const response = await fetch(url)
  const pokemon = await response.json()
  createPokemonCard(pokemon)
}

async function fetchPokemons (){
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
}

fetchPokemons ()

function createPokemonCard (pokemon) {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')
  const {id, name, sprites, types} = pokemon
  const type = types[0].type.name
  const pokeInnerHTML = `
    <div class = "poke_container">
      <div>
        <img class = "poke" src="${sprites.front_default}" alt="${name}"/>
      </div>
      <div class = "info">
        <span>${id}</span>
        <h2>${name}</h2>
       <small>Type: <span>${type}</span></small>
      </div>
    </div>
  `
  pokemonEl.innerHTML = pokeInnerHTML
 $pokeContainer.appendChild(pokemonEl)
}

createPokemonCard()

const $pokemonInfo = document.getElementById('pokemonInfo')

$pokeContainer.addEventListener('click', createPokeInfo)

function createPokeInfo () {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')
  const {id, name, sprites, types} = pokemon
  const type = types[0].type.name
  const pokeInnerHTML = `<div class="pokemon">
  <div>
      <h1>${name} <span>${id}</span></h1>
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
      <img class="responsive" src="${sprites.front_default}" alt="${name}">
  </div>
  <p class="description">
      <!-- description -->
      ${description}
  </p>
  <div class="version">
      <!-- showing the version (red or blue)-->
      <div class="versionFlex">
          <p>Version:</p>
          <img class="ball" src="${versions.generation-i.red-blue.front_default}" alt="pokemon ball red">
       </div>
  </div>
  <div id="information" class="information">
       <div>
          <!-- height -->
          <p class="bold">Height</p>
          <p>${height}</p>
      </div>
      <div>
          <!-- weight -->
          <p class="bold">Weight</p>
          <p>${weight}</p>
      </div>
      <div>
          <!-- gender -->
          <p class="bold">Gender</p>

      </div>
      <div>
          <!-- category -->
          <p class="bold">Category</p>
          <p>${type[0].type.name}</p>
      </div>
      <div>
          <!-- abilities -->
          <p class="bold">Abilities</p>
          <ul>
              <li>${abilities[1].ability.name}</li>
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
              <li><button class="${type}">Grass</button></li>
              <li><button class="${type}">Poison</button></li>
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
  </div>`

  pokemonEl.innerHTML = pokeInnerHTML
 $pokemonInfo.appendChild(pokemonEl)
}

