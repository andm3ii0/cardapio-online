import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const onHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setPage((event.target as HTMLElement).dataset.name as string);
  };

  return (
    <div>
      <header>
        <p className="header-option" data-name="menu" onClick={onHandleClick}>
          menu
        </p>
        <p
          className="header-option"
          data-name="inventario"
          onClick={onHandleClick}
        >
          inventario
        </p>
        <p
          className="header-option"
          data-name="pedidos"
          onClick={onHandleClick}
        >
          pedidos
        </p>
      </header>
      <div>{`Você está na tela de ${page}`}</div>
    </div>
  );
}

export default App;
