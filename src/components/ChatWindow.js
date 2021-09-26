import React from "react" 
import EmojiPicker from 'emoji-picker-react'; // Importando os emoji
import './ChatWindow.css'

import SearchIcon from '@material-ui/icons/Search' // Botão de busca 
import AttachFileIcon from '@material-ui/icons/AttachFile' // Botão de arquivos
import MoreVertIcon from '@material-ui/icons/MoreVert' // Botão 3 pontinhos
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon' // Emoji
import CloseIcon from '@material-ui/icons/Close' // Botão Close
import SendIcon from '@material-ui/icons/Send' // Icone enviar
import MicroIcon from '@material-ui/icons/Mic' // Microfone


const ChatWindow = () => {
 return (
  <div className="chatWindow">
      <div className="chatWindow--header"> 
         
          <div className="chatWindow--headerinfo"> {/* Area de informação do usuário */}
          <img className="chatWindow--avatar" src="https://res.cloudinary.com/drimg72d1/image/upload/v1632590737/img_avatar.png" alt=""/>
          <div className="chatWindow--name">Gilberto Gonçalves</div>
      
    
    {/* Parte da direita aonde vai conter os botões */}
    <div className="chatWindow--headerbuttons">
   
    <div className="chatWindow--btn">
    <SearchIcon style={{color: '#919191'}} />
    </div>
    <div className="chatWindow--btn">
    <AttachFileIcon style={{color: '#919191'}} />
    </div>
    <div className="chatWindow--btn">
          <MoreVertIcon style={{color: '#919191'}} />
        </div>
      </div>
      </div>
    </div>
    <div className="chatWindow--body"> 

    </div>
    <div className="chatWindow--footer"> 

    <div className="chatWindow--pre"> 
   
    <div className="chatWindow--btn">
    <InsertEmoticonIcon style={{color: '#919191'}} />
    </div>

    <div className="chatWindow--btn">
    <InsertEmoticonIcon style={{color: '#919191'}} />
    </div>
    </div>

    <div className="chatWindow--inputarea">
      <input 
      className="chatWindow--input" 
      type="text" 
      placeholder="Digite uma mensagem"
      />

    </div>
    
    <div className="chatWindow--pos">
  
    <div className="chatWindow--btn">
    <SendIcon style={{color: '#919191'}} />
    </div>
   
    </div>
    </div>  
  </div>
    
  );
 }
export default ChatWindow