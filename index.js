function calcularIMC(){
  let pesoUser = Number(document.getElementById('peso').value)
  let alturaUser = Number(document.getElementById('altura').value)
  let calculoIMC = pesoUser / ( alturaUser * alturaUser)
  let resultado = document.getElementById('resultadoIMC')
  if(calculoIMC <= 17){
    resultado.innerHTML = `SEU IMC É ${calculoIMC.toFixed(2)} E ESTA MUITO ABAIXO DO PESO`
  }else if(calculoIMC > 17 && calculoIMC <= 18.49){
    resultado.innerHTML = `SEU IMC É ${calculoIMC.toFixed(2)} E ESTA ABAIXO DO PESO`
  }else if(calculoIMC > 18.5 && calculoIMC <= 24.99 ){
    resultado.innerHTML = `SEU IMC É ${calculoIMC.toFixed(2)} E ESTA COM PESO NORMAL` 
  }else{
    resultado.innerHTML = `SEU IMC É ${calculoIMC.toFixed(2)} E ESTA ACIMA DO PESO`  
  }


}