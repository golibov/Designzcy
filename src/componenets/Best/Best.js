import Projects from '../../assets/images/projects.png'
import Active from '../../assets/images/active.png'
import Happy from '../../assets/images/happy.png'
import List from "../List/List"
import './best.css'


function Best() {
    return (
        <section className="best">
            <div className="container">
                <h2>We Provide the Best Web services</h2>
                <ul className="best-list">
                    <List title={Projects} imgName={'projects'} strongName={'5200+'} pName={'Projects completed'} />
                    <List title={Active} imgName={'active'} strongName={'500+'} pName={'Active clients'} />
                    <List title={Happy} imgName={'happy'} strongName={'4500+'} pName={'Happy clients'} />
                </ul>

            </div>
        </section>
    )
}

export default Best