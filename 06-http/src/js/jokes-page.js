import { getJoke } from "./http-provider";

const body = document.body;
let btnAnother, ulList;

const createJokesHtml = () => {
    const html = `
    <h1 class="mt-5">Chistes</h1>
    </hr>

    <button class="btn btn-primary">Another Joke</button>

    <ul class="mt-2 list-group">
    </ul>
    `

    const divJokes = document.createElement('div');
    divJokes.innerHTML = html;

    body.append(divJokes);
}

const events = () => {
    ulList = document.querySelector('ul');
    btnAnother = document.querySelector('button');

    btnAnother.addEventListener('click', async() => {
        btnAnother.disabled = true;
        drawJoke( await getJoke() );
        btnAnother.disabled = false;
    })

}

const drawJoke = ( joke ) => {
    const ilItem = document.createElement('li');
    ilItem.innerHTML = `<b>${ joke.id }</b>: ${ joke.value }`;
    ilItem.classList.add('list-group-item');

    ulList.append(ilItem);
}

export const init = () => {
    createJokesHtml();
    events();
}
