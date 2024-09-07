import Card from "../Card/Card"
import webSite from '../../assets/images/website.svg'
import webDevelopment from '../../assets/images/code-square.svg'
import webappilication from '../../assets/images/webappilication.svg'
import arrow from '../../assets/images/arrow.svg'
import './service.css'

function Service() {
    return (
        <section className="service">
            <div className="container">
                <div className="service-wrap">
                    <h2>What Service We’re Offering
                    </h2>
                    <div className="card-wrap">
                        <Card cardImg={webSite} cardImgName={'website'} title={'Website design'} pName={'Need something changed or is there something not quite working  the  best service'} arrow={arrow} arrowName={'arrow'} />
                        <Card cardImg={webDevelopment} cardImgName={'webdevelopment'} title={'Web development'} pName={'Need something changed or is there something not quite working  the  best service'} arrow={arrow} arrowName={'arrow'} />
                        <Card cardImg={webappilication} cardImgName={'webappilication'} title={'Web application'} pName={'Need something changed or is there something not quite working  the  best service'} arrow={arrow} arrowName={'arrow'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Service