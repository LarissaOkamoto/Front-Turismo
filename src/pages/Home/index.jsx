import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import style from './styles.module.css'
import Cadastro from '../Cadastro';
import ListaPontosTuristicos from '../ListaPontosTuristicos';


function Home() {

    const navigateCadastro = useNavigate();
    const navigateListaPontosTuristicos = useNavigate();

  return(
        <div className={style.container}>
            <div className={style.titulo}>
            <h1>Bucketlist dos Pontos Turísticos</h1>    
            <h2>Descubra, compartilhe e explore novos lugares</h2>
            <p>
                Encontre lugares incríveis, descubra novos destinos e compartilhe suas experiências com outras pessoas!
                <br/>
                Aqui, você pode explorar uma lista de pontos turísticos cadastrados pela comunidade, conhecer um pouco mais sobre cada lugar e encontrar novas ideias para o seu próximo passeio.
                Conhece um lugar especial que ainda não está por aqui? 
                <br/>
                Cadastre um novo ponto turístico e ajude outras pessoas a descobrirem também!
                <br/><br/>
                <b>Explore novos lugares. Compartilhe descobertas. Inspire novas experiências.</b>
            </p>
            </div>
            <div className={style.cadastro}>
                <img/>
                <button onClick={() => navigateCadastro("/cadastro")} className={style.button}>
                Cadastrar um novo Ponto Turístico
                </button>
            </div>
            <div className={style.ListaPontosTuristicos}>
                <button onClick={() => navigateListaPontosTuristicos("/pontos-turisticos")} className={style.button}>
                Ver mais Pontos Turísticos
                </button>
            </div>
        </div>
  )

}

export default Home;
