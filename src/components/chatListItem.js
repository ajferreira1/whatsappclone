import React from "react";
import './chatListItem.css'

export default ({onClick, active, data}) => {
    return (
        <div className={`chatListItem ${active?'active':''}`}
        onClick={onClick}
        >
            <img className={"chatListItem--avatar"} src={data.imagem} alt="era para ser uma imagem"/>
            <div className={"chatListItem--lines"}>
                <div className={"chatListItem--line"}>
                    <div className={"chatListItem--name"}>{data.title}</div>
                    <div className={"chatListItem--date"}>20:00</div>
                </div>
                <div className={"chatListItem--line"}>
                    <div className={"chatListItem--lastMsg"}>
                        <p>hoje a festa é no AP. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
