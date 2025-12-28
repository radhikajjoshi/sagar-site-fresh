const buttons = document.querySelectorAll('.quiz-options button');
const result = document.getElementById('quizResult');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.answer === 'correct') {
      result.textContent = 'Correct 💖 Obviously.';
    } else {
      result.textContent = 'Wrong… but still cute 😄';
    }
  });
});
