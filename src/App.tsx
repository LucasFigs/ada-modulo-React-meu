import { useState } from "react";
import "./App.scss";
import CaixaItemRestaurante from "./components/CaixaItemRestaurante/CaixaItemRestaurante";
import CaixaRestaurante from './components/CaixaRestaurante/CaixaRestaurante';
import restaurantes from "./data/restaurantesAndItens.json";

function App() {

  const [restauranteEscolhido, definirRestauranteEscolhido] = useState("");

  function escolherRestaurante(restauranteEscolhido) {
    definirRestauranteEscolhido(restauranteEscolhido);
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <span>Boas vindas, [nome da pessoa]</span>
            <div className="shopping-cart">
              carrinho de compras
              <span className="badge">0</span>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <section>
          <h2>Restaurantes</h2>
          <ul className="grid" role="list">
            {restaurantes.map((restaurante) => (
            <button onClick={() => escolherRestaurante(restaurante)} >
              <CaixaRestaurante key={restaurante.nome} restaurante={restaurante} />
              </button>))}
            {/* <CaixaRestaurante restaurante={restauranteDonaFlorinda} /> */}
          </ul>
        </section>
        {restauranteEscolhido !== "" ? (
          <section>
          <h2>Itens do Restaurante {restauranteEscolhido.nome}</h2>
          <ul
            className="grid"
            role="list"
            style={{ "--max": "200px" } as React.CSSProperties}
          >
            <CaixaItemRestaurante 
            item={restauranteEscolhido.cardapio[0]}/>
            <CaixaItemRestaurante 
            item={restauranteEscolhido.cardapio[1]}/>
          </ul>
        </section>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App
