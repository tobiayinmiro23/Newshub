import { useContext, useState } from 'react'
import clock from '../assets/clock.png'
import LoadMoreBtn from './LoadMoreBtn'
import { appContext } from '../context'
import { cardI } from '../types'
import { LoadMore, LoadMoreWithCategory } from '../fetch'

const Card = ({ results }: cardI) => {
    const appData = useContext(appContext)
    const page = appData?.page
    const country = appData?.country
    const setpage = appData?.setpage

    const [loadMore, setloadMore] = useState<boolean>(false)
    const LoadMoreNews = () => {
        // to determine if the route is a category section like politics, science etc
        let path: string = window.location.pathname
        let noCategory: boolean = path === '/'
        // category name eg entertainment, sports etc
        let category: string = path.split('/')[1].toLowerCase()
        if (noCategory) LoadMore({ setloadMore, results, country, setpage, page })
        else if (path === '/search') LoadMore({ setloadMore, results, country, setpage, page })
        else LoadMoreWithCategory({ setloadMore, category, results, country, setpage, page })

    }

    return (
        <div>
            <div className="newsContainer mt-[2.4rem] flex items-start justify-center flex-wrap max-[795px]:block">
                {
                    results?.map(item => {
                        return <div className="news my-[2rem] mx-[1.5rem] w-[18rem] h-[fit-content] text-[black] max-[1009px]:m-[1rem] max-[964px]:w-[16rem] max-[912px]:w-[18rem] max-[912px]:mx-[1.5rem] max-[912px]:my-[1rem] max-[795px]:w-[90%] m-[auto] max-[795px]:px-[0rem] max-[795px]:my-[0rem] max-[795px]:py-[0.6rem] max-[541px]:px-[0rem] max-[359px]:w-[90%]" key={item?.link}>
                            <a href={item?.link} target='_blank' className='max-[795px]:flex max-[795px]:items-start max-[795px]:justify-center max-[795px]:border-b-[1px] max-[795px]:border-[d5d4d4] max-[795px]:pb-[1rem]'>
                                <div className="img w-[100%] h-[11rem] mb-[0.5rem] bg-[white] max-[795px]:w-[85%] max-[795px]:h-[11rem] max-[795px]:mb-[0rem] max-[675px]:w-[75%] max-[541px]:h-[10rem] max-[431px]:h-[9rem] max-[399px]:h-[8rem] max-[359px]:h-[7rem] "> <img style={{ border: "1px solid lightgray" }} src={item?.image_url === null ? '/image/newshub.jpeg' : item?.image_url} alt="" /> </div>
                                <div className='info max-[795px]:py-[0rem] max-[795px]:px-[0.35rem] max-[795px]:w-[100%] '>
                                    <div className="title"> <h3 className='text-[1.08rem] max-[795px]:text-[1.3rem] max-[541px]:text-[1.23rem] max-[431px]:text-[1.1rem] max-[399px]:text-[1rem] max-[359px]:text-[0.95rem]'>{item?.title}</h3></div>
                                    <div className='wrapper flex items-center justify-between py-[0rem] px-[0.2rem] max-[795px]:p-[0rem]  max-[431px]:w-[fit-content] max-[431px]:h-[min-content] max-[431px]:flex-col max-[431px]:items-start max-[431px]:mt-[0.3rem]'>
                                        <div className="time flex mt-[1rem] items-center max-[431px]:m-[0rem] max-[431px]:mr-[auto] ">
                                            <div className="img w-[0.7rem] h-[0.7rem]"><img src={clock} alt="clock" /></div>
                                            <p className='source text-end  text-[0.7rem] text-[black] max-[431px]:mt-[0rem]'>{item?.pubDate.split(' ')[0]}</p>
                                        </div>
                                        <p className='source text-[0.75rem] mt-[1rem] max-[431px]:mt-[0rem]'>{item?.source_id}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    })
                }
            </div>
            <div className='my-[2.5rem] text-center'>
                {
                    page !== '' &&
                    <div>
                        {
                            loadMore ?
                                <div className="round"></div>
                                :
                                <div onClick={LoadMoreNews}> <LoadMoreBtn /> </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Card