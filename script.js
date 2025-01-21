document.querySelectorAll('.calcButtons button').forEach(button => {
  button.addEventListener('click', () => {
    let userEntry = document.querySelector('.userEntry');
    let finalCalc = document.querySelector('.finalCalc');
    
    if (button.textContent === '=') {
        let expression = userEntry.textContent.replace(/%/g, '*0.01');
      try {
        finalCalc.textContent = eval(expression);
      } catch (e) {
        finalCalc.textContent = 'Error';
      }
    } else if (button.textContent === 'AC') {
        userEntry.textContent = '';
      finalCalc.textContent = '';
    } else if (button.textContent === 'DEL') {
       userEntry.textContent = userEntry.textContent.slice(0, -1);
    } else {
           userEntry.textContent += button.textContent;
    }
  });
});


