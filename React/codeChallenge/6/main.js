const headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
// iterate through each heading
Array.prototype.forEach.call(headings, function (node) {
  // remove all white space
  let headerContent = node.innerText.replace(/\s/g, "");
  // see if header content is not existing
  if (headerContent.length === 0) {
    // mark node as presentation
    node.setAttribute("role", "presentation");
  }
});
