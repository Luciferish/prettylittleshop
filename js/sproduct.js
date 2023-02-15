function changesrc1(){
    document.getElementById("Mainimg").src = document.getElementById("small-img-1").src;
}
function changesrc2(){
    document.getElementById("Mainimg").src = document.getElementById("small-img-2").src;
}
function changesrc3(){
    document.getElementById("Mainimg").src = document.getElementById("small-img-3").src;
}
function changesrc4(){
    document.getElementById("Mainimg").src = document.getElementById("small-img-4").src;
}
function checkdisplay(){
   const check = document.getElementById("note-txt");
   const ck = check.checked;
   const nt = document.getElementById("nt-inp");
   if (ck == true){
    nt.style.display = 'block';
   }
   else{
    nt.style.display = 'none';
   }
}


/**
 * Create an arrow function that will be called when an image is selected.
 */
const previewImage = (event) => {
    /**
     * Get the selected files.
     */
    const imageFiles = event.target.files;
    /**
     * Count the number of files selected.
     */
    const imageFilesLength = imageFiles.length;
    /**
     * If at least one image is selected, then proceed to display the preview.
     */
    if (imageFilesLength > 0) {
        /**
         * Get the image path.
         */
        const imageSrc = URL.createObjectURL(imageFiles[0]);
        /**
         * Select the image preview element.
         */
        const imagePreviewElement = document.querySelector("#output");
        /**
         * Assign the path to the image preview element.
         */
        imagePreviewElement.src = imageSrc;
        /**
         * Show the element by changing the display value to "block".
         */
        imagePreviewElement.style.display = "block";
    }
};