import { useEffect } from "react"

// custom hooks for dynamic title 
const useTitle = title => {
    useEffect(()=> {
        document.title = `Toy Car Trove || ${title}`
    },[title])
}

export default useTitle