import { useState, useEffect } from "react"

export default (param = "all") => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/${param}`

        setIsLoading(true)
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setError(null)
            })
            .catch(err => {
                setData([])
                setError(err.message)
            })
            .finally(() => setIsLoading(false))

    }, [param])

    return { data, error, isLoading }

}