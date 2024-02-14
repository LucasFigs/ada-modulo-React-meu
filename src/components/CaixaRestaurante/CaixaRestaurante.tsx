interface CaixaRestauranteProps {

}

function CaixaRestaurante(props: CaixaRestauranteProps) {

    const { 
        restaurante: { 
            nome, 
            avaliacao, 
            categoria, 
            tempo_de_entrega, 
            valor_entrega, 
            descricao, 
        },
     } = props;
    //   const { categoria, nome = "Padrão" } = props;
    //   const categoria = props.categoria;
    //   const nome = props.nome;

    return (
        <>
            <li className="restaurant-box">
                <h1>{nome}</h1>
                <div className="details">
                    <span className="small-details">{avaliacao}</span>
                    <span className="small-details">{categoria}</span>
                    <span className="small-details">{tempo_de_entrega}</span>
                    <span className="small-details">R${valor_entrega},00</span>
                </div>
                <p>
                    {descricao}
                </p>
            </li>
        </>
    );
}


export default CaixaRestaurante;