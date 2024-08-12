document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const output = document.getElementById("output");

    output.textContent = "";
    output.classList.remove("bg-red-500", "bg-green-500");

    if (name === "" || email === "" || message === "") {
      output.textContent = "Please fill out all fields.";
      output.classList.add("bg-red-500");
    } else {
      const ul = document.createElement("ul");

      const nameLi = document.createElement("li");
      nameLi.textContent = `Name: ${name}`;
      ul.appendChild(nameLi);

      const emailLi = document.createElement("li");
      emailLi.textContent = `Email: ${email}`;
      ul.appendChild(emailLi);

      const messageLi = document.createElement("li");
      messageLi.textContent = `Message: ${message}`;
      ul.appendChild(messageLi);

      output.appendChild(ul);
      output.classList.add("bg-green-500");

      document.getElementById("contact-form").reset();
    }
  });
