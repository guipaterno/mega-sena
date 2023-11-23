
import React, { useState } from "react";

type Prop = {
    handleClickInternal: () => void;
};

const Bola: React.FC<Prop> = () => {
  const [sorteios, setSorteios] = useState<number[]>(Array(6).fill(0));

  const handleClickInternal = () => {
    const novosSorteios = sorteios.map(() => {
      const numeroAleatorio = Math.random() * 60;
      return Math.floor(numeroAleatorio);
    });

    setSorteios(novosSorteios);
    
  };

  



  return (
    <>
      <div className="container-secundario">
        <div className="container-sorteio">
          {sorteios.map((sorteio, index) => (
            <div key={index} className="bola">
              <span>{sorteio}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-botao">
        <button className="botao" onClick={handleClickInternal}>
          SORTEAR
        </button>
      </div>
    </>
   
  )
}

export default Bola