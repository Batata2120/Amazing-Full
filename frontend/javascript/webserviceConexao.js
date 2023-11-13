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
        fetch("https://localhost/backend/produtocompra").then(resposta => {
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
        fetch("https://localhost/backend/produtocompra/" + id).then(resposta => {
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
        fetch("https://localhost/backend/produtocompra", options).then(resposta => {
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
        fetch("https://localhost/backend/produtocompra/" + id, options).then(resposta => {
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
        fetch("https://localhost/backend/produtocompra/" + id, options).then(resposta => {
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

function listarClientes(objeto, styleDiv = ""){
    let clientes = getClientes();
    console.log(clientes);
    clientes.then(lista =>{
        console.log(lista);
        while(objeto.nextElementSibling.children.length > 0){
            objeto.nextElementSibling.removeChild(objeto.nextElementSibling.children[objeto.nextElementSibling.children.length - 1]);
        }
        for(elemento of lista){
            let cliente = document.createElement("div");
            let vetor = Array();
            let chaves = Object.keys(elemento);
            for(chave of chaves){
                let dive = document.createElement("div");
                dive.innerText = elemento[chave];
                vetor.push(dive);
            }
            for(valor of vetor){
                cliente.append(valor);
            }
            cliente.style = styleDiv;
            objeto.nextElementSibling.append(cliente);
        }
    })
}
let botao = document.querySelector(".listarTodosCliente");
botao.addEventListener("click", function (e){
    let elemento = e.target;
    listarClientes(elemento.parentElement);   
})