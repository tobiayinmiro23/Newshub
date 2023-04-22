import React,{useState,useEffect,useContext} from 'react'
import Footer from './Footer'
import {contextWrapper} from './App'
const Entertainment = () => {
    let data=useContext(contextWrapper)
    const [country]=data
    const [result, setresult] = useState([])
    const [searching, setsearching] = useState(true)
    const [noResult, setnoResult] = useState(false)
    const [pagination, setpagination] = useState(false)
    const [page, setpage] = useState(1)
    const handleSearch=(e)=>{
        setpagination(false)
        setsearching(true)
        setresult([])
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&sortBy=relevancy&page=${page}&apiKey=${process.env.API_KEY}`)
            .then(res=>res.json())
            .then(res=>{
                if(res?.status !== 'ok' ){
                    alert(res?.message)
                }
                if(res?.articles?.length===0){
                    setpagination(false)
                    setsearching(false)
                    setnoResult(true)
                }else{
                    setresult([])
                    setsearching(false)
                    setresult(res?.articles)
                    setpagination(true)
                }
            })
            .catch(err=>alert(err))
        }
        useEffect(()=>{
            handleSearch()
        },[])
        useEffect(()=>{
            handleSearch()
        },[page])

        return (
            <div className='Business'>
                <h1 style={{borderBottom:'1px solid #d5d4d4',padding:"0.8rem",textAlign:"center"}}>Entertainment</h1>
                {noResult && <h1 className='noResult'>Oops, we could not find any result</h1>}
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
                        <button onClick={()=>{setpage(3)}}>3</button>
                        <button onClick={()=>{setpage(4)}}>4</button>
                    </div>
                }
              <Footer/>
        
            </div>
          )
}

export default Entertainment