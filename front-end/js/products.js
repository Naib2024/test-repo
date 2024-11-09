const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('products');
const endpoint = "http://localhost:3000/users/"
const contanier = document.querySelector("#contanier")


axios.get(endpoint + id).then(({data:{ marka, model, operating_system }}) => {
    contanier.innerHTML = `<div class="row">
        <h1>${marka}</h1>
        <h2>${model}</h2>
        <p>${operating_system}</p>
    </div>`
})


