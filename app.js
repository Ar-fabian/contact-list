console.log('hola');

const API = 'https://jsonplaceholder.typicode.com/users';




const cardHtml = (name, email, address) => {
    const $divCard = document.createElement('div');
    const $html = `
    <div class="card">
            <h2>${name}</h2>
            <p>${email}</p>
            <p>${address}</p>
        </div>
    `;
    $divCard.innerHTML = $html;
    document.getElementById('container').appendChild($divCard.firstElementChild);
    console.log(`name:${name} email: ${email} address: ${address}`);
}


const getApi = () =>{
    fetch(API)
    .then(resp => resp.json())
    .then((data) =>{
        data.forEach(({name,email,address}) => {
            cardHtml(name,email,address.city);
        });
    })

}

getApi(API);