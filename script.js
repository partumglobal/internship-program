// Step 2: Callbacks
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const dummyData = { name: 'John', age: 30 };
        callback(dummyData);
    }, 1000); // display data after 1sec
}

const fetchCallback = document.getElementById('fetchCallback');


fetchCallback.addEventListener('click', () => {
    fetchDataWithCallback((data) => {
        dataContainer.innerHTML = `Name: ${data.name}, Age: ${data.age}`;
    });
});

const fetchPromise = document.getElementById('fetchPromise');


// Step 3: Promises
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dummyData = { name: 'Alice', age: 25 };
            resolve(dummyData); // display dummy data
        }, 1000); // Simulating a 1-second delay
    });
}

fetchPromise.addEventListener('click', () => {
    fetchDataWithPromise().then((data) => {
        dataContainer.innerHTML = `Name: ${data.name}, Age: ${data.age}`;
    });
});


const fetchAsync = document.getElementById('fetchAsync');
// Step 4: Async/Await
async function fetchDataWithAsyncAwait() {
    try {
        const data = await fetchDataWithPromise();
        dataContainer.innerHTML = `Name: ${data.name}, Age: ${data.age}`;
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAsync.addEventListener('click', () => {
    fetchDataWithAsyncAwait().then((data) => {
        dataContainer.innerHTML = `Name: ${data.name}, Age: ${data.age}`;
    });
});



fetchCallback.addEventListener('click', () => {
    fetchDataWithCallback();
});
fetchPromise.addEventListener('click', () => {
    fetchDataWithPromise();
});

fetchAsync.addEventListener('click', () => {
    fetchDataWithAsyncAwait();
});

