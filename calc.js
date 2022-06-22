function Calc(btn) {
    if(btn.value == "=") {
      document.calc.display.value = eval(document.calc.display.value);
    } else if (btn.value == "C") {
      document.calc.display.value = "";
    } else {
      if (btn.value == "x") {
        btn.value = "*";
      } else if (btn.value == "÷") {
        btn.value = "/";
      } 
      document.calc.display.value += btn.value;
      document.calc.add_btn.value = "x";
      document.calc.div_btn.value = "÷";
    }
  }