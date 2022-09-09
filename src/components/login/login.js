import React from "react";

import Api from "../../Api";
import './login.css'

export default ({onReceive}) => {
    const faceBookLogin = async () => {
        let result = await Api.fbPopup();
        if (result) {
            onReceive(result.user)
        } else {
            alert("Erro!")
        }
    }
    return (
       <div className={"login"}>
           <button onClick={faceBookLogin}>Logar com o FaceBook</button>
       </div>
    );
}
