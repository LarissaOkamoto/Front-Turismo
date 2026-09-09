import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import style from './styles.module.css'
import banner from "../../assets/banner.png"
import logo from "../../assets/logo.png"
import cadastrar_banner from "../../assets/cadastrar_banner.png";
import cards from "../../assets/cards.png";
import sptech from "../../assets/sptech.png";
import { Search } from "lucide-react";

function Home() {

    const [nomePesquisa, setNomePesquisa] = useState("");

    const navigate = useNavigate();

    function pesquisarDestino(event) {
    event.preventDefault();

    if (nomePesquisa.trim() === "") {
        navigate("/pontos-turisticos");
        return;
    }

    navigate(
        `/pontos-turisticos?nome=${encodeURIComponent(nomePesquisa)}`
    );
}

  return(
        <div className={style.container}>
            <div className={style.navbar}>
                <img src={logo} alt="Logo" className={style.logo}/>
                <div className={style.buttonsNavbar}>
                    <button onClick={() => navigate("/")} className={style.buttonNavbarAtivo}>
                        Início
                    </button>
                    <button
                        onClick={() => {
                            document
                                .getElementById("sobre")
                                .scrollIntoView({ behavior: "smooth" });
                        }}
                        className={style.buttonNavbar}
                    >
                        Sobre
                    </button>
                    <button onClick={() => navigate('/cadastro')} className={style.buttonNavbar}>
                        Cadastrar
                    </button>
                    <button onClick={() => navigate('/pontos-turisticos')} className={style.buttonNavbar}>
                        Destinos
                    </button>
                </div>
            </div>
            <div className ={style.banner}>
                <img src={banner} alt="Banner"/>
                <div className={style.textoBanner}>
                    <h1>Explore novos horizontes</h1>    
                    <p>Descubra, registre e compartilhe pontos turísticos incríveis. Sua próxima aventura começa aqui.</p>
                    <div className={style.barraPesquisa}>
                        <input
                            type="text"
                            placeholder="Busque por destino..."
                            value={nomePesquisa}
                            onChange={(e) => setNomePesquisa(e.target.value)}
                        />
                        <button onClick={pesquisarDestino}>
                            <Search size={20} className={style.search}/>
                        </button>
                    </div>
                </div>
            </div>
            <hr className={style.divisor} />
            <div className={style.sobre} id="sobre">
                <h1>Sobre o nosso Bucketlist</h1>
                <p>
                    Encontre lugares incríveis, descubra novos destinos e compartilhe suas experiências com outras pessoas!
                    <br/>
                    Aqui, você pode explorar uma lista de pontos turísticos cadastrados pela comunidade, conhecer um pouco mais sobre cada lugar e encontrar novas ideias para o seu próximo passeio.
                    Conhece um lugar especial que ainda não está por aqui? 
                    <br/>
                    Cadastre um novo ponto turístico e ajude outras pessoas a descobrirem também!
                    <br/><br/>
                    <b>Explore novos lugares. Compartilhe descobertas. Inspire novas experiências.</b>
                    <br/><br/>
                    <button onClick={() => navigate('/pontos-turisticos')} className={style.button}>
                        Ver destinos
                    </button>
                </p>
                <img src={cards} alt="Cards"/>
            </div>
            <hr className={style.divisor} />
            <div className={style.cadastro}>
                <img src={cadastrar_banner} alt="Cadastrar_banner"/>
                <div className={style.cadastroTexto}>
                    <h1>Compartilhe suas experiências</h1>
                    <p>Cadastre os pontos turísticos que você visitou e ajude outras pessoas a viverem novas histórias. </p>
                    <button onClick={() => navigate('/cadastro')} className={style.button}>
                        Cadastrar agora
                    </button>
                </div>
            </div>
            <hr className={style.divisor} />
            <div className={style.ListaPontosTuristicos}>
                
            </div>
            <div className={style.footer}>
                <div className={style.footerBody}>
                <h3>Nome</h3>
                <br/>
                <p>Análise e Desenvolvimento de Sistemas - 2ADSA</p>
                <b/>
                <p>Desenvolvido como projeto acadêmico. </p>
                </div>
                <img src={sptech} alt="Sptech"/>
            </div>
        </div>
  )

}

export default Home;
