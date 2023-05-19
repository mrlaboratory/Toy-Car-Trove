import { useEffect } from "react"


const useTitle = title => {
    useEffect(()=> {
        document.title = `Toy Car Trove || ${title}`
    },[title])
}

export default useTitle