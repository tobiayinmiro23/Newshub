import { useRef } from 'react'
import { headerLink } from '../data/headerData'
import menuImg from '../assets/icons8-menu-24.png'
import { Link } from 'react-router-dom'
const Header = () => {
    let menu = useRef<null | HTMLUListElement>(null)
    const Menu = () => {
        if (menu?.current) menu.current.classList.toggle('hamburgermenu')
    }
    return (
        <nav className='flex items-center justify-between px-[1.2rem] py-[0.7rem] border-b-[1px] b-[#d5d4d4]'>
            <div className="flex font-bold text-[2rem]">
                <h1>News</h1>
                <h1 style={{ color: 'blue' }}>HUB</h1>
            </div>
            <ul ref={menu} className='flex items-center ml-[auto] max-[795px]:absolute max-[795px]:transition-all-[1s] max-[795px]:top-[4.6rem] max-[795px]:w-[100%] max-[795px]:h-[100%] max-[795px]:overflow-y-auto max-[795px]:p-[0rem] max-[795px]:pb-[3rem] max-[795px]:block max-[795px]:text-center max-[795px]:bg-[white] max-[795px]:z-30 max-[795px]:left-[-100%]'>
                {
                    headerLink.map(item => {
                        return <li className='mx-[2rem] text-[1.1rem] hover:text-[blue] py-[0rem] cursor-pointer max-[1255px]:mx-[1.4rem] max-[1052px]:mx-[1.2rem] max-[964px]:mx-[0.8rem] max-[874px]:mx-[0.5rem] max-[795px]:my-[2.3rem]' key={item.id}><Link to={item.displayName}>{item.displayName}</Link></li>
                    })
                }
            </ul>
            <div onClick={Menu} className="hidden max-[795px]:block max-[795px]:mr-[1rem]">
                <img src={menuImg} alt="img" />
            </div>
        </nav>
    )
}

export default Header