import './style.css'

const addEvenntListener = () => {
  const colorPickers = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');

  colorPickers.addEventListener('change', () => {
    const newColor = colorPickers.value;
    document.body.style.backgroundColor = newColor;
    colorName.textContent = newColor;
  })
}

addEvenntListener();