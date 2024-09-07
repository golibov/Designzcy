

function Card({cardImg,cardImgName,title,pName,arrow,arrowName}) {
    return (
        <div className="cards">
            <div className="webDiv"><img className="web" src={cardImg} alt={cardImgName} /></div>
            <h3>{title}</h3>
            <p>{pName}</p>
            <div className="arrowDiv"><img className="arrow" src={arrow} alt={arrowName} /></div>
        </div>
    )
}

export default Card