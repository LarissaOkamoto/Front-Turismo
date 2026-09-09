import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPontoTuristico from "../../componentes/CardPontoTuristico";
import style from "./styles.module.css";
import logo from "../../assets/logo.png"
import { Search } from "lucide-react";

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
                `http://localhost:8080/pontosTuristicos/pesquisa?nome=${encodeURIComponent(nome)}`
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
            <div className={style.navbar}>
                            <img src={logo} alt="Logo" className={style.logo}/>
                            <div className={style.buttonsNavbar}>
                                <button onClick={() => navigate('/')} className={style.buttonNavbar}>
                                    Início
                                </button>
                                <button
                                    onClick={() => navigate('/#sobre')}
                                    className={style.buttonNavbar}
                                >
                                    Sobre
                                </button>
                                <button onClick={() => navigate('/cadastro')} className={style.buttonNavbar}>
                                    Cadastrar
                                </button>
                                <button onClick={() => navigate('/pontos-turisticos')} className={style.buttonNavbarAtivo}>
                                    Destinos
                                </button>
                            </div>
            </div>

            <div className={style.header}>                    
            <button 
                onClick={() => navigate('/')}
                className={style.button}
            >
                Voltar para Página Inicial
            </button>
            </div>                        

            <div className={style.barraPesquisa}>

                <input
                    type="text"
                    placeholder="Escreva o nome do ponto turístico que você deseja pesquisar"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <button
                    onClick={buscarPontoTuristico}
                    disabled={carregando}
                    className={style.buttonPesquisa}
                >
                    <Search size={20} className={style.search}/>
                </button>

            </div>


            <div className={style.destinos}>
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

        </div>
    );
}

export default ListaPontosTuristicos;