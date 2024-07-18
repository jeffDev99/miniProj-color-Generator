const colorItems = document.querySelectorAll(".color");
alert("to copy hex code color, click on the color you want")
// function to generate random color
generateRandomColor = () => {
  // convert number to hex
  function componentToHex(Color) {
    const hex = Color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;
};
// function to assign color to element
assignColorToEl = (el) => {
  el.dataset.color = generateRandomColor();
  el.style.backgroundColor = el.dataset.color;
  el.children[0].innerText = el.dataset.color;
};
// function to copy text into clipboard
copyText = (text) => {
  navigator.clipboard.writeText(text);
  alert(`${text} copied`);
};
// set event for each items
colorItems.forEach((colorItem) => {
  assignColorToEl(colorItem);
  colorItem.addEventListener("click", () => {
    copyText(colorItem.dataset.color);
    assignColorToEl(colorItem);
  });
});