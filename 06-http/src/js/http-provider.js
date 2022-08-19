const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const reqresUrl = 'https://reqres.in/';

const cloudPreset = 'wdoaid22';
const cloudUrl = 'https://api.cloudinary.com/v1_1/doias43x/upload';

// fetch( jokeUrl ).then( resp => {
//     resp.json().then( data => {
//         console.log( data );
//     })
// })

// fetch( jokeUrl )
//     .then(resp => resp.json() )
//     .then( console.log );

export const getJoke = async() => {
    try {
        const resp = await fetch( jokeUrl );

        if ( !resp.ok ) return alert('No se pudo realizar la peticion');

        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value };
    } catch (err) {
        throw err;
    }

}

export const getUsers = async() => {
    const resp = await fetch(`${reqresUrl}api/users?page=2`);
    const {data: users} = await resp.json();

    return users;
}

export const uploadImage = async( imgFile ) => {
    const formData = new FormData();
    formData.append('upload_present', cloudPreset );
    formData.append('file', imgFile );

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formDate
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            // console.log(cloudResp);
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (err) {
        throw err;
    }
}

