import { searchBarI } from '../types'
import { useRef } from 'react'
import { Link } from 'react-router-dom'


const SearchBar = ({ allowAutoFocus, searchNews, search, setsearch }: searchBarI) => {
    let focusInput = useRef<null | HTMLInputElement>(null)
    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setsearch) setsearch(e.target.value)
    }
    const handleSearch = () => {
        if (search === '') focusInput.current?.focus()
        else if (searchNews) searchNews()
    }
    return (
        <div className="w-[50%] cursor-pointer m-[auto] max-[1087px]:w-[70%] max-[912px]:w-[70%] max-[580px]:w-[80%] max-[416px]:w-[85%]">
            <Link to='/search'>
                <input ref={focusInput} autoFocus={allowAutoFocus} onChange={(e) => handleSearchInput(e)} className='focus:bg-[#f8f8fb] w-[85%] py-[0.6rem] px-[0.5rem] text-[1rem] rounded-l-lg cursor-pointer my-[1rem] outline-none border-[1px] b-[#d5d4d4] max-[912px]:w-[80%] max-[580px]:w-[75%] max-[416px]:w-[70%]' type="text" />
                <button onClick={handleSearch} className=' w-[15%] py-[0.65rem] px-[0rem] text-[1rem]  rounded-r-lg cursor-pointer outline-none border-none bg-[blue] font-bold text-[white] max-[912px]:w-[20%] max-[580px]:w-[25%] max-[416px]:w-[30%]'>Get news</button>
            </Link>
        </div>
    )
}

export default SearchBar
