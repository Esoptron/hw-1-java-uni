(() => {
  const deadElement = document.getElementById('dead');
  const lostElement = document.getElementById('lost');
  const holes = Array.from(document.querySelectorAll('.hole'));

  let dead = 0;
  let lost = 0;

  const updateStats = () => {
    deadElement.textContent = String(dead);
    lostElement.textContent = String(lost);
  };

  const resetGame = message => {
    alert(message);
    dead = 0;
    lost = 0;
    updateStats();
  };

  const handleClick = hole => {
    if (hole.classList.contains('hole_has-mole')) {
      dead += 1;
      updateStats();

      if (dead === 10) {
        resetGame('Вы победили!');
      }

      return;
    }

    lost += 1;
    updateStats();

    if (lost === 5) {
      resetGame('Вы проиграли!');
    }
  };

  holes.forEach(hole => {
    hole.addEventListener('click', () => handleClick(hole));
  });

  updateStats();
})();
