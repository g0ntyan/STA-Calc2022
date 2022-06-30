let Dot = 0;
function Calc(btn) {
  let Btn = btn.value;  
  let Result = document.calc.display.value;
    if(Btn == "=") {
      document.calc.display.value = eval(Result);
      Dot = 0;
    } else if (Btn == "AC") {
      document.calc.display.value = "";
      Dot = 0;
    } else {
      if (Btn == "x") {
        Btn = "*";
        Dot = 0;
      } else if (Btn == "÷") {
        Btn = "/";
        Dot = 0;
      }else if (Btn == "."){
        if(Dot == 1){
        Btn = ""; 
        } else{
          Dot = 1; 
        }
      }
      document.calc.display.value += Btn;
      document.calc.add_btn.value = "x";
      document.calc.div_btn.value = "÷";
    }
  }

  function Route(){
    document.calc.display.value = Math.sqrt(parseInt(document.calc.display.value));
  }