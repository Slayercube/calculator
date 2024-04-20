let btnClear = document.getElementById('btnClear')
let display = document.getElementById('myDisplay')

let btn0 = document.getElementById('btn0')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btnDiv = document.getElementById('btnDiv')
let btnPlus = document.getElementById('btnPlus')
let btnMinus = document.getElementById('btnMinus')
let btnx = document.getElementById('btnx')
let btnEz = document.getElementById('btnEz')


let arryOfBtn = [btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btnDiv,btnPlus,btnMinus,btnx,btnEz,btnClear]
let firstNumber = 0
let operation = null

function setDIsplaytext(btn){
  if(btn.innerText === 'C'){
    firstNumber = 0
    operation = null
    display.innerText= ''
  } else if(['+', '-', 'x', '/'].includes(btn.innerText)){
    firstNumber = parseFloat(display.innerText)
    operation = btn.innerText
    display.innerText= ''
  } else if(btn.innerText === '='){
    if(operation === '+'){
      display.innerText = firstNumber + parseFloat(display.innerText)
    } else if(operation === '-'){
      display.innerText = firstNumber - parseFloat(display.innerText)
    } else if(operation === 'x'){
      display.innerText = firstNumber * parseFloat(display.innerText)
    } else if(operation === '/'){
      display.innerText = firstNumber / parseFloat(display.innerText)
    }
    firstNumber = 0
    operation = null
  } else {
    display.innerText += btn.innerText
  }
}
arryOfBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    setDIsplaytext(btn)
  })
}
)