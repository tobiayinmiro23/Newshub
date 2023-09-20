import React,{useRef ,useContext,useState} from 'react'
import {contextWrapper} from './App'

import './Search.css'
const Search = () => {
    let data=useContext(contextWrapper)
    const [country,setcountry,language, setlanguage]=data
    const [search, setsearch] = useState('')
    const [result, setresult] = useState([])
    const [page, setpage] = useState('')
    const [pagination, setpagination] = useState(false)
    const [noResult, setnoResult] = useState(false)
    const [searching, setsearching] = useState(false)
    const [loadMore, setloadMore] = useState(false)
    let inputField=useRef()
    const handleSearch=(e)=>{
            if(search.trim() === ''){
                inputField.current.focus()

            }else{
                setnoResult(false)
                setsearching(true)
                fetch(`https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&q=${search}&`)
                    .then(res=>res.json())
                    .then(res=>{
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
        }

        const LoadMore=(e)=>{
            setnoResult(false)
            setloadMore(true)
            fetch(`https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&country=${country}&page=${page}`)
                .then(res=>res.json())
                .then(res=>{
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
    
  return (
    <div className='Search'>
        <h1 style={{borderBottom:'1px solid #d5d4d4',padding:"0.8rem",textAlign:"center",marginBottom:'3rem'}}>Search</h1>
        <div className="search">
            <input type="text" ref={inputField} onInput={(e)=>setsearch(e.target.value)}/>
            <button onClick={(e)=>handleSearch(e)}>Get news</button>
        </div>
        {noResult && <h1>Ops, we could not find anhy result</h1>}
        {/* for loading animation */}
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
    </div>
  )
}

export default Search
