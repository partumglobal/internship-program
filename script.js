// Step 2: Callbacks
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const dummyData = { name: 'John', age: 30 };
        callback(dummyData);
    }, 1000); 
}

const fetchButton = document.getElementById('fetchButton');
const dataContainer = document.getElementById('dataContainer');

fetchButton.addEventListener('click', () => {
    fetchDataWithCallback((data) => {
        dataContainer.innerHTML = `Name: ${data.name}, Age: ${data.age}`;
    });
});

// Step 3: Promises
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dummyData = { name: 'Alice', age: 25 };
            resolve(dummyData);
        }, 1000); // Simulating a 1-second delay
    });
}

fetchButton.addEventListener('click', () => {
    fetchDataWithPromise().then((data) => {
        dataContainer.innerHTML = `Name: ${data.name}, Age: ${data.age}`;
    });
});

// Step 4: Async/Await
async function fetchDataWithAsyncAwait() {
    try {
        const data = await fetchDataWithPromise();
        dataContainer.innerHTML = `Name: ${data.name}, Age: ${data.age}`;
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchButton.addEventListener('click', () => {
    fetchDataWithAsyncAwait();
});

