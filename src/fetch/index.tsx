import axios from "axios";
import { fetchI, loadMoreI, mappedresultI, categoryI, loadMoreWithCategoryI, searchI } from "../types";
const apiKey = import.meta.env.VITE_API_KEY;
export function Fetch({ setloading, setdataReady, setresults, setnoResult, seterror, country, setpage }: fetchI) {
    setloading(true)
    setdataReady(false)
    setresults(null)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://newsdata.io/api/1/news?apikey=${apiKey}f9&country=${country}`,
        // url: 'https://newsdata.io/api/1/news?apikey=' + apiKey + 'f9&country=' + country,
    };
    axios.request(options).then(res => {
        setloading(false)
        seterror(false)
        if (res?.data.status !== 'success') seterror(true)
        else if (res?.data.results?.length === 0) setnoResult(true)
        else {
            setresults(res?.data.results)
            if (setpage) setpage(res.data.nextPage)
            setdataReady(true)
        }
    }).catch(err => {
        console.log(err)
        seterror(true)
        setdataReady(false)
        setloading(false)
    })
}
export function Category({ setloading, setdataReady, setresults, setnoResult, seterror, country, setpage, category }: categoryI) {
    setloading(true)
    setdataReady(false)
    setresults(null)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&category=${category}&country=${country}`
    };
    axios.request(options).then(res => {
        setloading(false)
        seterror(false)
        if (res?.data.status !== 'success') seterror(true)
        else if (res?.data.results?.length === 0) setnoResult(true)
        else {
            setresults(res?.data.results)
            if (setpage) setpage(res.data.nextPage)
            setdataReady(true)
        }
    }).catch(err => {
        console.log(err)
        seterror(true)
        setdataReady(false)
        setloading(false)
    })
}

export function LoadMore({ setloadMore, results, country, setpage, page }: loadMoreI) {
    setloadMore(true)
    const options = {
        method: 'GET',
        url: `https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&country=${country}&page=${page}`
    };
    axios.request(options).then(res => {
        setloadMore(false)
        if (res?.data.status !== 'success') alert('an error occured')
        else if (res?.data.results?.length === 0) setloadMore(false)
        else {
            res?.data.results.map((item: mappedresultI) => {
                results?.push(item)
            })
            if (setpage) setpage(res.data.nextPage)
        }
    }).catch(err => {
        console.log(err)
        alert('an error occured')
        setloadMore(false)
    })
}
export function LoadMoreWithCategory({ setloadMore, results, country, setpage, page, category }: loadMoreWithCategoryI) {
    setloadMore(true)
    const options = {
        method: 'GET',
        url: `https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&category=${category}&country=${country}&page=${page}`
    };
    axios.request(options).then(res => {
        setloadMore(false)
        if (res?.data.status !== 'success') alert('an error occured')
        else if (res?.data.results?.length === 0) setloadMore(false)
        else {
            res?.data.results.map((item: mappedresultI) => {
                results?.push(item)
            })
            if (setpage) setpage(res.data.nextPage)
        }
    }).catch(err => {
        console.log(err)
        alert('an error occured')
        setloadMore(false)
    })
}
export function Search({ setloading, setdataReady, setresults, setnoResult, seterror, search, setpage }: searchI) {
    setloading(true)
    setdataReady(false)
    setresults(null)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&q=${search}&`
    };
    axios.request(options).then(res => {
        setloading(false)
        seterror(false)
        if (res?.data.status !== 'success') alert('an error occured')
        else if (res?.data.results?.length === 0) setnoResult(true)
        else {
            setresults(res?.data.results)
            if (setpage) setpage(res.data.nextPage)
            setdataReady(true)
        }
    }).catch(err => {
        console.log(err)
        seterror(true)
        setdataReady(false)
        setloading(false)
    })
}
