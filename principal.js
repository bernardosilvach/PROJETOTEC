var modal = document.getElementById('id01'); 

window.onclick = function(event) { 
    if (event.target == modal) { 
        modal.style.display = "none"; 
    } 
};

console.log("JavaScript is running!");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var nome = document.getElementById("nome").value;
        var cpf = document.getElementById("cpf").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var endereco = document.getElementById("endereco").value;
        var status = document.getElementById("status").value;

        var card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${nome}</h3>
            <p>CPF: ${cpf}</p>
            <p>Email: ${email}</p>
            <p>Telefone: ${telefone}</p>
            <p>Endereço: ${endereco}</p>
            <p>Status: ${status}</p>
        `;

        document.querySelector(".interiorbaixo").appendChild(card);

        document.getElementById("myForm").reset();
        modal.style.display = 'none';
    });
});