import React, {useState} from "react";
import './App.css';
import {DonutLargeOutlined, ChatOutlined, MoreVert, Search} from "@material-ui/icons";

import ChatListItem from "./components/chatListItem";
import ChatIntro from "./components/chatIntro"
import ChatWindow from "./components/chatintro/chatWindow";
import NewChat from "./components/newchat/newchat";
import Login from "./components/login/login"
import API from "./Api"

export default () => {

    const [chatList] = useState([
        {chatId: 1, title: "Anderson", imagem: "http://www.w3schools.com/howto/img_avatar2.png",},
        {chatId: 2, title: "Juliana", imagem: "http://www.w3schools.com/howto/img_avatar2.png",},
        {chatId: 3, title: "João", imagem: "http://www.w3schools.com/howto/img_avatar2.png",},
    ]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState(null);
    const [showNewChat, setShowNewChat] = useState(false);

     const handlesNewChat = () => {
        setShowNewChat(true)
    }

    const handleLoginData = async (u) => {

         console.log(u)

         let newUser = {
             "id": u.uid,
             "name": u.displayName,
             "avatar": u.photoURL,
         }
        await API.addUSer(newUser)
        setUser(newUser)
    }

    if (user === null ) {
        return (<Login onReceive={handleLoginData}/>)
    }

    return (
        <div className={"app-window"}>
            <div className={"sidebar"}>
                <NewChat
                    chatList={chatList}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />

                <header>
                    <img className="header--avatar" src={user.avatar} alt=""/>
                    <div className={"header--buttons"}>
                        <div className={"header--btn"}>
                            <DonutLargeOutlined style={{color: '#919191'}}/>

                        </div>
                        <div onClick={handlesNewChat} className={"header--btn"}>
                            <ChatOutlined style={{color: '#919191'}}/>

                        </div>
                        <div className={"header--btn"}>
                            <MoreVert style={{color: '#919191'}}/>

                        </div>
                    </div>
                </header>
                <div className={"search"}>
                    <div className={"search--input"}>
                        <Search fontSize={"small"} style={{color: '#919191'}}></Search>
                        <input type={"search"} placeholder={"Começar uma nova conversa"}/>
                    </div>
                </div>
                <div className={"chatlist"}>
                    {chatList.map((value, key) => (
                        <ChatListItem
                            key={key}
                            data={value}
                            active={activeChat.chatId === chatList[key].chatId}
                            onClick={() => setActiveChat(chatList[key])}
                        />
                    ))}
                </div>
            </div>
            <div className={"contentarea"}>
                {activeChat.chatId !== undefined &&
                    <ChatWindow
                    user={user}
                    />
                }
                {activeChat.chatId === undefined &&
                    <ChatIntro></ChatIntro>
                }
            </div>
        </div>
    );
}
