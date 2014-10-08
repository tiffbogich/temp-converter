
//store input temperature value
document.getElementById("temp").oninput = writeTemp;
function writeTemp(){
    //clear results
    document.getElementById("output-temp").innerHTML = " ";
    document.getElementById("output-unit").innerHTML = " ";
    document.getElementById("input-temp").innerHTML = " ";
    document.getElementById("input-unit").innerHTML = " ";

    //write input temp value
    inputTemp = document.getElementById("temp").value;
}

//store input units
document.getElementById("units").oninput = writeUnits;
function writeUnits(){
    //clear results
    document.getElementById("output-temp").innerHTML = " ";
    document.getElementById("output-unit").innerHTML = " ";
    document.getElementById("input-temp").innerHTML = " ";
    document.getElementById("input-unit").innerHTML = " ";

    //write input unit value
    inputUnit = document.getElementById("units").value;
    
}

//return answer when user submits form
document.getElementById("convert-form").onsubmit = convertTemp;

function convertTemp(){
 
  //do conversion math and get output unit
  if (inputUnit == "F") {
    var outputTemp = inputTemp-32*(5/9);
    var outputUnit = "C";
    } else { 
      var outputTemp = inputTemp*(9/5)+32;
      var outputUnit = "F";
    }

  //return results
  document.getElementById("input-temp").innerHTML = inputTemp;
  document.getElementById("input-unit").innerHTML = "&#176;"+inputUnit;
  document.getElementById("output-temp").innerHTML = " is equal to "+Math.round(outputTemp);
  document.getElementById("output-unit").innerHTML = "&#176;"+outputUnit;

  //prevent from clearing result after form submit
  event.preventDefault();
}