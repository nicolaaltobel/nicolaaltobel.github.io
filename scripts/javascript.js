var lastPDFclass = "";

function changePDF(pdfClass){
    if (lastPDFclass != ""){
        document.getElementsByName(lastPDFclass)[0].display = "none";
    }
    //document.getElementsByName(pdfClass)[0].display= "block";
    document.getElementsByName(pdfClass)[0].style.display = "block";
    lastPDFclass = pdfClass;
}