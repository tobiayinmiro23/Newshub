import { countryDetails } from '../data/countryDetails'
import { useContext } from 'react'
import { appContext } from '../context'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"

const Countries = () => {
    const appData = useContext(appContext)
    const countryFlag = appData?.countryFlag

    const changeImg = (countryFlag: any, countryName: any) => {
        appData?.setcountryFlag(countryFlag)
        appData?.setcountry(countryName)
    }
    return (
        <div className=' ml-[5rem] mt-[2rem] z-50 w-[fit-content] max-[580px]:ml-[2rem] max-[370px]:ml-[1.1rem]'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="w-[2.3rem] m-[auto] p-[0.3rem] cursor-pointer h-[2.3rem]" >
                        <img src={countryFlag} alt="" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {countryDetails.map(item => {
                        return <DropdownMenuItem key={item.id}>
                            <div className="w-[2.3rem] m-[auto] p-[0.3rem] cursor-pointer h-[2.3rem]" >
                                <img onClick={() => changeImg(item.countryFlag, item.country)} src={item.countryFlag} alt="" />
                            </div>
                        </DropdownMenuItem>
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Countries