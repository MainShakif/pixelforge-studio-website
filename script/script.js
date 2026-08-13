function popupBox() {
  const boxElement = document.getElementById("popup-box");
  if (boxElement.style.display === "none") {
    return (boxElement.style.display = "block");
  } else {
    return (boxElement.style.display = "none");
  }
}
