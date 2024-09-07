import logo from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import "./header.css"


function Header(){
    return(
        <header className='site-header'>
        <div className='container'>
          <div className='header'>
            <a href='#'><img src={logo} alt='logo' /></a>

            <ul className='header-list'>
              <Navbar path={'/'} title={'Home'} />
              <Navbar path={'/service'} title={'Service'} />
              <Navbar path={'/Portfolio'} title={'Portfolio'} />
              <Navbar path={'/Blog'} title={'Blog'} />

            </ul>

            <Button title={'Contact us'} />
          </div>

        </div>

      </header>

    )
}

export default Header