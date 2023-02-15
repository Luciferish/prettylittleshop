const image = document.getElementById('image');
const cropper = new Cropper(image,{
    aspectRatio: 0,
    viewMode: 0,
})

document.getElementById('cropImageBtn').addEventListener('click',
function(){
    var croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
    document.getElementById('output').src = croppedImage;
    
});


function model(){
    const container = document.getElementById('model-container');
    container.style.display = 'block';
}
function dismiss(){
    const container = document.getElementById('model-container');
    container.style.display = 'none';
}

