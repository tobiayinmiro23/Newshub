import React,{useState,useRef,useContext,useEffect} from 'react'
import { Link} from 'react-router-dom';

import './news.css'
import Footer from './Footer'
import {contextWrapper} from './App'
const News = () => {
    let data=useContext(contextWrapper)
    const [country,setcountry,countryFlag, setcountryFlag]=data
    const [result, setresult] = useState([])
    const [noResult, setnoResult] = useState(false)
    const [searching, setsearching] = useState(true)
    const [loadMore, setloadMore] = useState(false)
    const [pagination, setpagination] = useState(false)
    const [page, setpage] = useState(0)
    let menu=useRef()
    const Menu=()=>{
        menu.current.classList.toggle('hamburgermenu')
    }
   const handleSearch=(e)=>{
    setnoResult(false)
    setsearching(true)
    fetch(`https://newsdata.io/api/1/news?apikey=${process.env.AUTHORIZATION_KEY}&country=${country}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res?.status !== 'success' ){
                alert(res?.message)
            }
            if(res?.results?.length===0){
                setsearching(false)
                setnoResult(true)
            }else{
                setsearching(false)
                res?.results.map(item=>{
                    setresult((a)=>[...a,item])
                  })    
                setpage(res.nextPage)
                setpagination(true)
            }
          
        })
        .catch(err=>console.log(err))
    }

    const LoadMore=(e)=>{
        setnoResult(false)
        setloadMore(true)
        fetch(`https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&country=${country}&page=${page}`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                if(res?.status !== 'success' ){
                    alert(res?.message)
                }
                if(res?.results?.length===0){
                    setloadMore(false)
                    setnoResult(true)
                }else{
                    setloadMore(false)
                    res?.results.map(item=>{
                        setresult((a)=>[...a,item])
                      })    
                    setpage(res.nextPage)
                    setpagination(true)
                }
            })
            .catch(err=>console.log(err))
        }

    useEffect(()=>{
        setresult([])
        setpagination(false)
        handleSearch()
    },[country])
    const changeImg=(dt)=>{
        setcountryFlag(dt.target.currentSrc.split('com')[1])
    }
  return (
    <div className="News">
        <nav>
            <div className="h1">
                <h1 onClick={()=>handleSearch()}>News</h1>
                <h1 style={{color:'blue'}}>HUB</h1>
            </div>
                <ul ref={menu} >
                    <li><Link to='/business'>Business</Link></li>
                    <li><Link to='/entertainment'>Entertainment</Link></li>
                    <li><Link to='/world'>World</Link></li>
                    <li><Link to='/politics'>Politics</Link></li>
                    <li><Link to='/science'>Science</Link></li>
                    <li><Link to='/sport'>Sport</Link></li>
                    <li><Link to='/health'>Health</Link></li>
                </ul>
                <div className="menu" onClick={Menu}>
                    <img src="/image/icons8-menu-24.png" alt="img" />
                </div>
        </nav>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" id='dropdownBtn' type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className="img"><img src={countryFlag} alt="" /></div>
            </button>
            <ul class="dropdown-menu" id='dropdownOptn'>
            <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('US')
                            // handleSearch()
                        }} src="/image/united-states-of-america.png" alt="" /></div>
                         <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('NG')
                        }} src="/image/nigeria.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('ZA')
                        }}  src="/image/south-africa.png" alt="" /></div >
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('CA')
                        }}  src="/image/canada.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('CN')
                        }} src="/image/china.png" alt="" /></div>
                        <div className="img"><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('FR')
                        }}  src="/image/france.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('IN')
                        }}  src="/image/india.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('RU')
                        }}  src="/image/russia.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('JP')
                        }}  src="/image/japan.png" alt="" /></div>
            </ul>
        </div>
            <div className="search">
                <Link to='/search'>
                <input type="text"/>
                <button>Get news</button>
                 </Link>
            </div>
            {/* for the animation */}
            {noResult && <h1>Ops, we could not find any result</h1>}
           {searching &&  <div className="LoadingAnimation">
                <div className='one'>
                    <div className='two'>
                        <div className="three">
                        </div>
                    </div>
                </div>
            </div>}
        <div className="newsContainer">
           {
            result?.map(item=>{
     return <div className="news" key={item?.link}>
                <a href={item?.link} target='_blank'>
                <div className="img"> <img style={{border: "1px solid lightgray"}}  src={item?.image_url === null ? '/image/newshub.jpeg' : item?.image_url} alt="" /> </div>
                <div className='info'>
                    <div className="title"> <h3>{item?.title}</h3></div>
                    <div className='wrapper'>
                        <div className="time">
                            <div className="img"><img src="/image/clock.png" alt="" /></div>  
                            <p className='source'>{item?.pubDate.split(' ')[0]}</p>
                        </div>
                        <p className='source'>{item?.source_id}</p>
                    </div>
                </div>
                </a>
            </div>
            })
           }
        </div>
        {
        page === null ?
        <div></div>
        :
        <div>
             {
        pagination &&
        <div className="pagination">
            {
                loadMore ?
                <div className="round"></div> 
                :
                <button onClick={()=>{LoadMore()}}>Load more</button>
            }
        </div>
        
       }
        </div>
       }
      <Footer/>
    </div>
  )
}

export default News
