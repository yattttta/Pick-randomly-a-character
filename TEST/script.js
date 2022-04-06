$(document).ready(() => {
const newPerso = document.getElementById('perso')

let persos = ['Bloodhound', 'Octane', 'Wraith', 'Valk', 'Pathfinder', 'Bangalore', 'Lifeline', 'Ash', 'Horizon', 'Loba', 'Gibby', 'Maggie', 'Fuse', 'Mirage', 'Wattson', 'Revenant', 'Caustic', 'Crypto', 'Seer', 'Rampart'];
function randomPerso() {
    let  random = Math.floor((Math.random() * 20))
    $('#perso').html(persos[random])
}

newPerso.addEventListener('click', randomPerso)
})