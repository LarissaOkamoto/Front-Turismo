function CardPontoTuristico({nome, descricao, cidade, classificacao, gastoMedio, imagem, curtidas}){
    
    function Curtidas(){
            const [curtidas, setCurtidas] = useState(0);
    
            return(
                <button onClick={() => setCurtidas (curtidas + 1)}>
                    Curtidas: {curtidas}
                </button>
            );
    }

    return (
        <div>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Cidade: {cidade}</p>
            <p>Classificação: {classificacao}</p>
            <p>Gasto médio: R$ {gastoMedio}</p>
            <p>{imagem}</p>
            <p>Curtidas: {curtidas}</p>
        </div>
    )
}

export default CardPontoTuristico;