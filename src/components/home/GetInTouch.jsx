import React from "react";
import { useSelector } from 'react-redux'



const GetInTouch = ({ heading, message, email }) => {

  const setLanguage = useSelector((state) => state.estado.value)
    if (setLanguage === false) {
      heading = "Entre em contato"
      message = "Atualmente, estou em busca de oportunidades em tempo integral na área de Engenharia de Software ou Aprendizado de Máquina! Se você souber de alguma vaga disponível, tiver alguma pergunta ou simplesmente quiser dizer oi, sinta-se à vontade para me enviar um e-mail para"
    }

  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}: <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
