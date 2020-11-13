const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  console.log(colors.length)

  const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
  };

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };  

  refs.startBtn.addEventListener('click', onStart);
  refs.stopBtn.addEventListener('click', onStop);
  let timerId = '';
  refs.stopBtn.disabled = true;

  function onStart() {
      refs.startBtn.disabled = true;
      refs.stopBtn.disabled = false;
      timerId = setInterval(bodyColorСhange, 1000);
  }

  function onStop() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(timerId);
  }

  function bodyColorСhange() {
      const i = randomIntegerFromInterval(0, colors.length - 1);
      document.body.style.backgroundColor = `${colors[i]}`
  }