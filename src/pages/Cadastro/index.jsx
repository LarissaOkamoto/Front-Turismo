import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import style from './styles.module.css'

function Cadastro(){
    const [nome, setNome] = useState("");
    const [cidade, setCidade] = useState("");
    const [descricao, setDescricao] = useState("");
    const [classificacao, setClassificacao] = useState("");
    const [gastoMedio, setGastoMedio] = useState(0.0);
    const [imagem, setImagem] = useState("");
    const [mensagem, setMensagem] = useState("");

    const navigate = useNavigate();
    const navigateListaPontosTuristicos = useNavigate();

    async function cadastrar(){
        const resposta = await fetch(
            "http://localhost:8080/pontosTuristicos",
                {
                    method: "POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify({nome: nome}, {cidade: cidade}, {descricao: descricao}, {classificacao: classificacao}, {gastoMedio: gastoMedio}, {curtidas: curtidas})
                }
        );

        if(!resposta.status(200)){
            setMensagem("Erro" + resposta.status);
            return;
        }

        const dados = await resposta.json();
        setMensagem(dados.mensagem);
    }

    return(
        <div>
            <div className={style.header}>
                <button 
                    onClick={() => navigate("/")}
                    className={style.button}
                >
                    Voltar para Página Inicial
                </button>
                <button 
                    onClick={() => navigateListaPontosTuristicos("/pontos-turisticos")}
                    className={style.button}
                >
                    Ver todos os Pontos Turísticos
                </button>
            </div>
            <div className={style.body}>
                Nome:
                <input  
                    type="text"
                    placeholder="Digite o nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <br/>
                Cidade:
                <input  
                    type="text"
                    placeholder="Digite a cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                />
                <br/>
                Descrição:
                <input  
                    type="text"
                    placeholder="Digite a descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <br/>
                Classificação:
                <input
                    type="text"
                    placeholder="Digite a classificação"
                    value={classificacao}
                    onChange={(e) => setClassificacao(e.target.value)}
                />
                <br/>
                Gasto médio:
                <input  
                    type="number"
                    placeholder="Digite o gasto médio"
                    value={gastoMedio}
                    onChange={(e) => setGastoMedio(e.target.value)}
                />
                <br/>
                URL da imagem:
                <input  
                    type="text"
                    placeholder="Coloque a url da imagem"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                />
                <br/>
                <button 
                    onClick={cadastrar}
                    className={style.button}
                >
                    Adicionar
                </button>
                <p>{mensagem}</p>
            </div>
        </div>
    )
}

export default Cadastro;