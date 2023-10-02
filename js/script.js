// forms

 const form = document.getElementById('myForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      output.innerHTML = `Hello, ${name}! Your email is ${email}.`;
    });


