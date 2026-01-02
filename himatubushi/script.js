let count=0
let max=Number(localStorage.getItem("maxStreak"))||0
let answer=Math.random()<0.5?0:1

const maxEl=document.getElementById("max")
const probEl=document.getElementById("prob")

maxEl.textContent="最大連続記録: "+max

document.querySelectorAll("button").forEach(b=>{
  b.onclick=()=>guess(Number(b.dataset.v))
})

function guess(v){
  if(v===answer){
    count++
    if(count>max){
      max=count
      localStorage.setItem("maxStreak",max)
    }
  }else{
    count=0
  }
  answer=Math.random()<0.5?0:1
  probEl.textContent="1/"+(2**count)
  maxEl.textContent="最大連続記録: "+max
}
