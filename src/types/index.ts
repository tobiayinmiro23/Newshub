export interface headerLinkI {
    id: number,
    displayName: string
}

export type resultI = [{
    pubDate: string,
    source_id: string,
    image_url: string
    link: string,
    title: string
}]

export interface mappedresultI {
    pubDate: string,
    source_id: string,
    image_url: string
    link: string,
    title: string
}
export interface cardI {
    results: resultI | null
}

export interface sectionsI {
    id: number,
    name: string
}
export interface generalContextI {
    countryFlag: string,
    country: string,
    page: string,
    setpage: React.Dispatch<React.SetStateAction<string>>,
    setcountryFlag: React.Dispatch<React.SetStateAction<string>>,
    setcountry: React.Dispatch<React.SetStateAction<string>>
}

export interface searchBarI {
    allowAutoFocus?: boolean
    search?: string
    searchNews?: () => void
    setsearch?: React.Dispatch<React.SetStateAction<string>>
}

export interface countryDetailsI {
    id: number,
    countryFlag: string,
    country: string
}

export interface fetchI {
    setloadMore?: React.Dispatch<React.SetStateAction<boolean>>
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setdataReady: React.Dispatch<React.SetStateAction<boolean>>
    setresults: (data: resultI | null) => void
    setnoResult: React.Dispatch<React.SetStateAction<boolean>>
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    country: string | undefined
    setpage: React.Dispatch<React.SetStateAction<string>> | undefined
    page?: string
}
export interface categoryI {
    category: string
    setloadMore?: React.Dispatch<React.SetStateAction<boolean>>
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setdataReady: React.Dispatch<React.SetStateAction<boolean>>
    setresults: (data: resultI | null) => void
    setnoResult: React.Dispatch<React.SetStateAction<boolean>>
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    country: string | undefined
    setpage: React.Dispatch<React.SetStateAction<string>> | undefined
    page?: string
}
export interface searchI {
    setloadMore?: React.Dispatch<React.SetStateAction<boolean>>
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setdataReady: React.Dispatch<React.SetStateAction<boolean>>
    setresults: (data: resultI | null) => void
    setnoResult: React.Dispatch<React.SetStateAction<boolean>>
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    search: string
    setpage: React.Dispatch<React.SetStateAction<string>> | undefined
    page?: string
}
export interface loadMoreI {
    setloadMore: React.Dispatch<React.SetStateAction<boolean>>
    country: string | undefined
    results: resultI | null
    setpage: React.Dispatch<React.SetStateAction<string>> | undefined
    page?: string
}
export interface loadMoreWithCategoryI {
    setloadMore: React.Dispatch<React.SetStateAction<boolean>>
    country: string | undefined
    category: string
    results: resultI | null
    setpage: React.Dispatch<React.SetStateAction<string>> | undefined
    page?: string
}
