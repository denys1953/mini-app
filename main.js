let app = document.querySelector('#app')
let res = document.querySelector('#restart')
let intArr = []
res.addEventListener('click', restart)
for (let i = 1; i <= 25; i++) {
   intArr.push(i)
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
}
arrPaint() 

function RandomColor() {
   return randomInteger(0, 255) + ',' + randomInteger(0, 255) + ',' + randomInteger(0, 255);
}

function RandomStyle() {
   return `font-size: ${randomInteger(10, 30)}px;color: rgb(${RandomColor()})`
}

function randomInteger(min, max) {
   // получить случайное число от (min-0.5) до (max+0.5)
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
}