const POKEMON_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon/';
const form = document.querySelector('form');
const cardSection = document.querySelector('#card-section');

form.addEventListener('submit', event => {
    event.preventDefault();

    let pokemonId = form.querySelector('input').value;

    fetch(POKEDEX_URL+pokemonId, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(pokemon => {

        cardSection.innerHTML = `
            <div class="card-container">
                <div class="card-header ${pokemon.types[0].type.name}">

                </div>

                <div class="card-body">
                    <div class="card-body-img">
                        <img src="${POKEMON_IMG+pokemon.id}.png" alt="">
                    </div>

                    <h1 class="card-body-title">
                        ${pokemon.name}
                        <span>${pokemon.base_experience}</span>
                    </h1>

                    <p class="card-body-text">${pokemon.stats[0].base_stat}</p>
                </div>

                <div class="card-footer">
                    <div class="card-footer-stats">
                        <h3>${pokemon.stats[1].base_stat}</h3>
                        <p>Ataque</p>
                    </div>

                    <div class="card-footer-stats">
                        <h3>${pokemon.stats[2].base_stat}</h3>
                        <p>Ataque especial</p>
                    </div>

                    <div class="card-footer-stats">
                        <h3>${pokemon.stats[3].base_stat}</h3>
                        <p>Defesa</p>
                    </div>
                </div>
            </div>

            <span id="close-button" onclick="closeModal()">&times;</span>
        `;

        cardSection.classList.toggle('modal-activate');
    })
    .catch(error => alert('Ocorreu um erro. Certifique-se de que está digitando um número a partir de 1 e tente novamente.'));
});

function closeModal() {
    cardSection.innerHTML = '';
    cardSection.classList.toggle('modal-activate');
}