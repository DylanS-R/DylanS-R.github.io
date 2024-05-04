const blobs = document.getElementsByClassName("blob");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  Array.from(blobs).forEach(blob => {
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
  });
}
