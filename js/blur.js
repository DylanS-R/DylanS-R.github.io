const header-blob = document.getElementById("header-blob");
const contact-blob = document.getElementById("contact-blob");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  header-blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });

  contact-blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}
