// Função para lidar com o clique nos botões
function funcaoDoJavaScript(acao) {
    if (acao === 'frente') {
        // Se o botão "frente" for clicado

        async function updateRecord(nome, direita = null, esquerda = null, frente = null, re = null) {
            const url = "https://script.google.com/macros/s/AKfycbz9sgjEB8vVYa7IjEm7yEO_y0DGI3l5XzKKuaf2-6ikwmGehdATNr-2SLX1eHYuZVlr/exec";
            const params = {
                action: "Update",
                nome: nome,
                direita: direita,
                esquerda: esquerda,
                frente: frente,
                re: re
            };
        
            // Remove keys with null values
            const filteredParams = {};
            for (const key in params) {
                if (params[key] !== null) {
                    filteredParams[key] = params[key];
                }
            }
        
            const queryString = new URLSearchParams(filteredParams).toString();
            const requestUrl = `${url}?${queryString}`;
        
            try {
                const response = await fetch(requestUrl);
                if (response.ok) {
                    const result = await response.json();
                    if (result.status === 'Sucesso') {
                        console.log("Registro atualizado com sucesso:", result.data);
                    } else {
                        console.log("Erro na atualização:", result.message);
                    }
                } else {
                    console.error("Erro:", response.status, await response.text());
                }
            } catch (error) {
                console.error("Erro ao realizar a requisição:", error);
            }
        }
        
        // Exemplo de atualização
        updateRecord("respiberry", 1, 0, 0, 0);
        alert('Você clicou no botão "frente planilha"!');
        // Adicione aqui o código que deseja executar para a ação "frente"
    } else if (acao === 're') {
        // Se o botão "re" for clicado
        alert('Você clicou no botão "re"!');
        // Adicione aqui o código que deseja executar para a ação "re"
    } else if (acao === 'esquerda') {
        // Se o botão "esquerda" for clicado
        alert('Você clicou no botão "esquerda"!');
        // Adicione aqui o código que deseja executar para a ação "esquerda"
    } else if (acao === 'direita') {
        // Se o botão "direita" for clicado
        alert('Você clicou no botão "direita"!');
        // Adicione aqui o código que deseja executar para a ação "direita"
    } 
    else {
        // Caso algum outro valor seja passado
        alert('Opção inválida!');
    }
}
