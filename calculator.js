let input="0"
let output="0"

function cleardisplay(){
  input="0"
  output=input
  document.getElementById("display").innerText=output
  }



function newnumber(id)
{
  input = input+document.getElementById(id).innerText
  input=input.replace(/^0+/,"")
  if(input==""){input = "0"}
  output =input.replace(/[\.]+/g,".")
  document.getElementById("display").innerText=output
}

function newdecimal(){
  let reg=/[\.][0-9]*$/
  if(!reg.test(input)){input=input+"."}
  output=input
  document.getElementById("display").innerText=output
}


function newoperator(id){
  let operator=document.getElementById(id).innerText
  let reg1=/[\+\-\*\/]+$/
  let reg2=/[\+\-\*\/]\-$/
  if(!reg1.test(input)){    //if the last string of input is not "+-*/", add the operator
    input=input+operator
  }else if(operator=="-"){  //if the operator is "-", add the operator
    input=input+operator
  }else if(reg2.test(input)){  // if the operator is not "-", and if the previouse strings are like "*-, or +- etc.", then takout the last two string and add operator
    input=input.slice(0,input.length-2)+operator
  }else {input=input.slice(0,input.length-1)+operator
  }

  output=input
  document.getElementById("display").innerText=output
}

function calculate(){
  let reg=/[\+\-\*\/]\-|[\+\-\*\/]/g
  let numbers = input.match(/[0-9\.]+/g)
  let operators= input.match(reg)
  let answer=Number(numbers[0])
  for(let i=0;i<numbers.length-1;i++){
    switch(operators[i]){
      case "+":
        answer +=Number(numbers[i+1])
        break
        case "-":
        answer -=Number(numbers[i+1])
        break
      case "*":
        answer *=Number(numbers[i+1])
        break

      case "/":
        answer /=Number(numbers[i+1])
        break
      case "+-":
          answer +=-1*Number(numbers[i+1])
          break
      case "*-":
          answer *=-1*Number(numbers[i+1])
          break
      case "/-":
          answer /=-1*Number(numbers[i+1])
          break
      case "--":
          answer -=-1*Number(numbers[i+1])
          break

      default:
        answer=answer
      }
    }
    output=answer.toString()
    document.getElementById("display").innerText=output
    input=output
  }
