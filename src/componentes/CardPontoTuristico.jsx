import style from './CardPontoTuristico.module.css'
import { Heart } from "lucide-react";
import { useState } from "react";


function CardPontoTuristico({pontoTuristico}){

    const{
        nome, 
        descricao, 
        cidade, 
        classificacao,
        gastoMedio,
        imagem
    } = pontoTuristico;
    
    function Curtidas(){
            const [curtidas, setCurtidas] = useState(0);
    
            return(
                <div className={style.curtidas}>
                    <button
                        onClick={() => setCurtidas(curtidas + 1)}
                        className={style.buttonCurtidas}
                    >
                        <Heart size={20} />
                    </button>
                    <br/>
                    <p>{curtidas} Curtidas</p>
                </div>
            );
    }

    return (
            <div className={style.card}>
                <div className={style.header}>
                    <h2>{nome}</h2>
                    <p>{cidade}</p>
                </div>
                <br/>
                <div className={style.foto}>
                {imagem && (
                    <img
                        src={imagem}
                        alt={`Ponto turístico ${nome}`}
                    />
                )}
                </div>
                <div className={style.body}>
                    <p>{descricao}</p>
                    <br/>
                    <p><b>Classificação:</b> {classificacao}</p>
                    <p><b>Gasto médio:</b> R$ {Number(gastoMedio).toFixed(2)}</p>
                    <br/>
                    <Curtidas/>
                </div>
            </div>
    )
}

export default CardPontoTuristico;