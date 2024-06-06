var modal = document.getElementById('id01'); 
                
    window.onclick = function(event) { 
        if (event.target == modal) { 
            modal.style.display = "none"; 
        } 
};

console.log("JavaScript is running!"); // Check if JavaScript code is executed

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted!"); // Check if form submission event is captured
    // Rest of the code...
});


document.addEventListener("DOMContentLoaded", function () {
    // Event listener for form submission
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        var nome = document.getElementById("nome").value;
        var cpf = document.getElementById("cpf").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var endereco = document.getElementById("endereco").value;
        var status = document.getElementById("status").value;

        // Create card element
        var card = document.createElement("div");
        card.classList.add("card");

        // Populate card with form values
        card.innerHTML = `
            <h3>${nome}</h3>
            <p>CPF: ${cpf}</p>
            <p>Email: ${email}</p>
            <p>Telefone: ${telefone}</p>
            <p>Endereço: ${endereco}</p>
            <p>Status: ${status}</p>
        `;

        // Append card to interiorbaixo div
        document.querySelector(".interiorbaixo").appendChild(card);

        // Clear form fields
        document.getElementById("myForm").reset();

        // Close the modal (if needed)
        document.getElementById('id01').style.display='none';
    });
});