const inputFile = gebi("input-file");
inputFile.addEventListener("change", async e => {
	const file = e.target.files[0];

	if (!file) {
		gebi("errImg").style.display = "block";
		return;
	}
	const imgCntnt = URL.createObjectURL(file);
	gebi("uploadedImage").src = imgCntnt;
	gebi("contentToPdf").focus();
});

document.querySelectorAll("div").forEach(el => {
	el.contentEditable = true;
});
gebi('contentToPdf').contentEditable = false;
document.querySelector('.page').contentEditable = false;




/* donlowd pdf  */
function generatePdf() {
	const element = gebi("contentToPdf"); // تحديد العنصر
	document.querySelector("body").style.padding = 0;
	gebi("contentToPdf").style.margin = 0;
	gebi("contentToPdf").style.paddingBottom = 0;
	gebi("contentToPdf").style.height = "29cm";

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
			useCORS: true,
		}, // أضف scrollY: 0
		jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
	};
	html2pdf()
		.set(options)
		.from(element)
		.save()
		.then(e => {
			gebi("isDwnlod").classList.add("toAp");
			document.querySelector("body").style.padding = "20px";
			gebi("contentToPdf").style.margin = "20px";
			gebi("contentToPdf").style.paddingBottom = "50px";
			gebi("contentToPdf").style.height = "30.3cm";
		})
		.catch(err => {
			console.log(err);
		}); // سلسلة الأوامر لتنفيذ التحويل
	setTimeout(() => {
		gebi("isDwnlod").classList.remove("toAp");
	}, 3000);
}

function gebi(pr) {
	return document.getElementById(pr);
}
