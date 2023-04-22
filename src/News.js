import React,{useState,useRef,useContext, useEffect} from 'react'
import { Link} from 'react-router-dom';

import './news.css'
import Footer from './Footer'
import {contextWrapper} from './App'
const News = () => {
    let data=useContext(contextWrapper)
    const [country,setcountry,language, setlanguage]=data
    const [search, setsearch] = useState('')
    const [result, setresult] = useState([])
    const [noResult, setnoResult] = useState(false)
    const [searching, setsearching] = useState(true)
    const [pagination, setpagination] = useState(false)
    const [page, setpage] = useState(1)
    const [countryFlag, setcountryFlag] = useState('/image/nigeria.png')

    let menu=useRef()
   let filter=useRef()
    const Menu=()=>{
        menu.current.classList.toggle('hamburgermenu')
    }
    const Filter=()=>{
        filter.current.classList.toggle('block')
    }

   const handleSearch=(e)=>{
    setpagination(false)
    setnoResult(false)
    setsearching(true)
    setresult([])
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&sortBy=relevancy&page=${page}&apiKey=${process.env.API_KEY}`)
        .then(res=>res.json())
        .then(res=>{
            if(res?.status !== 'ok' ){
                alert(res?.message)
            }
            if(res?.articles?.length===0){
                setsearching(false)
                setnoResult(true)
            }else{
                setresult([])
                setsearching(false)
                setresult(res?.articles)
                setpagination(true)
            }
          
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        handleSearch()
    },[])
    useEffect(()=>{
        handleSearch()
    },[page])
    useEffect(()=>{
        handleSearch()
    },[country])
    const changeImg=(dt)=>{
        setcountryFlag(dt.target.currentSrc.split('com')[1])
    }
  return (
    <div className="News">
        <nav>
            <div className="h1">
                <h1 onClick={()=>setlanguage('ru')}>News</h1>
                <h1 style={{color:'blue'}}>HUB</h1>
            </div>
                <ul ref={menu} >
                    <li><Link to='/business'>Business</Link></li>
                    <li><Link to='/entertainment'>Entertainment</Link></li>
                    <li><Link to='/technology'>Technology</Link></li>
                    <li><Link to='/health'>Health</Link></li>
                    <li><Link to='/science'>Science</Link></li>
                    <li><Link to='/sport'>Sport</Link></li>
                    <li>General</li> 
                </ul>
                <div className="menu" onClick={Menu}>
                    <img src="/image/icons8-menu-24.png" alt="img" />
                </div>
        </nav>
        <div className="options">
            <div className="filterWrapper">
                <div className="filterOptions" ref={filter}>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('us')
                            handleSearch()
                        }} src="/image/united-states-of-america.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('ng')
                            handleSearch()
                        }} src="/image/nigeria.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('za')
                            handleSearch()
                        }}  src="/image/south-africa.png" alt="" /></div >
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('ca')
                            handleSearch()
                        }}  src="/image/canada.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('cn')
                            handleSearch()
                        }} src="/image/china.png" alt="" /></div>
                        <div className="img"><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('fr')
                            handleSearch()
                        }}  src="/image/france.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('in')
                            handleSearch()
                        }}  src="/image/india.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('ru')
                            handleSearch()
                        }}  src="/image/russia.png" alt="" /></div>
                        <div className="img" ><img onClick={(e)=>{
                            changeImg(e)
                            setcountry('jp')
                            handleSearch()
                        }}  src="/image/japan.png" alt="" /></div>
                </div>
                <div className="selected">
                    <div className="img"><img src={countryFlag}alt="" /></div>
                    <div className="selectedImg" onClick={Filter}><img src="/image/upload.png" alt="" /></div>
                </div>
            </div>
        </div>
            <div className="search">
                <Link to='search'>
                <input type="text" onInput={(e)=>setsearch(e.target.value)}/>
                <button onClick={(e)=>handleSearch(e)}>Get news</button>
                 </Link>
            </div>
            {/* for the animation */}
            {noResult && <h1>Ops, we could not find anhy result</h1>}
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
     return <div className="news" key={item?.source?.id}>
                <a href={item?.url} target='_blank'>
                <div className="img"> <img style={{border: "1px solid lightgray"}} src={item?.urlToImage === null ? '/image/newshub.jpeg' : item?.urlToImage} alt="" /> </div>
                <div className='info'>
                    <div className="title"> <h3>{item?.title}</h3></div>
                    <div className='wrapper'>
                        <div className="time">
                            <div className="img"><img src="/image/clock.png" alt="" /></div>  
                            <p className='source'>{item?.publishedAt.split('T')[0]}</p>
                        </div>
                        <p className='source'>{item?.source?.name}</p>
                    </div>
                </div>
                </a>
            </div>
            })
           }
        </div>
        {
        pagination &&
        <div className="pagination">
            <button onClick={()=>{setpage(1)}}>1</button>
            <button onClick={()=>{setpage(2)}}>2</button>
        </div>
       }
      <Footer/>
    </div>
  )
}

export default News
