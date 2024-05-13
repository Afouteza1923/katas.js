const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'];

  function repeatCounter(counterWords) {
    const wordCount = {};
    for (const word of counterWords) { 
      if (wordCount [word]) {          
        wordCount [word]++;            
      } else {                         
        wordCount [word] = 1;          
      }
    }
    return wordCount;
  }
  console.log (counterWords);
  console.log ('---------------');
  console.log (repeatCounter (counterWords));