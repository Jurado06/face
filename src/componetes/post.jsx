import { useState } from "react";
import comments from "./comments";
import listcomments from "./listcomments";
let Post = ()=> {
    let [likes, setlike] = useState(0);
    let [btncomments, setbtn] = useState(false)
    let showcomments = () => setbtn(!btncomments)
    let listcom = [
        {id: 1, Text:"me gusta"},
        {id: 2, Text:"hola"},
        
    ]
return(
    <div className="card" style={{"width":"18rem"}}>
        
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <img src={"https://www.bing.com/images/search?view=detailV2&ccid=CDwVpD%2fD&id=B174D35F52B88A33F150BF8AAA87ABB120B4DFB0&thid=OIP.CDwVpD_DT5iH9YtI05CBigHaEK&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f5d%2f4b%2f1e%2f5d4b1e671c7c21748b1a04a526c48609.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.083c15a43fc34f9887f58b48d390818a%3frik%3dsN%252b0ILGrh6qKvw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=Formula+1+Car&simid=608017041734832282&FORM=IRPRST&ck=79C4DDDAC2B3B58543587BAEC1035830&selectedIndex=32&itb=1"} className="card-img-top" alt="..."/>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-around"><span>{likes}</span> <span>no </span></li>
            <li className="list-group-item d-flex justify-content-around"><button className="btn btn-secondary"
            onClick={()=> setlike(likes+1)}
            >👍🏻like </button> 
            
            <button className="btn btn-secondary" onClick={showcomments}>💬comment</button> 
            </li>
            </ul>
            <div className="card-footer">
                {btncomments===true ? <comments/> : ""}
            </div>
            <listcomments listcomdt={listcom}/>
            
    </div>
);
};

export default Post

