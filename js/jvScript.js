/* onst dropArea = gebi("drop-area");
const imgView = gebi("img-view"); */

const inputFile = gebi("input-file");
inputFile.addEventListener("change", async (e) => {
  const file = e.target.files[0];
 /*  dropArea.setAttribute("for", "no"); */
  
  if (!file) {
    gebi("errImg").style.display = "block";
    return
  }
  const imageUrl = URL.createObjectURL(file);
gebi('uploadedImage').src = imageUrl;
})

function gebi(pr) {return document.getElementById(pr)}
document.querySelectorAll('div').forEach(el => {
    el.contentEditable = true
});