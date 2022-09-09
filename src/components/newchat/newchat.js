import React, {useState} from "react";
import './newchat.css'

import {ArrowBack} from "@material-ui/icons";


export default ({chatList, user, show, setShow}) => {
    const [list, setList] = useState([
        {id: 1, avatar: 'http://www.w3schools.com/howto/img_avatar2.png', name: "Anderson Jhonatan"},
        {id: 2, avatar: 'http://www.w3schools.com/howto/img_avatar2.png', name: "João Antonio"},
        {id: 3, avatar: 'http://www.w3schools.com/howto/img_avatar2.png', name: "Juliana Helena"},
        {id: 4, avatar: 'http://www.w3schools.com/howto/img_avatar2.png', name: "Vinicius da Cruz Ferreira"}
    ]);

    const handlesClose = () => {
        setShow(false);
    }

    return (
        <div className={"newchat"} style={{left: show ? 0: -415}}>
            <div className={"newchat-header"}>
                <div className={"newchat--backbutton"} onClick={handlesClose}>
                    <ArrowBack/>
                </div>
                <div className={"newchat--headtitle"}>
                    Nova conversa
                </div>
            </div>
            <div className={"newchat--list"}>
                {list.map((item, key) => (
                    <div className={"newchat--item"} key={key}>
                        <img className={"newchat--itemavatar"} src={item.avatar} alt={'imagem avatar'}/>
                        <div className={"newchat--itemname"}>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
