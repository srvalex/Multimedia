const canvas = document.getElementById('canvas');
const fileBrowser = document.getElementById('fileBrowser');
const context = canvas.getContext("2d");
const buton = document.getElementById("butonAlbastru");


fileBrowser.addEventListener("change", (e) => {
    let reader = new FileReader();

    reader.addEventListener("load", (ee) => {
        let dataUrl =  ee.target.result;
        const img = document.createElement("img");

        img.src = dataUrl
        img.addEventListener("load",(ev) => {
            canvas.width=img.naturalWidth;
            canvas.height = img.naturalHeight;
            context.drawImage(img,0,0);
        })
    })

    reader.readAsDataURL(e.target.files[0]);
});

buton.addEventListener("click", ()=> {
    let imageData = context.getImageData(0,0,canvas.width,canvas.height)
    let data = imageData.data;

    for(let i=0;i<data.length;i=i+4){
        data[i]/=2;
        data[i+1]/=2;
    }

    context.putImageData(imageData,0,0);
})