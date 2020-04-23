
let count = 0; 
let counter = document.getElementById('startCount')
document.getElementById('minusButton').onclick=function(){
    count --
    document.getElementById('startCount').innerHTML=count;
    if (count < 0 ){
        counter.style.color = '#c70039'
      } else if (count === 0){
          counter.style.color = '#fff'
      }
    
}

document.getElementById('addButton').onclick = function(){
    count ++
    document.getElementById('startCount').innerHTML = count;
    if (count > 0 ){
        counter.style.color = '#0c9463'
      }  else if (count === 0){
        counter.style.color = '#fbe3b9'
    }
}

