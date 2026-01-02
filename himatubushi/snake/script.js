const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')
const size = 20

let snake, dir, food, score, bestScore

function init() {
  snake = [{x:8,y:8}]
  dir = {x:1,y:0}
  food = {x:5,y:5}
  score = 0
  bestScore = parseInt(localStorage.getItem('snakeBest'))||0
  draw()
}

function draw() {
  ctx.fillStyle='#fff'
  ctx.fillRect(0,0,canvas.width,canvas.height)

  ctx.fillStyle='red'
  ctx.fillRect(food.x*size,food.y*size,size,size)

  ctx.fillStyle='green'
  snake.forEach(p=>ctx.fillRect(p.x*size,p.y*size,size,size))

  ctx.fillStyle='black'
  ctx.font='20px monospace'
  ctx.fillText('SCORE:'+String(score).padStart(4,'0'),10,25)
  ctx.fillText('BEST:'+String(bestScore).padStart(4,'0'),10,50)
}

function update() {
  const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y}

  if(head.x<0||head.x>=canvas.width/size||head.y<0||head.y>=canvas.height/size||snake.some(s=>s.x===head.x&&s.y===head.y)){
    if(score>bestScore){
      bestScore=score
      localStorage.setItem('snakeBest',bestScore)
    }
    init()
    return
  }

  snake.unshift(head)

  if(head.x===food.x&&head.y===food.y){
    score=Math.min(score+1,9999)
    do{
      food.x=Math.floor(Math.random()*canvas.width/size)
      food.y=Math.floor(Math.random()*canvas.height/size)
    }while(snake.some(s=>s.x===food.x&&s.y===food.y))
  }else snake.pop()

  draw()
}

document.addEventListener('keydown',e=>{
  if(e.key==='ArrowUp'&&dir.y===0) dir={x:0,y:-1}
  if(e.key==='ArrowDown'&&dir.y===0) dir={x:0,y:1}
  if(e.key==='ArrowLeft'&&dir.x===0) dir={x:-1,y:0}
  if(e.key==='ArrowRight'&&dir.x===0) dir={x:1,y:0}
})

let lastTime=0
const speed=5
function gameLoop(time){
  if(!lastTime||time-lastTime>1000/speed){
    update()
    lastTime=time
  }
  requestAnimationFrame(gameLoop)
}

init()
requestAnimationFrame(gameLoop)
