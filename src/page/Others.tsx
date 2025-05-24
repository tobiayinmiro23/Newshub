import { useState, useEffect, useContext } from 'react'
import { SearchBar, Loader, Card, Footer } from '../AllFiles'
import { Category } from '../fetch'
import { useNavigate } from 'react-router-dom'
import { headerLink } from '../data/headerData'
import { appContext } from '../context'
import { resultI } from '../types'

function Others() {
    const navigate = useNavigate()
    const appData = useContext(appContext)
    const country = appData?.country
    const setpage = appData?.setpage

    const [error, seterror] = useState<boolean>(false)
    const [dataReady, setdataReady] = useState<boolean>(false)
    const [results, setresults] = useState<resultI | null>(null)
    const [loading, setloading] = useState<boolean>(false)
    const [noResult, setnoResult] = useState<boolean>(false)

    let pathname: string = window.location.pathname.split('/')[1]
    function getData() {
        let category: string = pathname.toLowerCase()
        appData?.setpage('')
        Category({ setloading, setdataReady, category, setnoResult, setresults, seterror, country, setpage })
    }

    useEffect(() => {
        const invalidRoute = headerLink.filter(item => item.displayName === pathname)
        if (invalidRoute.length === 0) navigate('/invalidRoute')
        else getData()
    }, [])

    return (
        <>
            <header className='text-[2rem] text-center py-[0.8rem] border-b-[1px] b-[#d5d4d4]'>{pathname}</header>
            <SearchBar />
            {loading && <Loader />}
            {dataReady && <Card results={results} />}
            {noResult && <h1 className='text-[2rem] mt-[2rem] mb-[14rem] text-center'>Oops, we could not find any result</h1>}
            {error && <h1 className='text-[2rem] mt-[2rem] mb-[14rem] text-center'>An error occured, please try again later</h1>}
            <Footer />
        </>
    )
}

export default Others