
function List({ title , imgName, strongName, pName, }) {
    return (
        <li className="list">
            <img src={title} alt={imgName} />
            
            <strong>{strongName}</strong>
            <p>{pName}</p>
        </li>
    )
}
export default List