let player = {
  hp: 100,
  attack: 20,
  defense: 20
}

let cyborg = {
  hp: 150,
  attack: 10,
  defense: 30
}

const playerBox = document.getElementById('player-box')

const playerAtkBtn = document.createElement('button')
playerBox.appendChild(playerAtkBtn)

const enemyBox = document.getElementById('enemy-box')

const enemyAtkBtn = document.createElement('button')
enemyBox.appendChild(enemyAtkBtn)

enemyAtkBtn.innerText = "Attack"
playerAtkBtn.innerText = "Attack"

//add listener to attack buttons
playerAtkBtn.addEventListener('click', () => {
  cyborg.hp -= player.attack * (1 - (cyborg.defense / 100))
  if (cyborg.hp < 0){
    cyborg.hp = 0
  }
  enemyHp.innerText = cyborg.hp
})

// if (cyborg.hp = 0) {
//   enemyHp.style.color = 'yellow'
// }

enemyAtkBtn.addEventListener('click', () => {
  player.hp -= cyborg.attack * (1- (player.defense / 100))
  if (player.hp < 0){
    player.hp = 0
  }
  playerHp.innerText = player.hp
})

const playerHp = document.getElementById('player-hp')
playerHp.innerText = player.hp

const enemyHp = document.getElementById('enemy-hp')
enemyHp.innerText = cyborg.hp