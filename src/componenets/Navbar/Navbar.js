

function Navbar({ title, path }) {
    return (
        <li className='header-item'>
            <a href={path}>{title}</a>
        </li>
    )
}

export default Navbar