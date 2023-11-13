import { getClientes } from './webserviceConexao.js';
function listarClientes(objeto, styleDiv = ""){
    let clientes = getClientes();
    clientes.then(lista =>{
        for(elemento of lista){
            let cliente = document.createElement("div");
            let vetor = Array();
            for(valor of elemento){
                let dive = document.createElement("div");
                dive.innerText = valor;
                vetor.push(dive);
            }
            for(valor of vetor){
                cliente.append(valor);
            }
            cliente.style = styleDiv;
            objeto.append(cliente);
        }
    })
}
let botao = document.querySelector(".listarTodosCliente");
botao.addEventListener("click", function (e){
    let elemento = e.target;
    listarClientes(elemento.parentElement);   
})