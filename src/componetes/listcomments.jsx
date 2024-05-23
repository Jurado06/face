let listcomments = ({listcomdt})=>{
    return (
        <ul className="list-group list-group-flush">
            {
                listcomdt.map((list)=>(
                    <li key={list.id} className="list-group-item d-flex justify-content-around"> {this.Text} </li>
                ))
            }

            
        </ul>
    )
}

export default listcomments