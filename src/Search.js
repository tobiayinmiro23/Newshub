import React,{useRef ,useEffect,useState} from 'react'
import './Search.css'
const Search = () => {
    const [search, setsearch] = useState('')
    const [result, setresult] = useState([])
    const [page, setpage] = useState(1)
    const [pagination, setpagination] = useState(false)
    const [searching, setsearching] = useState(false)
    const [sortOption, setsortOption] = useState('popularity')
    const [sort, setsort] = useState('sort by')
    let filter=useRef()
    const Filter=()=>{
        filter.current.classList.toggle('block')
    }
    const handleSearch=(e)=>{
        setsearching(true)
        setresult([])
        console.log(search)
       fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=${sortOption}&page=${page}&apiKey=${process.env.API_KEY}`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                setresult([])
                setsearching(false)
                setresult(res.articles)
                if(res.articles.length===0){
                    alert('no result')
                }else{
                    setpagination(true)
                }
            })
            .catch(err=>console.log(err))
        }
 
        const changeSort=(dt)=>{
            setsort(dt.target.innerText)
        }
        // useEffect(()=>{
        //     handleSearch()
        // },[page])
  return (
    <div className='Search'>
           <div className="options">
            <div className="filterWrapper">
                <div className="filterOptions" ref={filter}>
                        <p onClick={(e)=>{
                            changeSort(e)
                            setsortOption('popularity')
                        }}>Popular</p>
                        <p onClick={(e)=>{
                            changeSort(e)
                            setsortOption('relevancy')}
                            }>Related</p>
                        <p onClick={(e)=>{
                            changeSort(e)
                            setsortOption('publishedAt')
                            }}>Latest</p>
                </div>
                <div className="selected">
                    <p>{sort}</p>
                    <div className="selectedImg" onClick={Filter}><img src="/image/upload.png" alt="" /></div>
                </div>
            </div>
        </div>
        <div className="search">
            <input type="text" onInput={(e)=>setsearch(e.target.value)}/>
            <button onClick={(e)=>handleSearch(e)}>Get news</button>
        </div>
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
            <button onClick={()=>{setpage(5)}}>5</button>
        </div>
       }
    </div>
  )
}

export default Search