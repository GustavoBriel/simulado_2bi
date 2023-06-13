// exercício 1
function VerificadorPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let x = 2; x <= Math.sqrt(numero); x++) {
      if (numero % x === 0) {
        return false;
      }
    }
  
    return true;
  }

  const numero = prompt('Digite um número:');
  const fatorial = VerificadorPrimo(numero);
  console.log('O fatorial é ${fatorial}');

  // exercício 2

  function InverterFrase(str) {
    let Frase = '';
  
    for (let x = str.length - 1; x >= 0; x--) {
      Frase += str[x];
    }
  
    return Frase;
  }
  
  const FraseEnviada = prompt('Digite uma Frase:');
  const FraseInvertida = inverterString(FraseEnviada);
  console.log(FraseInvertida);
  
  
  