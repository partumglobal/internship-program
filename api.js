// fetch

function fetchDataFromApi() {
    return fetch('https://65176ef5582f58d62d34f4c7.mockapi.io/api/v1/products').then(response => {

        if (!response.ok) {
            throw new Error('error somewhere')
        }
        return response.json()

    }).then (data =>{
        return data; // data return
    })
    .catch(error => {
        console.log('there was an error' ,error);
    })
}


function displayData(products){
    const dataContainer = document.getElementById('dataContainer')


    products.forEach(product => {
    const pDiv = document.createElement('div');
    pDiv.innerHTML = `
        <p>${product.name}</p>
        <p>${product.desc}</p>
        <p>${product.price}</p>
    `;

    dataContainer.appendChild(pDiv)
    })
}


document.getElementById('getProducts').addEventListener('click', () =>{
    fetchDataFromApi().then(products => {
        displayData(products)
    })
})