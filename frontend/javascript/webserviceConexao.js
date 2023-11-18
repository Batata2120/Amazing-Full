//###########
//Lista todos
//###########
function getClientes() {
    return (
        fetch("https://localhost/backend/cliente").then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
function getProdutos() {
    return (
        fetch("https://localhost/backend/produto").then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
function getCompras() {
    return (
        fetch("https://localhost/backend/compra").then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
function getProdutosCompras() {
    return (
        fetch("https://localhost/backend/produtoscompra").then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
//###################
//Lista um especifico
//###################
function getCliente(id) {
    return (
        fetch("https://localhost/backend/cliente/" + id).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
function getProduto(id) {
    return (
        fetch("https://localhost/backend/produto/" + id).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
function getCompra(id) {
    return (
        fetch("https://localhost/backend/compra/" + id).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
function getProdutosCompra(id) {
    return (
        fetch("https://localhost/backend/produtoscompra/" + id).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
//########
//Adiciona
//########
function addCliente(nome, nome_usuario, estado, cidade, bairro, rua, nro_cartao, nro_seguranca, nome_cartao, data_validade_cartao) {
    let dados = {
        nome: nome,
        nome_usuario: nome_usuario,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        nro_cartao: nro_cartao,
        nro_seguranca: nro_seguranca,
        nome_cartao: nome_cartao,
        data_validade_cartao: data_validade_cartao,
    }
    let params = new URLSearchParams();
    for (let chave in dados) {
        params.append(chave, dados[chave]);
    }
    let query = params.toString();
    let options = {
        method: "POST",
        body: query,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }
    return (
        fetch("https://localhost/backend/cliente", options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(Response => {
                // Resposta pronta
                return (Response);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}

function addProduto(nome, qtdEstoque, preco, descricao) {
    let dados = {
        nome: nome,
        qtdEstoque: qtdEstoque,
        preco: preco,
        descricao: descricao,
    }
    let params = new URLSearchParams();
    for (let chave in dados) {
        params.append(chave, dados[chave]);
    }
    let query = params.toString();
    let options = {
        method: "POST",
        body: query,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }
    return (
        fetch("https://localhost/backend/produto", options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(Response => {
                // Resposta pronta
                return (Response);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}

function addCompra(idCliente, dataCompra) {
    let dados = {
        idCliente: idCliente,
        dataCompra: dataCompra,
    }
    let params = new URLSearchParams();
    for (let chave in dados) {
        params.append(chave, dados[chave]);
    }
    let query = params.toString();
    let options = {
        method: "POST",
        body: query,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }
    return (
        fetch("https://localhost/backend/compra", options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(Response => {
                // Resposta pronta
                return (Response);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}

function addProdutosCompra(idCompra, idProduto, qtdProduto) {
    let dados = {
        idCompra: idCompra,
        idProduto: idProduto,
        qtdProduto: qtdProduto,
    }
    let params = new URLSearchParams();
    for (let chave in dados) {
        params.append(chave, dados[chave]);
    }
    let query = params.toString();
    let options = {
        method: "POST",
        body: query,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }
    return (
        fetch("https://localhost/backend/produtoscompra", options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(Response => {
                // Resposta pronta
                return (Response);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
//########
//Atualiza
//########
function putCliente(id, nome, nome_usuario, estado, cidade, bairro, rua, nro_cartao, nro_seguranca, nome_cartao, data_validade_cartao) {
    let dados = {
        nome: nome,
        nome_usuario: nome_usuario,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        nro_cartao: nro_cartao,
        nro_seguranca: nro_seguranca,
        nome_cartao: nome_cartao,
        data_validade_cartao: data_validade_cartao,
    }
    let params = new URLSearchParams();
    for (let chave in dados) {
        params.append(chave, dados[chave]);
    }
    let query = params.toString();
    let options = {
        method: "PUT",
        body: query,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }
    console.log(options);
    return (
        fetch("https://localhost/backend/cliente/" + id, options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(Response => {
                // Resposta pronta
                return (Response);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}

function putProduto(id, nome, qtdEstoque, preco, descricao) {
    let dados = {
        nome: nome,
        qtdEstoque: qtdEstoque,
        preco: preco,
        descricao: descricao,
    }
    let params = new URLSearchParams();
    for (let chave in dados) {
        params.append(chave, dados[chave]);
    }
    let query = params.toString();
    let options = {
        method: "PUT",
        body: query,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }
    return (
        fetch("https://localhost/backend/produto/" + id, options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(Response => {
                // Resposta pronta
                return (Response);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}

function putCompra(id, idCliente, dataCompra) {
    let dados = {
        idCliente: idCliente,
        dataCompra: dataCompra,
    }
    let params = new URLSearchParams();
    for (let chave in dados) {
        params.append(chave, dados[chave]);
    }
    let query = params.toString();
    let options = {
        method: "PUT",
        body: query,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }
    return (
        fetch("https://localhost/backend/compra/" + id, options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(Response => {
                // Resposta pronta
                return (Response);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}

function putProdutosCompra(id, idCompra, idProduto, qtdProduto) {
    let dados = {
        idCompra: idCompra,
        idProduto: idProduto,
        qtdProduto: qtdProduto,
    }
    let params = new URLSearchParams();
    for (let chave in dados) {
        params.append(chave, dados[chave]);
    }
    let query = params.toString();
    let options = {
        method: "PUT",
        body: query,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }
    return (
        fetch("https://localhost/backend/produtoscompra/" + id, options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(Response => {
                // Resposta pronta
                return (Response);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
//######
//Deleta
//######
function delCliente(id) {
    let options = {
        method: "DELETE",
    }
    return (
        fetch("https://localhost/backend/cliente/" + id, options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
function delProduto(id) {
    let options = {
        method: "DELETE",
    }
    return (
        fetch("https://localhost/backend/produto/" + id, options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
function delCompra(id) {
    let options = {
        method: "DELETE",
    }
    return (
        fetch("https://localhost/backend/compra/" + id, options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
function delProdutosCompra(id) {
    let options = {
        method: "DELETE",
    }
    return (
        fetch("https://localhost/backend/produtoscompra/" + id, options).then(resposta => {
            if (!resposta.ok) {
                throw new Error("Houve algum erro");
            }
            return resposta.json();
        })
            .then(dados => {
                // Resposta pronta
                dadosReturn = dados;
                return (dadosReturn);
            })
            .catch(erro => {
                console.error("Erro encontrado: ", erro);
            })
    );
}
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////
//Função listar
///////////////

function listarClientes(objeto, styleDiv = "display: flex; flex-direction: row; gap: 10px;") {
    let clientes = getClientes();
    console.log(clientes);
    clientes.then(lista => {
        console.log(lista);
        while (objeto.children.length > 0) {
            objeto.removeChild(objeto.children[objeto.children.length - 1]);
        }
        for (elemento of lista) {
            let cliente = document.createElement("div");
            let vetor = Array();
            let chaves = Object.keys(elemento);
            for (chave of chaves) {
                let dive = document.createElement("div");
                dive.className = chave;
                dive.innerText = elemento[chave];
                vetor.push(dive);
            }
            for (valor of vetor) {
                cliente.append(valor);
            }
            let botaoDeletar = document.createElement("button");
            let botaoEditar = document.createElement("button");
            botaoDeletar.innerText = "Deletar";
            botaoEditar.innerText = "Editar";
            botaoDeletar.addEventListener("click", function (e){
                let elemento = e.target;
                let paiElemento = elemento.parentElement;
                let filhos = paiElemento.children;
                let id
                for(filho of filhos){
                    if(filho.className == "id"){
                        id = filho.innerText
                    }
                }
                removerCliente(id).then(response =>{
                    listarClientes(paiElemento.parentElement);
                });
                
            })
            botaoEditar.addEventListener("click", function (e){
                let filhos = e.target.parentElement.children;
                let formulario = document.createElement("form");
                let tipoCampo = ["text", "text", "text", "text", "text", "text", "text", "text", "text"];
                let mensagemCampo = ["Nome:", "Nome de usuario:", "Estado abreviado:","Cidade:", "Bairro:", "Rua:", "Numero do cartão:", "Numero de segurança do cartão:", "Nome do cartão:", "Data de validade do cartão:"];
                let contador = 0;
                let divID = document.createElement("div");
                divID.className = filhos[0].className;
                divID.innerText = filhos[0].innerText;
                divID.hidden = true;
                formulario.append(divID);
                for(filho of filhos){
                    if(filho.tagName != "BUTTON" && filho.className != "id"){
                        let mensagem = document.createElement("label");
                        let campo = document.createElement("input");
                        mensagem.for = filho.className;
                        mensagem.innerText = mensagemCampo[contador];
                        campo.name = filho.className;
                        campo.type = tipoCampo[contador];
                        campo.value = filho.innerText;
                        formulario.append(mensagem);
                        formulario.append(document.createElement("br"));
                        formulario.append(campo);
                        formulario.append(document.createElement("br"));
                        contador += 1;
                    }
                }
                let botaoEnviar = document.createElement("button");
                let botaoCancelar = document.createElement("button");
                botaoEnviar.innerText = "Enviar";
                botaoCancelar.innerText = "Cancelar";
                botaoEnviar.type = "button";
                botaoCancelar.type = "button";
                botaoEnviar.addEventListener("click", function (e){
                    let paiElemento = e.target.parentElement;
                    let filhos = paiElemento.children;
                    let vetorParametros = [filhos[0].innerText];
                    for(filho of filhos){
                        if(filho.tagName == "INPUT"){
                            vetorParametros.push(filho.value);
                            console.log(vetorParametros);
                        }
                    }
                    editarCliente(vetorParametros[0], vetorParametros[1], vetorParametros[2], vetorParametros[3], vetorParametros[4], vetorParametros[5], vetorParametros[6], vetorParametros[7], vetorParametros[8], vetorParametros[9], vetorParametros[10], vetorParametros[11]).then(resposta =>{
                        listarClientes(paiElemento.parentElement.parentElement);
                    })
                })
                botaoCancelar.addEventListener("click", function (e){
                    listarClientes(e.target.parentElement.parentElement.parentElement);
                })
                formulario.append(botaoEnviar);
                formulario.append(botaoCancelar);
                let elementoPai = e.target.parentElement;
                while (elementoPai.children.length > 0) {
                    elementoPai.removeChild(elementoPai.children[elementoPai.children.length - 1]);
                }
                elementoPai.append(formulario);
            })
            cliente.append(botaoDeletar);
            cliente.append(botaoEditar);
            cliente.style = styleDiv;
            objeto.append(cliente);
        }
    })
}

function listarProdutos(objeto, styleDiv = "display: flex; flex-direction: row; gap: 10px;") {
    let produtos = getProdutos();
    console.log(produtos);
    produtos.then(lista => {
        console.log(lista);
        while (objeto.children.length > 0) {
            objeto.removeChild(objeto.children[objeto.children.length - 1]);
        }
        for (elemento of lista) {
            let produto = document.createElement("div");
            let vetor = Array();
            let chaves = Object.keys(elemento);
            for (chave of chaves) {
                let dive = document.createElement("div");
                dive.innerText = elemento[chave];
                dive.className = chave;
                vetor.push(dive);
            }
            for (valor of vetor) {
                produto.append(valor);
            }
            let botaoDeletar = document.createElement("button");
            let botaoEditar = document.createElement("button");
            botaoDeletar.innerText = "Deletar";
            botaoEditar.innerText = "Editar";
            botaoDeletar.addEventListener("click", function (e){
                let elemento = e.target;
                let paiElemento = elemento.parentElement;
                let filhos = paiElemento.children;
                let id
                for(filho of filhos){
                    if(filho.className == "id"){
                        id = filho.innerText
                    }
                }
                removerProduto(id).then(response =>{
                    listarProdutos(paiElemento.parentElement);
                });
                
            })
            produto.append(botaoDeletar);
            produto.append(botaoEditar);
            produto.style = styleDiv;
            objeto.append(produto);
        }
    })
}

function listarCompras(objeto, styleDiv = "display: flex; flex-direction: row; gap: 10px;") {
    let compras = getCompras();
    console.log(compras);
    compras.then(lista => {
        console.log(lista);
        while (objeto.children.length > 0) {
            objeto.removeChild(objeto.children[objeto.children.length - 1]);
        }
        for (elemento of lista) {
            let compra = document.createElement("div");
            let vetor = Array();
            let chaves = Object.keys(elemento);
            for (chave of chaves) {
                let dive = document.createElement("div");
                dive.innerText = elemento[chave];
                dive.className = chave;
                vetor.push(dive);
            }
            for (valor of vetor) {
                compra.append(valor);
            }
            let botaoDeletar = document.createElement("button");
            let botaoEditar = document.createElement("button");
            botaoDeletar.innerText = "Deletar";
            botaoEditar.innerText = "Editar";
            botaoDeletar.addEventListener("click", function (e){
                let elemento = e.target;
                let paiElemento = elemento.parentElement;
                let filhos = paiElemento.children;
                let id
                for(filho of filhos){
                    if(filho.className == "id"){
                        id = filho.innerText
                    }
                }
                removerCompra(id).then(response =>{
                    listarCompras(paiElemento.parentElement);
                });
                
            })
            compra.append(botaoDeletar);
            compra.append(botaoEditar);
            compra.style = styleDiv;
            objeto.append(compra);
        }
    })
}

function listarProdutosCompras(objeto, styleDiv = "display: flex; flex-direction: row; gap: 10px;") {
    let produtosCompras = getProdutosCompras();
    console.log(produtosCompras);
    produtosCompras.then(lista => {
        console.log(lista);
        while (objeto.children.length > 0) {
            objeto.removeChild(objeto.children[objeto.children.length - 1]);
        }
        for (elemento of lista) {
            let produtosCompra = document.createElement("div");
            let vetor = Array();
            let chaves = Object.keys(elemento);
            for (chave of chaves) {
                let dive = document.createElement("div");
                dive.innerText = elemento[chave];
                dive.className = chave;
                vetor.push(dive);
            }
            for (valor of vetor) {
                produtosCompra.append(valor);
            }
            let botaoDeletar = document.createElement("button");
            let botaoEditar = document.createElement("button");
            botaoDeletar.innerText = "Deletar";
            botaoEditar.innerText = "Editar";
            botaoDeletar.addEventListener("click", function (e){
                let elemento = e.target;
                let paiElemento = elemento.parentElement;
                let filhos = paiElemento.children;
                let id
                for(filho of filhos){
                    if(filho.className == "id"){
                        id = filho.innerText
                    }
                }
                removerProdutoCompra(id).then(response =>{
                    listarProdutosCompras(paiElemento.parentElement);
                });
                
            })
            produtosCompra.append(botaoDeletar);
            produtosCompra.append(botaoEditar);
            produtosCompra.style = styleDiv;
            objeto.append(produtosCompra);
        }
    })
}

////Botões///

let botaoCliente = document.querySelector(".listarTodosCliente");
botaoCliente.addEventListener("click", function (e) {
    let elemento = e.target;
    listarClientes(elemento.parentElement.nextElementSibling);
})
let botaoProduto = document.querySelector(".listarTodosProdutos");
botaoProduto.addEventListener("click", function (e) {
    let elemento = e.target;
    listarProdutos(elemento.parentElement.nextElementSibling);
})
let botaoCompra = document.querySelector(".listarTodasCompras");
botaoCompra.addEventListener("click", function (e) {
    let elemento = e.target;
    listarCompras(elemento.parentElement.nextElementSibling);
})
let botaoProdutoCompra = document.querySelector(".listarTodosProdutosCompra");
botaoProdutoCompra.addEventListener("click", function (e) {
    let elemento = e.target;
    listarProdutosCompras(elemento.parentElement.nextElementSibling);
})

////////////////////
///Função inserir///
////////////////////

function inserirCliente(nome, nome_usuario, estado, cidade, bairro, rua, nro_cartao, nro_seguranca, nome_cartao, data_validade_cartao) {
    return (addCliente(nome, nome_usuario, estado, cidade, bairro, rua, nro_cartao, nro_seguranca, nome_cartao, data_validade_cartao));
}

function inserirProduto(nome, qtdEstoque, preco, descricao){
    return (addProduto(nome, qtdEstoque, preco, descricao));
}

function inserirCompra(idCliente, dataCompra){
    return (addCompra(idCliente, dataCompra));
}

function inserirProdutosCompra(idCompra, idProduto, qtdProduto){
    return (addProdutosCompra(idCompra, idProduto, qtdProduto));
}

///////Botões
let botaoInserirCliente = document.querySelector(".inserirCliente");
botaoInserirCliente.addEventListener("click", function (e) {
    let elemento = e.target;
    let paiElemento = elemento.parentElement;
    let filhos = paiElemento.children;
    let campos = ["nome", "nome_usuario", "estado", "cidade", "bairro", "rua", "nro_cartao", "nro_seguranca", "nome_cartao", "data_validade_cartao"];
    valores = [];
    for (valor of filhos) {
        for (campo of campos) {
            if (valor.name == campo) {
                valores.push(valor.value);
            }
        }
    }
    inserirCliente(valores[0], valores[1], valores[2], valores[3], valores[4], valores[5], valores[6], valores[7], valores[8])
});

let botaoInserirProduto = document.querySelector(".inserirProduto");
botaoInserirProduto.addEventListener("click", function (e) {
    let elemento = e.target;
    let paiElemento = elemento.parentElement;
    let filhos = paiElemento.children;
    let campos = ["nome", "qtdEstoque", "preco", "descricao"];
    valores = [];
    for (valor of filhos) {
        for (campo of campos) {
            if (valor.name == campo) {
                valores.push(valor.value);
            }
        }
    }
    inserirProduto(valores[0], valores[1], valores[2], valores[3]);
});

let botaoInserirCompra = document.querySelector(".inserirCompra");
botaoInserirCompra.addEventListener("click", function (e) {
    let elemento = e.target;
    let paiElemento = elemento.parentElement;
    let filhos = paiElemento.children;
    let campos = ["idCliente", "dataCompra"];
    valores = [];
    for (valor of filhos) {
        for (campo of campos) {
            if (valor.name == campo) {
                valores.push(valor.value);
            }
        }
    }
    inserirCompra(valores[0], valores[1])
});

let botaoInserirProdutoCompra = document.querySelector(".inserirProdutoCompra");
botaoInserirProdutoCompra.addEventListener("click", function (e) {
    let elemento = e.target;
    let paiElemento = elemento.parentElement;
    let filhos = paiElemento.children;
    let campos = ["idCompra", "idProduto", "qtdProduto"];
    valores = [];
    for (valor of filhos) {
        for (campo of campos) {
            if (valor.name == campo) {
                valores.push(valor.value);
            }
        }
    }
    inserirProdutosCompra(valores[0], valores[1], valores[2]);
});

////////////////
//Função editar/
////////////////

function editarCliente(id, nome, nome_usuario, estado, cidade, bairro, rua, nro_cartao, nro_seguranca, nome_cartao, data_validade_cartao){
    return(putCliente(id, nome, nome_usuario, estado, cidade, bairro, rua, nro_cartao, nro_seguranca, nome_cartao, data_validade_cartao));
}

function editarProduto(id, nome, qtdEstoque, preco, descricao){
    return(putProduto(id, nome, qtdEstoque, preco, descricao));
}

function editarCompra(id, idCliente, dataCompra){
    return(putCompra(id, idCliente, dataCompra));
}

function editarProdutoCompra(id, idCompra, idProduto, qtdProduto){
    return(putProdutosCompra(id, idCompra, idProduto, qtdProduto));
}

/////////////////
//Função deletar/
/////////////////

function removerCliente(id){
    return(delCliente(id)); 
}

function removerProduto(id){
    return(delProduto(id));
}

function removerCompra(id){
    return(delCompra(id));
}

function removerProdutoCompra(id){
    return(delProdutosCompra(id));
}