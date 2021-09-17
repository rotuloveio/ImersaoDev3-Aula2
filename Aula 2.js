function ConverterReal() {
  if (document.getElementById("valor").value != "") {
    var real = parseFloat(document.getElementById("valor").value) * 5.24;
    document.getElementById("valorConvertido").innerHTML =
      "R$" + real.toFixed(2);
  } else {
    document.getElementById("valorConvertido").innerHTML = "";
  }
}

function ConverterEuro() {
  if (document.getElementById("valor").value != "") {
    var euro = parseFloat(document.getElementById("valor").value) / 1.18;
    document.getElementById("valorConvertido").innerHTML =
      "€" + euro.toFixed(2);
  } else {
    document.getElementById("valorConvertido").innerHTML = "";
  }
}

function ConverterBitcoin() {
  if (document.getElementById("valor").value != "") {
    var bitcoin = parseFloat(document.getElementById("valor").value) * 0.000021;
    document.getElementById("valorConvertido").innerHTML =
      "BITCOIN: " + bitcoin;
  } else {
    document.getElementById("valorConvertido").innerHTML = "";
  }
}
