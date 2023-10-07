

Assignment: JavaScript Callbacks, Promises, and Async/Await
-----------------------------------------------------------

### Instructions:

You are tasked with creating a simple JavaScript application that simulates fetching data from an API and displaying it on a web page. You will implement this using callbacks, promises, and async/await. Follow the steps below to complete the assignment.

#### Step 1: Setup

1.  Create an HTML file (`index.html`) that includes a button with the id `fetchButton` and a `<div>` element with the id `dataContainer`. The button will be used to trigger the data fetching.

2.  Create a JavaScript file (`script.js`) and link it to your HTML file.

#### Step 2: Callbacks

1.  Create a function `fetchDataWithCallback` that takes a callback function as an argument. Inside this function, simulate fetching data from an API using a `setTimeout`. After a delay, call the callback function with some dummy data (e.g., an object with a name and age).

2.  Add an event listener to the button with the id `fetchButton`. When the button is clicked, call the `fetchDataWithCallback` function with a callback that displays the fetched data in the `dataContainer` on the web page.

#### Step 3: Promises

1.  Create a function `fetchDataWithPromise` that returns a Promise. Inside this function, simulate fetching data from an API using a `setTimeout`. After a delay, resolve the Promise with some dummy data (e.g., an object with a name and age).

2.  Add an event listener to the button with the id `fetchButton`. When the button is clicked, call the `fetchDataWithPromise` function and use `.then()` to display the fetched data in the `dataContainer` on the web page.

#### Step 4: Async/Await

1.  Create an `async` function `fetchDataWithAsyncAwait`. Inside this function, use `await` to fetch data from the `fetchDataWithPromise` function created earlier.

2.  Add an event listener to the button with the id `fetchButton`. When the button is clicked, call the `fetchDataWithAsyncAwait` function and display the fetched data in the `dataContainer` using `innerHTML`.

#### Step 5: Testing

Test your application by clicking the "Fetch Data" button and verifying that it displays the fetched data on the web page.

### Submission:

1.  push your code to a new branch "data-fetching

2.  create a pull request when done