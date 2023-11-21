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
            botaoDeletar.addEventListener("click", function (e) {
                let elemento = e.target;
                let paiElemento = elemento.parentElement;
                let filhos = paiElemento.children;
                let id
                for (filho of filhos) {
                    if (filho.className == "id") {
                        id = filho.innerText
                    }
                }
                removerCliente(id).then(response => {
                    listarClientes(paiElemento.parentElement);
                });

            })
            botaoEditar.addEventListener("click", function (e) {
                let tipoCampo = ["text", "text", "text", "text", "text", "text", "text", "text", "text"];
                let mensagemCampo = ["Nome:", "Nome de usuario:", "Estado abreviado:", "Cidade:", "Bairro:", "Rua:", "Numero do cartão:", "Numero de segurança do cartão:", "Nome do cartão:", "Data de validade do cartão:"];
                funcaoEditar(e.target, tipoCampo, mensagemCampo, "cliente");
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
            botaoDeletar.addEventListener("click", function (e) {
                let elemento = e.target;
                let paiElemento = elemento.parentElement;
                let filhos = paiElemento.children;
                let id
                for (filho of filhos) {
                    if (filho.className == "id") {
                        id = filho.innerText
                    }
                }
                removerProduto(id).then(response => {
                    listarProdutos(paiElemento.parentElement);
                });

            })
            botaoEditar.addEventListener("click", function (e) {
                let tipoCampo = ["text", "number", "number"];
                let mensagemCampo = ["Nome:", "Quantidade no estoque:", "Preço:"];
                funcaoEditar(e.target, tipoCampo, mensagemCampo, "produto");
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
            botaoDeletar.addEventListener("click", function (e) {
                let elemento = e.target;
                let paiElemento = elemento.parentElement;
                let filhos = paiElemento.children;
                let id
                for (filho of filhos) {
                    if (filho.className == "id") {
                        id = filho.innerText
                    }
                }
                removerCompra(id).then(response => {
                    listarCompras(paiElemento.parentElement);
                });

            })
            botaoEditar.addEventListener("click", function (e) {
                let tipoCampo = ["number", "text"];
                let mensagemCampo = ["ID cliente:", "Data da compra:"];
                funcaoEditar(e.target, tipoCampo, mensagemCampo, "compra");
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
            botaoDeletar.addEventListener("click", function (e) {
                let elemento = e.target;
                let paiElemento = elemento.parentElement;
                let filhos = paiElemento.children;
                let id;
                for (filho of filhos) {
                    if (filho.className == "id") {
                        id = filho.innerText
                    }
                }
                removerProdutoCompra(id).then(response => {
                    listarProdutosCompras(paiElemento.parentElement);
                });

            })
            botaoEditar.addEventListener("click", function (e) {
                let tipoCampo = ["number"];
                let mensagemCampo = ["ID da compra", "Nome do produto:", "Quantidade de produtos"];
                funcaoEditar(e.target, tipoCampo, mensagemCampo, "produtoCompra");
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

function inserirProduto(nome, qtdEstoque, preco, descricao) {
    return (addProduto(nome, qtdEstoque, preco, descricao));
}

function inserirCompra(idCliente, dataCompra) {
    return (addCompra(idCliente, dataCompra));
}

function inserirProdutosCompra(idCompra, idProduto, qtdProduto) {
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

////////////////
//botões////////
////////////////

function funcaoEditar(botao, tipoCampo, mensagemCampo, tipo) {
    console.log(botao);
    console.log(botao.parentElement);
    let filhos = botao.parentElement.children;
    let formulario = document.createElement("form");
    let contador = 0;
    let divID = document.createElement("div");
    divID.className = filhos[0].className;
    divID.innerText = filhos[0].innerText;
    divID.hidden = true;
    formulario.append(divID);
    for (filho of filhos) {
        if (tipo == "cliente") {
            if (filho.tagName != "BUTTON" && filho.className != "id") {
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
        } else if (tipo == "produto") {
            if (filho.tagName != "BUTTON" && filho.className != "id" && filho.className != "descricao") {
                let mensagem = document.createElement("label");
                let campo = document.createElement("input");
                mensagem.for = filho.className;
                mensagem.innerText = mensagemCampo[contador];
                campo.name = filho.className;
                campo.type = tipoCampo[contador];
                campo.value = filho.innerText;
                if (filho.className == "preco") {
                    // campo.required = true;
                    campo.step = 0.01;
                }
                formulario.append(mensagem);
                formulario.append(document.createElement("br"));
                formulario.append(campo);
                formulario.append(document.createElement("br"));
                contador += 1;
            } else if (filho.className == "descricao") {
                let mensagem = document.createElement("label");
                let campo = document.createElement("textarea");
                mensagem.for = filho.className;
                mensagem.innerText = "Descrição do produto:";
                campo.name = filho.className;
                campo.cols = "30";
                campo.rows = "10";
                campo.value = filho.innerText;
                formulario.append(mensagem);
                formulario.append(document.createElement("br"));
                formulario.append(campo);
                formulario.append(document.createElement("br"));
                contador += 1;
            }
        } else if (tipo == "compra") {
            if (filho.tagName != "BUTTON" && filho.className != "id" && filho.className != "idCliente") {
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
            }else if (filho.className == "idCliente"){
                let mensagem = document.createElement("label");
                let campo = document.createElement("select");
                mensagem.for = filho.className;
                mensagem.innerText = mensagemCampo[contador];
                campo.name = filho.className;
                let selecionado = filho.innerText;
                listarIdCompras(campo).then(response => {
                    let opcoes = campo.children;
                    for (opcao of opcoes) {
                        if (opcao.innerText == selecionado) {
                            opcao.selected = true;
                        }
                    }
                });
                formulario.append(mensagem);
                formulario.append(document.createElement("br"));
                formulario.append(campo);
                formulario.append(document.createElement("br"));
                contador += 1;
            }
        } else if (tipo == "produtoCompra") {
            if (filho.tagName != "BUTTON" && filho.className != "id" && filho.className != "idCompra" && filho.className != "idProduto") {
                let mensagem = document.createElement("label");
                let campo = document.createElement("input");
                console.log(filho.className);
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
            } else if (filho.className == "idCompra") {
                let mensagem = document.createElement("label");
                let campo = document.createElement("select");
                mensagem.for = filho.className;
                mensagem.innerText = mensagemCampo[contador];
                campo.name = filho.className;
                let selecionado = filho.innerText;
                listarIdCompras(campo).then(response => {
                    let opcoes = campo.children;
                    for (opcao of opcoes) {
                        if (opcao.innerText == selecionado) {
                            opcao.selected = true;
                        }
                    }
                });
                formulario.append(mensagem);
                formulario.append(document.createElement("br"));
                formulario.append(campo);
                formulario.append(document.createElement("br"));
                contador += 1;
            } else if (filho.className == "idProduto") {
                let mensagem = document.createElement("label");
                let campo = document.createElement("select");
                mensagem.for = filho.className;
                mensagem.innerText = mensagemCampo[contador];
                campo.name = filho.className;
                let selecionado = filho.innerText;
                listarIdProdutos(campo).then(response => {
                    let opcoes = campo.children;
                    for (opcao of opcoes) {
                        if (opcao.value == selecionado) {
                            opcao.selected = true;
                        }
                    }
                });
                formulario.append(mensagem);
                formulario.append(document.createElement("br"));
                formulario.append(campo);
                formulario.append(document.createElement("br"));
                contador += 1;
            }
        }
    }
    let botaoEnviar = document.createElement("button");
    let botaoCancelar = document.createElement("button");
    botaoEnviar.innerText = "Enviar";
    botaoCancelar.innerText = "Cancelar";
    botaoEnviar.type = "button";
    botaoCancelar.type = "button";
    botaoEnviar.addEventListener("click", function (e) {
        let paiElemento = e.target.parentElement;
        console.log(paiElemento);
        let filhos = paiElemento.children;
        let vetorParametros = [filhos[0].innerText];
        for (filho of filhos) {
            if (filho.tagName == "INPUT" || filho.tagName == "TEXTAREA") {
                vetorParametros.push(filho.value);
                console.log(vetorParametros);
            }
        }
        if (tipo == "cliente") {
            editarCliente(vetorParametros[0], vetorParametros[1], vetorParametros[2], vetorParametros[3], vetorParametros[4], vetorParametros[5], vetorParametros[6], vetorParametros[7], vetorParametros[8], vetorParametros[9], vetorParametros[10], vetorParametros[11]).then(resposta => {
                listarClientes(paiElemento.parentElement.parentElement);
            })
        }
        if (tipo == "produto") {
            editarProduto(vetorParametros[0], vetorParametros[1], vetorParametros[2], vetorParametros[3], vetorParametros[4]).then(resposta => {
                listarProdutos(paiElemento.parentElement.parentElement);
            })
        }
        if (tipo == "compra") {
            editarCompra(vetorParametros[0], vetorParametros[1], vetorParametros[2]).then(resposta => {
                listarCompras(paiElemento.parentElement.parentElement);
            })
        }
        if (tipo == "produtoCompra") {
            editarProdutoCompra(vetorParametros[0], vetorParametros[1], vetorParametros[2], vetorParametros[3]).then(resposta => {
                listarProdutosCompras(paiElemento.parentElement.parentElement);
            })
        }
    })
    botaoCancelar.addEventListener("click", function (e) {
        if (tipo == "cliente") {
            listarClientes(e.target.parentElement.parentElement.parentElement);
        }
        if (tipo == "produto") {
            listarProdutos(e.target.parentElement.parentElement.parentElement);
        }
        if (tipo == "compra") {
            listarCompras(e.target.parentElement.parentElement.parentElement);
        }
        if (tipo == "produtoCompra") {
            listarProdutosCompras(e.target.parentElement.parentElement.parentElement);
        }
    })
    formulario.append(botaoEnviar);
    formulario.append(botaoCancelar);
    let elementoPai = botao.parentElement;
    while (elementoPai.children.length > 0) {
        elementoPai.removeChild(elementoPai.children[elementoPai.children.length - 1]);
    }
    elementoPai.append(formulario);
}

function funcaoEditarEspecifico(id, botao, tipoCampo, mensagemCampo, tipo) {
    console.log(botao);
    console.log(botao.parentElement);
    let filhos = botao.parentElement.children;
    let formulario = document.createElement("form");
    let contador = 0;
    let divID = document.createElement("div");
    divID.className = filhos[0].className;
    divID.innerText = filhos[0].innerText;
    divID.hidden = true;
    formulario.append(divID);
    for (filho of filhos) {
        if (tipo == "cliente") {
            if (filho.tagName != "BUTTON" && filho.className != "id") {
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
        } else if (tipo == "produto") {
            if (filho.tagName != "BUTTON" && filho.className != "id" && filho.className != "descricao") {
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
            } else if (filho.className == "descricao") {
                let mensagem = document.createElement("label");
                let campo = document.createElement("textarea");
                mensagem.for = filho.className;
                mensagem.innerText = "Descrição do produto:";
                campo.name = filho.className;
                campo.cols = "30";
                campo.rows = "10";
                campo.value = filho.innerText;
                formulario.append(mensagem);
                formulario.append(document.createElement("br"));
                formulario.append(campo);
                formulario.append(document.createElement("br"));
                contador += 1;
            }
        } else if (tipo == "compra") {

        } else if (tipo == "produtoCompra") {

        }
    }
    let botaoEnviar = document.createElement("button");
    let botaoCancelar = document.createElement("button");
    botaoEnviar.innerText = "Enviar";
    botaoCancelar.innerText = "Cancelar";
    botaoEnviar.type = "button";
    botaoCancelar.type = "button";
    botaoEnviar.addEventListener("click", function (e) {
        let paiElemento = e.target.parentElement;
        console.log(paiElemento);
        let filhos = paiElemento.children;
        let vetorParametros = [filhos[0].innerText];
        for (filho of filhos) {
            if (filho.tagName == "INPUT" || filho.tagName == "TEXTAREA") {
                vetorParametros.push(filho.value);
                console.log(vetorParametros);
            }
        }
        if (tipo == "cliente") {
            editarCliente(vetorParametros[0], vetorParametros[1], vetorParametros[2], vetorParametros[3], vetorParametros[4], vetorParametros[5], vetorParametros[6], vetorParametros[7], vetorParametros[8], vetorParametros[9], vetorParametros[10], vetorParametros[11]).then(resposta => {
                listarClienteEspecifico(id, e.target.parentElement.parentElement.parentElement);
            })
        }
        if (tipo == "produto") {
            editarProduto(vetorParametros[0], vetorParametros[1], vetorParametros[2], vetorParametros[3], vetorParametros[4]).then(resposta => {
                listarProdutos(paiElemento.parentElement.parentElement);
            })
        }
        if (tipo == "compra") {
            editarCompra(vetorParametros[0], vetorParametros[1], vetorParametros[2]).then(resposta => {
                listarCompras(paiElemento.parentElement.parentElement);
            })
        }
        if (tipo == "produtoCompra") {
            editarProdutoCompra(vetorParametros[0], vetorParametros[1], vetorParametros[2], vetorParametros[3]).then(resposta => {
                listarProdutosCompras(paiElemento.parentElement.parentElement);
            })
        }
    })
    botaoCancelar.addEventListener("click", function (e) {
        if (tipo == "cliente") {
            listarClienteEspecifico(id, e.target.parentElement.parentElement.parentElement);
        }
        if (tipo == "produto") {
            listarProdutos(id, e.target.parentElement.parentElement.parentElement);
        }
        if (tipo == "compra") {
            listarCompras(id, e.target.parentElement.parentElement.parentElement);
        }
        if (tipo == "produtoCompra") {
            listarProdutosCompras(id, e.target.parentElement.parentElement.parentElement);
        }
    })
    formulario.append(botaoEnviar);
    formulario.append(botaoCancelar);
    let elementoPai = botao.parentElement;
    while (elementoPai.children.length > 0) {
        elementoPai.removeChild(elementoPai.children[elementoPai.children.length - 1]);
    }
    elementoPai.append(formulario);
}

////////////////
//funções///////
////////////////

function editarCliente(id, nome, nome_usuario, estado, cidade, bairro, rua, nro_cartao, nro_seguranca, nome_cartao, data_validade_cartao) {
    return (putCliente(id, nome, nome_usuario, estado, cidade, bairro, rua, nro_cartao, nro_seguranca, nome_cartao, data_validade_cartao));
}

function editarProduto(id, nome, qtdEstoque, preco, descricao) {
    return (putProduto(id, nome, qtdEstoque, preco, descricao));
}

function editarCompra(id, idCliente, dataCompra) {
    return (putCompra(id, idCliente, dataCompra));
}

function editarProdutoCompra(id, idCompra, idProduto, qtdProduto) {
    return (putProdutosCompra(id, idCompra, idProduto, qtdProduto));
}

/////////////////
//Função deletar/
/////////////////

function removerCliente(id) {
    return (delCliente(id));
}

function removerProduto(id) {
    return (delProduto(id));
}

function removerCompra(id) {
    return (delCompra(id));
}

function removerProdutoCompra(id) {
    return (delProdutosCompra(id));
}

///////////////
//Listar id////
///////////////

function listarIdClientes(objeto) {
    return (
        getClientes().then(response => {
            while (objeto.children.length > 0) {
                objeto.removeChild(objeto.children[objeto.children.length - 1]);
            }
            for (valor of response) {
                let opcao = document.createElement("option");
                opcao.value = valor["id"];
                opcao.innerText = valor["nome_usuario"];
                objeto.append(opcao);
            }
        })
    );
}
function listarIdProdutos(objeto) {
    return (
        getProdutos().then(response => {
            while (objeto.children.length > 0) {
                objeto.removeChild(objeto.children[objeto.children.length - 1]);
            }
            for (valor of response) {
                let opcao = document.createElement("option");
                opcao.value = valor["id"];
                opcao.innerText = valor["nome"];
                objeto.append(opcao);
            }
        })
    )
}
function listarIdCompras(objeto) {
    return (
        getCompras().then(response => {
            while (objeto.children.length > 0) {
                objeto.removeChild(objeto.children[objeto.children.length - 1]);
            }
            for (valor of response) {
                let opcao = document.createElement("option");
                opcao.value = valor["id"];
                opcao.innerText = valor["id"];
                objeto.append(opcao);
            }
        })
    )
}
function listarIdProdutoCompra(objeto) {
    return (
        getProdutosCompras().then(response => {
            while (objeto.children.length > 0) {
                objeto.removeChild(objeto.children[objeto.children.length - 1]);
            }
            for (valor of response) {
                let opcao = document.createElement("option");
                opcao.value = valor["id"];
                opcao.innerText = valor["id"];
                objeto.append(opcao);
            }
        })
    )
}
function listarClienteEspecifico(id, objeto, styleDiv = "display: flex; flex-direction: row; gap: 10px;") {
    getCliente(id).then(response => {
        let cliente = document.createElement("div");
        let vetor = Array();
        let chaves = Object.keys(response);
        for (chave of chaves) {
            let dive = document.createElement("div");
            dive.className = chave;
            dive.innerText = response[chave];
            vetor.push(dive);
        }
        for (valor of vetor) {
            cliente.append(valor);
        }
        let botaoDeletar = document.createElement("button");
        let botaoEditar = document.createElement("button");
        botaoDeletar.innerText = "Deletar";
        botaoEditar.innerText = "Editar";
        botaoDeletar.addEventListener("click", function (e) {
            let elemento = e.target;
            let paiElemento = elemento.parentElement;
            let filhos = paiElemento.children;
            let id
            for (filho of filhos) {
                if (filho.className == "id") {
                    id = filho.innerText
                }
            }
            removerCliente(id).then(response => {
                listarClienteEspecifico(id, objeto);
            });

        })
        botaoEditar.addEventListener("click", function (e) {
            let tipoCampo = ["text", "text", "text", "text", "text", "text", "text", "text", "text"];
            let mensagemCampo = ["Nome:", "Nome de usuario:", "Estado abreviado:", "Cidade:", "Bairro:", "Rua:", "Numero do cartão:", "Numero de segurança do cartão:", "Nome do cartão:", "Data de validade do cartão:"];
            funcaoEditarEspecifico(id, e.target, tipoCampo, mensagemCampo, "cliente");
        })
        cliente.append(botaoDeletar);
        cliente.append(botaoEditar);
        cliente.style = styleDiv;
        if (objeto.children.length > 2) {
            objeto.removeChild(objeto.children[objeto.children.length - 1]);
        }
        objeto.append(cliente);
    })
}

function listarProdutoEspecifico(id, objeto, styleDiv = "display: flex; flex-direction: row; gap: 10px;") {
    getProduto(id).then(response => {
        let cliente = document.createElement("div");
        let vetor = Array();
        let chaves = Object.keys(response);
        for (chave of chaves) {
            let dive = document.createElement("div");
            dive.className = chave;
            dive.innerText = response[chave];
            vetor.push(dive);
        }
        for (valor of vetor) {
            cliente.append(valor);
        }
        let botaoDeletar = document.createElement("button");
        let botaoEditar = document.createElement("button");
        botaoDeletar.innerText = "Deletar";
        botaoEditar.innerText = "Editar";
        botaoDeletar.addEventListener("click", function (e) {
            let elemento = e.target;
            let paiElemento = elemento.parentElement;
            let filhos = paiElemento.children;
            let id
            for (filho of filhos) {
                if (filho.className == "id") {
                    id = filho.innerText
                }
            }
            removerCliente(id).then(response => {
                listarClienteEspecifico(id, objeto);
            });

        })
        botaoEditar.addEventListener("click", function (e) {
            let tipoCampo = ["text", "text", "text", "text", "text", "text", "text", "text", "text"];
            let mensagemCampo = ["Nome:", "Nome de usuario:", "Estado abreviado:", "Cidade:", "Bairro:", "Rua:", "Numero do cartão:", "Numero de segurança do cartão:", "Nome do cartão:", "Data de validade do cartão:"];
            funcaoEditarEspecifico(id, e.target, tipoCampo, mensagemCampo, "cliente");
        })
        cliente.append(botaoDeletar);
        cliente.append(botaoEditar);
        cliente.style = styleDiv;
        if (objeto.children.length > 2) {
            objeto.removeChild(objeto.children[objeto.children.length - 1]);
        }
        objeto.append(cliente);
    })
}

function listarCompraEspecifica(id, objeto, styleDiv = "display: flex; flex-direction: row; gap: 10px;") {
    getCompra(id).then(response => {
        let cliente = document.createElement("div");
        let vetor = Array();
        let chaves = Object.keys(response);
        for (chave of chaves) {
            let dive = document.createElement("div");
            dive.className = chave;
            dive.innerText = response[chave];
            vetor.push(dive);
        }
        for (valor of vetor) {
            cliente.append(valor);
        }
        let botaoDeletar = document.createElement("button");
        let botaoEditar = document.createElement("button");
        botaoDeletar.innerText = "Deletar";
        botaoEditar.innerText = "Editar";
        botaoDeletar.addEventListener("click", function (e) {
            let elemento = e.target;
            let paiElemento = elemento.parentElement;
            let filhos = paiElemento.children;
            let id
            for (filho of filhos) {
                if (filho.className == "id") {
                    id = filho.innerText
                }
            }
            removerCliente(id).then(response => {
                listarClienteEspecifico(id, objeto);
            });

        })
        botaoEditar.addEventListener("click", function (e) {
            let tipoCampo = ["text", "text", "text", "text", "text", "text", "text", "text", "text"];
            let mensagemCampo = ["Nome:", "Nome de usuario:", "Estado abreviado:", "Cidade:", "Bairro:", "Rua:", "Numero do cartão:", "Numero de segurança do cartão:", "Nome do cartão:", "Data de validade do cartão:"];
            funcaoEditarEspecifico(id, e.target, tipoCampo, mensagemCampo, "cliente");
        })
        cliente.append(botaoDeletar);
        cliente.append(botaoEditar);
        cliente.style = styleDiv;
        if (objeto.children.length > 2) {
            objeto.removeChild(objeto.children[objeto.children.length - 1]);
        }
        objeto.append(cliente);
    })
}

function listarClienteEspecifico(id, objeto, styleDiv = "display: flex; flex-direction: row; gap: 10px;") {
    getCliente(id).then(response => {
        let cliente = document.createElement("div");
        let vetor = Array();
        let chaves = Object.keys(response);
        for (chave of chaves) {
            let dive = document.createElement("div");
            dive.className = chave;
            dive.innerText = response[chave];
            vetor.push(dive);
        }
        for (valor of vetor) {
            cliente.append(valor);
        }
        let botaoDeletar = document.createElement("button");
        let botaoEditar = document.createElement("button");
        botaoDeletar.innerText = "Deletar";
        botaoEditar.innerText = "Editar";
        botaoDeletar.addEventListener("click", function (e) {
            let elemento = e.target;
            let paiElemento = elemento.parentElement;
            let filhos = paiElemento.children;
            let id
            for (filho of filhos) {
                if (filho.className == "id") {
                    id = filho.innerText
                }
            }
            removerCliente(id).then(response => {
                listarClienteEspecifico(id, objeto);
            });

        })
        botaoEditar.addEventListener("click", function (e) {
            let tipoCampo = ["text", "text", "text", "text", "text", "text", "text", "text", "text"];
            let mensagemCampo = ["Nome:", "Nome de usuario:", "Estado abreviado:", "Cidade:", "Bairro:", "Rua:", "Numero do cartão:", "Numero de segurança do cartão:", "Nome do cartão:", "Data de validade do cartão:"];
            funcaoEditarEspecifico(id, e.target, tipoCampo, mensagemCampo, "cliente");
        })
        cliente.append(botaoDeletar);
        cliente.append(botaoEditar);
        cliente.style = styleDiv;
        if (objeto.children.length > 2) {
            objeto.removeChild(objeto.children[objeto.children.length - 1]);
        }
        objeto.append(cliente);
    })
}


///////////////
//Botões///////
///////////////

let botaoListarClienteEspecifico = document.querySelector(".listarClienteEspecifico")
botaoListarClienteEspecifico.addEventListener("click", function (e) {
    let elemento = e.target;
    let selecao = elemento.previousElementSibling.previousElementSibling
    console.log(selecao);
    console.log(elemento);
    console.log(selecao.selectedOptions);
    console.log(selecao.selectedOptions[0]);
    console.log(selecao.selectedOptions[0].value);
    let idCliente = selecao.selectedOptions[0].value;
    listarClienteEspecifico(idCliente, elemento.parentElement.parentElement);
})

///////////////////////////////////////
//Outras funções///////////////////////
///////////////////////////////////////

function atualizarSelecao() {
    let listaSelect = document.querySelectorAll("select");
    for (selecao of listaSelect) {
        if (selecao.name == "idCliente") {
            listarIdClientes(selecao);
        } else if (selecao.name == "idProduto") {
            listarIdProdutos(selecao);
        } else if (selecao.name == "idCompra") {
            listarIdCompras(selecao);
        } else if (selecao.name == "idPc") {
            listarIdProdutoCompra(selecao);
        }
    }
}

/////////////////////////////////////
//Outros botões//////////////////////
/////////////////////////////////////

let botaoAtualiza = document.querySelector(".atualiza");
botaoAtualiza.addEventListener("click", atualizarSelecao);

//////////////////////////////////////
//Acontece no carregamento da pagina//
//////////////////////////////////////

atualizarSelecao();