let app = document.querySelector('#app')
let res = document.querySelector('#restart')
let timer = document.querySelector('#time')
let result = document.querySelector('#result')
let intArr = []
let time = 40;
let interval
let startGame = document.querySelector('#start')
startGame.addEventListener('click', start)
let num = 1
res.addEventListener('click', restart)
for (let i = 1; i <= 25; i++) {
   intArr.push(i)
}
function start() {
   arrPaint()
   startGame.style.display = 'none'
   res.style.display = 'inline-block'
   timerCount()
   interval = setInterval(timerCount, 1000)
   checkVinner()
}
function checkVinner() {
   let cell = document.querySelectorAll('.cell')
   for (let i = 0; i < cell.length; i++) {
      cell[i].addEventListener('click', game)
      function game() {
         if (cell[i].innerHTML == num && time >= 0) {
            num++
            cell[i].classList.add('active')
         }
         if (num == 26) {
            clearInterval(interval)
            result.innerHTML = 'Вы выиграли!'
         }
         
      }
   }
}
function timerCount() {
   if (time >= 0) {
      timer.innerHTML = `Времени осталось: ${time}`
      time--
   } else {
      clearInterval(interval)
      result.innerHTML = 'Вы проиграли!'
   }
}
shuffleArray(intArr)
function arrPaint() {
   intArr.forEach(e => {
      let create = document.createElement('tr')
      create.className = 'cell'
      create.innerHTML = e
      create.setAttribute('style', RandomStyle())
      app.appendChild(create)
   })
}

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
}


function restart() {
   shuffleArray(intArr)
   app.innerHTML = null
   arrPaint()
   num = 1
   time = 40
   clearInterval(interval)
   interval = setInterval(timerCount, 1000)
   result.innerHTML = ''
   checkVinner()
}

function RandomColor() {
   return randomInteger(0, 255) + ',' + randomInteger(0, 255) + ',' + randomInteger(0, 255);
}

function RandomStyle() {
   return `font-size: ${randomInteger(15, 40)}px;color: rgb(${RandomColor()})`
}

function randomInteger(min, max) {
   // получить случайное число от (min-0.5) до (max+0.5)
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
}
