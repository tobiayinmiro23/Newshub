import { Sections, Programmess, AboutUs } from '../data/FooterData'
import fbImg from '../assets/facebook (2).png'
import twitterImg from '../assets/twitter (3).png'
import instagramImg from '../assets/instagram (4).png'
import linkedInImg from '../assets/linkedin (3).png'
import youtubeImg from '../assets/youtube (3).png'

const Footer = () => {
    return (
        <footer className='bg-[black] text-[white] pt-[2.5rem] pb-[4rem] max-[745px]:p-[2rem] max-[505px]:px-[1rem] max-[411px]:px-[0rem]'>
            <div className="footer-menu flex items-start justify-evenly max-[745px]:flex-wrap ">
                <div className="page-section max-[745px]:m-[3rem] max-[555px]:m-[2rem] max-[505px]:m-[1rem] max-[411px]:m-[1rem]">
                    <h2 className="text-[1.4rem] mb-[0.3rem] max-[411px]:text-[1.2rem]">Sections</h2>
                    <ul className="pl-[0rem]">
                        {
                            Sections.map((item) => <li className='text-[1.04rem] cursor-pointer hover:text-[#5f5ffe] my-[0.3rem] max-[795px]:text-[1rem] max-[411px]:text-[0.85rem]' key={item.id}>{item.name}</li>)
                        }
                    </ul>
                </div>
                <div className='max-[745px]:m-[3rem] max-[555px]:m-[2rem] max-[505px]:m-[1rem] max-[411px]:m-[1rem]'>
                    <h2 className="text-[1.4rem] mb-[0.3rem] max-[411px]:text-[1.2rem]">Programmess</h2>
                    <ul className="pl-[0rem]">
                        {
                            Programmess.map((item) => <li className='text-[1.04rem] cursor-pointer hover:text-[#5f5ffe] my-[0.3rem] max-[795px]:text-[1rem] max-[411px]:text-[0.85rem]' key={item.id}>{item.name}</li>)
                        }
                    </ul>
                </div>
                <div className="page-tv max-[745px]:m-[3rem] max-[555px]:m-[2rem] max-[505px]:m-[1rem] max-[411px]:m-[1rem]">
                    <div>
                        <h2 className="text-[1.4rem] mb-[0.3rem] max-[411px]:text-[1.2rem]">Apps</h2>
                        <ul className="">
                            <li className='text-[1.04rem] cursor-pointer hover:text-[#5f5ffe] my-[0.3rem] max-[795px]:text-[1rem] max-[411px]:text-[0.85rem] max-[305px]:text-[0.75rem]'> Download Android App</li>
                            <li className='text-[1.04rem] cursor-pointer hover:text-[#5f5ffe] my-[0.3rem] max-[795px]:text-[1rem] max-[411px]:text-[0.85rem] max-[305px]:text-[0.75rem]'> Download for iOS </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[1.4rem] mb-[0.3rem] max-[411px]:text-[1.2rem]">Social media</h2>
                        <ul className="flex items-center">
                            <div className="w-[1.7rem] h-[1.7rem] my-[0.6rem] mr-[0.5rem] max-[411px]:w-[1.25rem] max-[411px]:h-[1.25rem] max-[305px]:w-[1.05rem] max-[305px]:h-[1.05rem]"><img src={fbImg} alt="fb-img" /></div>
                            <div className="w-[1.7rem] h-[1.7rem] my-[0.6rem] mr-[0.5rem] max-[411px]:w-[1.25rem] max-[411px]:h-[1.25rem] max-[305px]:w-[1.05rem] max-[305px]:h-[1.05rem]"><img src={twitterImg} alt="x-img" /></div>
                            <div className="w-[1.7rem] h-[1.7rem] my-[0.6rem] mr-[0.5rem] max-[411px]:w-[1.25rem] max-[411px]:h-[1.25rem] max-[305px]:w-[1.05rem] max-[305px]:h-[1.05rem]"><img src={instagramImg} alt="insta-img" /></div>
                            <div className="w-[1.7rem] h-[1.7rem] my-[0.6rem] mr-[0.5rem] max-[411px]:w-[1.25rem] max-[411px]:h-[1.25rem] max-[305px]:w-[1.05rem] max-[305px]:h-[1.05rem]"><img src={linkedInImg} alt="linkedin-img" /></div>
                            <div className="w-[1.7rem] h-[1.7rem] my-[0.6rem] mr-[0.5rem] max-[411px]:w-[1.25rem] max-[411px]:h-[1.25rem] max-[305px]:w-[1.05rem] max-[305px]:h-[1.05rem]"><img src={youtubeImg} alt="youtube-img" /></div>
                        </ul>
                    </div>
                </div>
                <div className='max-[745px]:m-[3rem] max-[555px]:m-[2rem] max-[505px]:m-[1rem] max-[411px]:m-[1rem]'>
                    <h2 className="text-[1.4rem] mb-[0.3rem] max-[411px]:text-[1.2rem]">About us</h2>
                    <ul className="pl-[0rem]">
                        {
                            AboutUs.map((item) => <li className='text-[1.04rem] cursor-pointer hover:text-[#5f5ffe] my-[0.3rem] max-[795px]:text-[1rem] max-[411px]:text-[0.85rem]' key={item.id}>{item.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer