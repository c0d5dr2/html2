// Função para lidar com o clique nos botões
function funcaoDoJavaScript(acao) {
    if (acao === 'frente') {
        // Se o botão "frente" for clicado

        async function updateRecord(nome, direita = null, esquerda = null, frente = null, re = null) {
            const url = "https://script.google.com/macros/s/AKfycbw6kmCN_N102CkrnK-sg_lOOsWDgcTFjzeox0s4hkpo_LsJAL7CmJkempiVwmprP6yd/exec";
            
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
    } else {
        // Caso algum outro valor seja passado
        alert('Opção inválida!');
    }
}