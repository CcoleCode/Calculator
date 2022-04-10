function Evaluator(self){

  let a = document.getElementById('calculatorInput')

  if (self == 'clear') {
    location.reload()
  }
  else if (self == '=') {
    let answer = eval(a.value)
    a.value = `${answer}`
  }
  else {
    a.value += `${self}`
  }

}




/*
const disp = document.getElementById("disp");
const 0 = document.getElementById('0')
const 1 = document.getElementById('1')
const 2 = document.getElementById('2')
const 3 = document.getElementById('3')
const 4 = document.getElementById('4')
const 5 = document.getElementById('5')
const 6 = document.getElementById('6')
const 7 = document.getElementById('7')
const 8 = document.getElementById('8')
const 9 = document.getElementById('9')
const "plus" = document.getElementById('+')
const "minus" = document.getElementById('-')
const "times" = document.getElementById('*')
const "divide" = document.getElementById('/')
const "equals" = document.getElementById('=')
const "decimal" = document.getElementById('.')
const "clear" = document.getElementById('clear')

0.addEventListener('click', Eval)
1.addEventListener('click', Eval)
2.addEventListener('click', Eval)
3.addEventListener('click', Eval)
4.addEventListener('click', Eval)
5.addEventListener('click', Eval)
6.addEventListener('click', Eval)
7.addEventListener('click', Eval)
8.addEventListener('click', Eval)
9.addEventListener('click', Eval)
+.addEventListener('click', Eval)
-.addEventListener('click', Eval)
*.addEventListener('click', Eval)
/.addEventListener('click', Eval)
=.addEventListener('click', Eval)
..addEventListener('click', Eval)
clear.addEventListener('click', Eval)





Eval()

function Eval (n) {
  display.innerHTML += n;
}
*/
