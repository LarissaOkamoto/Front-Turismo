import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.css";
import CardPontoTuristico from "../../componentes/CardPontoTuristico";

function ListaPontosTuristicos() {

    const navigate = useNavigate();

    const [pontosTuristicos, setPontosTuristicos] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);
    const [nome, setNome] = useState("");


    async function buscar() {

        setCarregando(true);
        setErro(null);

        try {

            const resposta = await fetch(
                "http://localhost:8080/pontosTuristicos"
            );

            if (!resposta.ok) {
                throw new Error(`Erro ${resposta.status}`);
            }

            const dados = await resposta.json();

            setPontosTuristicos(dados);

        } catch (e) {

            setErro(e.message);

        } finally {

            setCarregando(false);

        }
    }


    async function buscarPontoTuristico() {

        setCarregando(true);
        setErro(null);

        try {

            const resposta = await fetch(
                `http://localhost:8080/pontosTuristicos/pesquisa?nome=${nome}`
            );

            if (!resposta.ok) {
                throw new Error(`Erro ${resposta.status}`);
            }

            const dados = await resposta.json();

            setPontosTuristicos(dados);

        } catch (e) {

            setErro(e.message);

        } finally {

            setCarregando(false);

        }
    }


    useEffect(() => {
        buscar();
    }, []);


    return (
        <div className={style.container}>

            <button 
                onClick={() => navigate("/")}
                className={style.button}
            >
                Voltar para Página Inicial
            </button>


            <div className={style.pesquisa}>

                <input
                    type="text"
                    placeholder="Escreva o nome do ponto turístico que você deseja pesquisar"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <button
                    onClick={buscarPontoTuristico}
                    disabled={carregando}
                    className={style.button}
                >
                    Pesquisar
                </button>

            </div>


            {erro && <p>Erro: {erro}</p>}

            {carregando && <p>Carregando...</p>}


            <ul>
                {pontosTuristicos.map((p) => (
                    <CardPontoTuristico
                        key={p.id}
                        pontoTuristico={p}
                    />
                ))}
            </ul>

        </div>
    );
}

export default ListaPontosTuristicos;