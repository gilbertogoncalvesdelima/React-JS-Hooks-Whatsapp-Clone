import React from "react" // 55:42
import './ChatIntro.css'

//Aqui vai conter um iconezinho e um texto abaixo
const ChatIntro = () => {
 return (
      <div className="chatIntro"> {/* */}
      <img src="https://res.cloudinary.com/drimg72d1/image/upload/v1632622437/intro-connection-light.jpg" alt="" />
      <h1>Mantenha seu celular conectado</h1>
      <h2> O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/> Para reduzir o uso de dados, conecte seu telefone a uma rede WI-Fi.</h2> 
      
  </div>
);
}


  export default ChatIntro;

