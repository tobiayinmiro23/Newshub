import { useState, useEffect, useContext } from 'react'
import { Header, SearchBar, Loader, Card, Footer, Countries } from '../AllFiles'
import { Fetch } from '../fetch'
import { appContext } from '../context'
import { resultI } from '../types'

function Home() {
    const appData = useContext(appContext)
    const country = appData?.country
    const setpage = appData?.setpage
    const [error, seterror] = useState<boolean>(false)
    const [dataReady, setdataReady] = useState<boolean>(false)
    const [results, setresults] = useState<resultI | null>(null)
    const [loading, setloading] = useState<boolean>(false)
    const [noResult, setnoResult] = useState<boolean>(false)

    function getData() {
        appData?.setpage('')
        Fetch({ setloading, setdataReady, setnoResult, setresults, seterror, country, setpage })
    }

    useEffect(() => {
        appData?.setpage('')
        getData()
    }, [country])

    return (
        <>
            <Header />
            <Countries />
            <SearchBar />
            {loading && <Loader />}
            {dataReady && <Card results={results} />}
            {noResult && <h1 className='text-[2rem] mt-[2rem] mb-[14rem] text-center'>Oops, we could not find any result</h1>}
            {error && <h1 className='text-[2rem] mt-[2rem] mb-[14rem] text-center'>An error occured, please try again later</h1>}
            <Footer />
        </>
    )
}

export default Home