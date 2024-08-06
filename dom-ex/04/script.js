document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const output = document.getElementById('output');

    // Clear previous output content and styles
    output.textContent = '';
    output.classList.remove('bg-red-500', 'bg-green-500');

    // Validate form fields
    if (name === '' || email === '' || message === '') {
      output.textContent = 'Please fill out all fields.';
      output.classList.add('bg-red-500'); // Add error style
    } else {
      // Create a list to display the form data
      const ul = document.createElement('ul');
      ul.innerHTML = `
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong> ${message}</li>
      `;
      output.appendChild(ul);
      output.classList.add('bg-green-500'); // Add success style

      // Clear the form fields
      document.getElementById('contact-form').reset();
    }
  });