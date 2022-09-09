import React, {useRef, useState, useEffect} from "react";

import './chatWindow.css'

import EmojiPicker from "emoji-picker-react";

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import NewChat from "../newchat/newchat";
import MensagensItem from "../MensagensCorpo/MensagensItem";


export default ({user}) => {

    const body = useRef()
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognitionResult || window.webkitSpeechRecognition;

    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [listening, setListening] = useState(false);
    const [lista, setLista] = useState([
        {author: 1, mensagem: "vamos na piscina hoje "},
        {author: 2, mensagem: "vamos!"},
        {author: 3, mensagem: "vou esperar voce aparecer"},
        {author: 1, mensagem: "vamos na piscina hoje "},
        {author: 2, mensagem: "vamos!"},
        {author: 3, mensagem: "vou esperar voce aparecer"},
        {author: 1, mensagem: "vamos na piscina hoje "},
        {author: 2, mensagem: "vamos!"},
        {author: 3, mensagem: "vou esperar voce aparecer"},
        {author: 1, mensagem: "vamos na piscina hoje "},
        {author: 2, mensagem: "vamos!"},
        {author: 3, mensagem: "vou esperar voce aparecer"},
        {author: 1, mensagem: "vamos na piscina hoje "},
        {author: 2, mensagem: "vamos!"},
        {author: 3, mensagem: "vou esperar voce aparecer"},
        {author: 1, mensagem: "vamos na piscina hoje "},
        {author: 2, mensagem: "vamos!"},
        {author: 3, mensagem: "vou esperar voce aparecer"},
    ]);

    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [lista]);


    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)

    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleMicClick = () => {
        if (recognition !== null) {

            recognition.onstart = () => {
                setListening(true)
            }

            recognition.onend = () => {
                setListening(false)
            }

            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }

            recognition.start()
        }

    }


    const handleSendClick = () => {

    }

    const [showNewChat, setShowNewChat] = useState(false);

    return (
        <div className={"chatWindow"}>
            <NewChat
                chatList={lista}
                user={user}
                show={showNewChat}
                setShow={setShowNewChat}
            />
            <div className={"chatWindow--header"}>
                <div className={"chatWindow--headerinfo"}>
                    <img className={"chatWindow--avatar"} src={"http://www.w3schools.com/howto/img_avatar2.png"}
                         alt={"imagem avatar"}/>
                    <div className={"chatWindow--name"}> Anderson Jhonatan dos Santos Ferreira</div>
                </div>

                <div className={"chatWindow--headerbtn"}>
                    <div className={"chatWindow--btn"}>
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>

                    <div className={"chatWindow--btn"}>
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>

                    <div className={"chatWindow--btn"}>
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>

            </div>
            <div ref={body} className={"chatWindow--body"}>
                {lista.map((item, key) => (
                    <MensagensItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}

            </div>

            <div className={"chatWindow--emojiarea"} style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker onEmojiClick={handleEmojiClick} disableSkinTonePicker disableSearchBar/>
            </div>

            <div className={"chatWindow--footer"}>
                <div className={"chatWindow--pre"}>
                    <div className={"chatWindow--btn"} onClick={handleCloseEmoji}
                         style={{width: emojiOpen ? '40px' : '0px'}}>
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>

                    <div className={"chatWindow--btn"}
                         onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}}/>
                    </div>
                </div>
                <div className={"chatWindow--inputarea"}>
                    <input className={"chatWindow--input"}
                           type={"text"}
                           placeholder={"Mensagem"}
                           value={text}
                           onChange={e => setText(e.target.value)}/>
                </div>
                <div className={"chatWindow--pos"}>
                    {text === '' &&
                        <div className={"chatWindow--btn"} onClick={handleMicClick}>
                            <MicIcon style={{color: listening ? '#126ECE' : '#919191'}}/>
                            <>{listening}</>
                        </div>
                    }

                    {text !== '' &&
                        <div className={"chatWindow--btn"} onClick={handleSendClick}>
                            <SendIcon style={{color: '#919191'}}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
