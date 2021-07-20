function imc(weight, height) {
    var resultImc = weight / (height * height);
    resultImc = resultImc.toFixed(1);
  
    if (resultImc < 18.5) {
      return (
        "Ola! seu IMC é " + resultImc + " e você esta classificado com magreza "
      );
    } else if (resultImc >= 18.5 && resultImc <= 24.9) {
      return (
        "Ola! seu IMC é " + resultImc + " e você esta classificado como normal"
      );
    } else if (resultImc >= 25 && resultImc <= 29.9) {
      return (
        "Ola! seu IMC é " + resultImc + " e você esta classificado como sobrepeso"
      );
    } else if (resultImc >= 30 && resultImc <= 39.9) {
      return (
        "Ola! seu IMC é " + resultImc + " e você esta classificado como obesidade"
      );
    } else {
      return (
        "Ola! seu IMC é " +
        resultImc +
        " e você esta classificado como obesidade Grave"
      );
    }
  }
  let result = imc(70, 1.7);
  console.log(result);
  