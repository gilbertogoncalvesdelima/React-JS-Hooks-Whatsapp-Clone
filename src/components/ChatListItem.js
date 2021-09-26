import React from "react" // 55:42
import './ChatListItem.css'


    const ChatListItem = ({onClick, active, data}) => {
    return (

      <div 
      className= {`chatListItem ${active?'active':''}`}
      onClick={onClick}
      > {/*Esta div, vai pegar todo o item do chat */}
       <img className="chatListItem--avatar" src={data.image} alt=""/> {/*Imagem */}
       <div className="chatListItem--lines">
         <div className="chatListItem--line">
          <div className="chatListItem--name">{data.title}</div>  
          <div className="chatListItem--date"> 19:00</div>
         </div>
      <div className="chatListItem--line"> 
         <div className="chatListItem--lastMsg">
           <p>a live vai ficar gravada?a live vai ficar gravada? a live vai ficar gravada?</p>     
         </div>
      </div>
    </div>
  </div>
);
}


  export default ChatListItem;



  