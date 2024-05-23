import { useState } from "react"

let comments = ()=>{
    let [comment, setcomment] = useState("")
    let getcomment = (e)=>{
        setcomment(e.target.value)
    }
    return (
        <div className="comentarios">
            <textarea className="form-control" placeholder="comenta esta publicacion" value={comment} onChange={getcomment}>

            </textarea>
            <br />
            <button className="bnt btn-secondary">comentar </button>
        </div>
    )
}

export default comments