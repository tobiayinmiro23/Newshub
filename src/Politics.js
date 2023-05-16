import React,{useState,useEffect,useContext} from 'react'
import Footer from './Footer'
import {contextWrapper} from './App'
const Politics = () => {
    let data=useContext(contextWrapper)
    const [country]=data
    const [result, setresult] = useState([])
    const [noResult, setnoResult] = useState(false)
    const [pagination, setpagination] = useState(false)
    const [searching, setsearching] = useState(true)
    const [page, setpage] = useState('')
  
    const handleSearch=(e)=>{
        setnoResult(false)
        setsearching(true)
        fetch(`https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&category=politics&country=${country}&page=${page}`)
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
  
        useEffect(()=>{
            handleSearch()
        },[])
     

        return (
            <div className='Business'>
                <h1 style={{borderBottom:'1px solid #d5d4d4',padding:"0.8rem",textAlign:"center"}}>Politics</h1>
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
                                searching ?
                                <div className="round"></div> 
                                :
                                <button onClick={()=>{handleSearch()}}>Load more</button>
                            }
                        </div>
                        
                    }
                        </div>
                    }
              <Footer/>
        
            </div>
          )
}

export default Politics