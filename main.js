function add(){
    var num1 = parseFloat(document.getElementById("first").value);        
    var num2 = parseFloat(document.getElementById("second").value);
    var ope = document.getElementById('operation').value;
    if(ope === 'sum'){
        document.getElementById("answer").innerHTML= num1+num2;
    } else if (ope === 'sus'){
        document.getElementById("answer").innerHTML= num1-num2;
    } else if (ope === 'mul'){
        document.getElementById("answer").innerHTML= num1*num2;
    } else if(ope === 'div'){
    document.getElementById("answer").innerHTML= num1/num2;
    }
}   