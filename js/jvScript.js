
const inputFile = gebi("input-file");
inputFile.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  
  if (!file) {
    gebi("errImg").style.display = "block";
    return
  }
  const imgCntnt = URL.createObjectURL(file);
gebi('uploadedImage').src = imgCntnt;
gebi('contentToPdf').focus();
})

function gebi(pr) {return document.getElementById(pr)}

document.querySelectorAll('div').forEach(el => {
    el.contentEditable = true
    el.addEventListener('focus',ev => {
      ev.style.border = '30px black soled'
    })
});




/* donlowd pdf  */
function generatePdf() {
				const element = geby("contentToPdf"); // تحديد العنصر
				document.querySelector("body").style.padding = 0;
				geby("contentToPdf").style.margin = 0;
				geby("contentToPdf").style.paddingBottom = 0;
				geby("contentToPdf").style.height = "29cm";

				const options = {
					margin: [0, 0, 0, 0], // تعيين الهوامش إلى 0 من جميع الجوانب
					filename: "my-cv.pdf",
					image: { type: "jpeg", quality: 0.98 },
					html2canvas: {
						scale: 2,
						logging: true,
						dpi: 192,
						letterRendering: true,
						scrollY: 0,
        useCORS: true 
					}, // أضف scrollY: 0
					jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
				};
				html2pdf().set(options).from(element).save().then((e) => {
					geby('isDwnlod').classList.add('toAp')
					document.querySelector("body").style.padding = "20px";
					geby("contentToPdf").style.margin = "20px";
					geby("contentToPdf").style.paddingBottom = "50px";
					geby("contentToPdf").style.height = "30.3cm";
				}).catch((err) => {console.log(err);
				
					
				});; // سلسلة الأوامر لتنفيذ التحويل
				setTimeout(() => {
					
					geby('isDwnlod').classList.remove('toAp')
					
				}, 3000);
			}
			function geby(el) {
				return document.getElementById(el);
			}