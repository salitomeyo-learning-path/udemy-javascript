import { getUsers } from "./http-provider";

const body  = document.body;
let tableBody;

const createHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );
}

const createUserRow = ( usuario ) => {
    const html = `
        <td scope="col">${ usuario.id }</td>
        <td scope="col">${ usuario.email }</td>
        <td scope="col">${ usuario.first_name } ${ usuario.last_name }</td>
        <td scope="col">
            <img class="img-thumbnail" src="${ usuario.avatar }">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tableBody.appendChild( tr );

}


export const init = async() => {

    createHtml();
    tableBody = document.querySelector('tbody');
    (await getUsers()).forEach( createUserRow );

}

