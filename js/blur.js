const headerBlob = document.getElementById("header-blob");
const contactBlob = document.getElementById("contact-blob");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  headerBlob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });

  contactBlob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}
