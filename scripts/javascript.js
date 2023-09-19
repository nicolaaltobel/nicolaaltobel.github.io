var lastPDFclass = "";

function changePDF(pdfClass){
    //alert(document.getElementsByClassName(pdfClass).style.height);
    if (lastPDFclass != ""){
        document.getElementsByClassName(lastPDFclass)[0].style.display = "none";
    }
    document.getElementsByClassName(pdfClass)[0].style.display= "block";
    lastPDFclass = pdfClass;
}