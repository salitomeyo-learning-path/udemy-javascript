import { uploadImage } from "./http-provider";

const body = document.body;

let inputFile, imgPicture;

const createInputFileHtml = () => {
    const html = `
    <h1 class="mt-5">Upload files</h1>
    </hr>

    <label>Select a picture: </label>
    <input type="file" accept="image/png, image/jpeg">
    <br>
    <img id="foto" class="img-thumbnail" src="">
    `

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgPicture = document.querySelector('#foto');
}

const events = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        // console.log(file);
        uploadImage(file).then( url => imgPicture.src = url );
        // uploadImage(file).then( resp => {
        //     // console.log(resp);
            
        // });
    })
}

export const init = () => {
    createInputFileHtml();
    events();
}
