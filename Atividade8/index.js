function escolhaComputador() {
    const opcoes = ["pedra", "papel", "tesoura"];  
    const indiceAleatorio = Math.floor(Math.random() * 3);  
    return opcoes[indiceAleatorio];  
  }
  
  function verificarVencedor(escolhaUsuario, escolhaComputador) {  
    if (escolhaUsuario === escolhaComputador) {  
      return "Empate!";  
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||  
      (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||  
      (escolhaUsuario === "papel" && escolhaComputador === "pedra")  
    ) 
    {        
        return "Você venceu!";      
    } else {  
      return "O computador venceu!";
  
    }
  
  }    
  function jogo() {  
    document.querySelector(".resultado").textContent = "";  
    const opcaoUsuario = document.querySelector("select[name='opcao']").value;  
    const opcaoComputador = escolhaComputador();  
  
    const divUsuario = document.createElement("div");  
    divUsuario.textContent = "Opção do usuário: " + opcaoUsuario;  
    divUsuario.classList.add("opcao-usuario");  
  
    const divComputador = document.createElement("div");  
    divComputador.textContent = "Opção do computador: " + opcaoComputador;  
    divComputador.classList.add("opcao-computador");

    const divResultado = document.createElement("div");  
    divResultado.textContent = verificarVencedor(opcaoUsuario, opcaoComputador);
  
    divResultado.classList.add("resultado");
  
    document.querySelector(".resultado").appendChild(divUsuario);
    document.querySelector(".resultado").appendChild(divComputador);
    document.querySelector(".resultado").appendChild(divResultado);
}

  document.querySelector(".jogar").addEventListener("click", jogo);