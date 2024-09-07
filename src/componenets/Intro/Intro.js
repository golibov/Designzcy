import './intro.css'
import Introimg from '../../assets/images/intro-img.png'



function Intro() {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro-wrapper">
                    <div className="intro-wrap-left">
                        <h1>Smart Web
                            Design Agency</h1>
                            <p>We will provide best web design and business devlopment
                            service clients expectation and satisfaction guarantee.</p>
                           <button className="consultation">Free consultation</button>
                    </div>
                    <div className='intro-wrap-right'>
                          <img src={Introimg} alt="intro" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro