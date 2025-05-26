
import { useState, useContext } from 'react'
import { SearchBar, Loader, Card, Footer } from '../AllFiles'
import { Search } from '../fetch'
import { appContext } from '../context'
import { resultI } from '../types'

function Others() {
    const appData = useContext(appContext)
    const setpage = appData?.setpage

    const [error, seterror] = useState<boolean>(false)
    const [dataReady, setdataReady] = useState<boolean>(false)
    const [results, setresults] = useState<resultI | null>(null)
    const [loading, setloading] = useState<boolean>(false)
    const [noResult, setnoResult] = useState<boolean>(false)
    const [search, setsearch] = useState<string>('')

    let allowAutoFocus: boolean = true

    function searchNews() {
        appData?.setpage('')
        Search({ setloading, setdataReady, setnoResult, setresults, seterror, search, setpage })
    }


    return (
        <>
            <header><h1 className='border-b-[1px] text-[2rem] border-[d5d4d4] p-[0.8rem] text-center mb-[3rem]' >Search</h1></header>
            <SearchBar allowAutoFocus={allowAutoFocus} search={search} searchNews={searchNews} setsearch={setsearch} />
            {loading && <Loader />}
            {dataReady && <Card results={results} />}
            {noResult && <h1 className='text-[2rem] mt-[2rem] mb-[14rem] text-center'>Oops, we could not find any result</h1>}
            {error && <h1 className='text-[2rem] mt-[2rem] mb-[14rem] text-center'>An error occured, please try again later</h1>}
            <div className='mt-[8rem]'><Footer /></div>
        </>
    )
}

export default Others
