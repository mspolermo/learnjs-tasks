let ask = (question, yes, no) => {
    return (confirm(question)) ? yes() : no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились.") ,
    () => alert("Вы отменили выполнение.") 
  );