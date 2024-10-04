import React, { useState, useEffect } from "react";

function Citacao({ texto, autor }) {
  const [traducao, setTraducao] = useState("");

  // Resetar a tradução quando o texto da citação mudar
  useEffect(() => {
    setTraducao("");
  }, [texto]);


  return (
    <div>
      <blockquote className="blockquote">
        <p>{traducao ? traducao : texto}</p>
        <footer className="blockquote-footer">{autor}</footer>
      </blockquote>
    </div>
  );
}

export default Citacao;