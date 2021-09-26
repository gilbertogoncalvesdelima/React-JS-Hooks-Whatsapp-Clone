import React,  { useState}  from "react"
import './App.css'

import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'

import DonutLargeIcon from '@material-ui/icons/DonutLarge'; // Icone do Status do WhatsApp
import ChatIcon from '@material-ui/icons/Chat'; // Icone novo chat
import MoreVertIcon from '@material-ui/icons/MoreVert'; // Icone 3 pontinhos
import SearchIcon from '@material-ui/icons/Search'; // Pesquisa


function App () {

  
 const [chatlist, setChatList] = useState([
 
  {chatId: 1, title: 'Fulano de Tal', image: 'https://res.cloudinary.com/drimg72d1/image/upload/v1632590737/img_avatar.png'}, 
  {chatId: 2, title: 'Fulano de Tal', image: 'https://res.cloudinary.com/drimg72d1/image/upload/v1632590737/img_avatar.png'},
  {chatId: 3, title: 'Fulano de Tal', image: 'https://res.cloudinary.com/drimg72d1/image/upload/v1632590737/img_avatar.png'},
  {chatId: 4, title: 'Fulano de Tal', image: 'https://res.cloudinary.com/drimg72d1/image/upload/v1632590737/img_avatar.png'}, 
]);  // Array vai começar vazio e 4 objetos vazios dentro da array, 4 itens 
 
 
 
 const [activeChat, setActiveChat] = useState({});

 return (
    <div className="app-window"> {/* Janela do Aplicativo */}
        <div className="sidebar"> {/* Lateral, esquerda  */}
          <header>
          <img className="header--avatar" src="https://res.cloudinary.com/drimg72d1/image/upload/v1632590737/img_avatar.png" alt=""/> {/* Imagem*/}
          <div className="header--buttons"> {/*Area dos botões*/}
         
          <div className="header--btn"> {/*Area do meu botão*/}
          <DonutLargeIcon style={{color: '#919191'}}/> {/*Quase todos os icones vai ter a mesma cor*/}
          </div>
          
          <div className="header--btn"> {/*Area do meu botão*/}
          <ChatIcon style={{color: '#919191'}}/> {/*Quase todos os icones vai ter a mesma cor*/}
          </div>

          <div className="header--btn"> {/*Area do meu botão*/}
          <MoreVertIcon style={{color: '#919191'}}/> {/*Quase todos os icones vai ter a mesma cor*/}
          </div>
          
          </div>
          </header>

          <div className="search"> {/* Area da busca*/}
          <div className="search--input"> {/* Dentro desta area vamos colocar o icone e o proprio campo*/}
          <SearchIcon fontSize="small" style={{color: '#919191'}}/>
          <input type="search" placeholder="Procurar ou começar uma nova conversa" /> {/* input type="search, quando escreve alguma coisa ele aparece um x, se fosse input type="text", o x some*/}
             </div>
          </div>
          {/*Lista das conversas, aonde vamos verificar os chat's*/}
          <div className="chatlist">  
          {/*Vamos fazer um loop, para demonstrar o resto das conversas */}
           {chatlist.map((item, key)=>(  
            <ChatListItem     
                 key={key}  
                 data={item}
                 Active={activeChat.chatId === chatlist[key].chatId} 
                 onClick={()=>setActiveChat(chatlist[key] )}
               />   
            ))}  
         </div>
        
       </div>  
       <div className="contentarea">  {/* Area do conteudo, conversa ou introdução */}
       {activeChat.chatId !== undefined && 
               <ChatWindow />
       }
       {activeChat.chatId !== undefined && 
               <ChatIntro />
       }
        </div>
    </div>  
    );
  }

export default App
