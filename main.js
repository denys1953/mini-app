let app = document.querySelector('#app')
let res = document.querySelector('#restart')
let intArr = []
let arr = []
res.addEventListener('click', restart)
for (let i = 1; i <= 25; i++) {
   intArr.push(i)
}
for (let i = 10; i <= 30; i++) {
   arr.push(i)
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

function RandomInt() {
   return arr[Math.floor(Math.random() * arr.length)];
}

function RandomStyle() {
   return `font-size: ${RandomInt()}px`
}
