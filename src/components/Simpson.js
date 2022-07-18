// import axios from 'axios';

import { useEffect, useState } from "react"

const List = () => {

    const [datas, setDatas] = useState([])
    const [search, setSearch] = useState("")
    const [count, setCount] = useState(2)
    const [int, setInt] = useState(2)

    const req = async (val, count) => {
        await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}&character=${val}`)
            .then(res => res.json())
            .then(result => {
                setDatas(result)
            },
            (error) => console.log(error)
        )
    }

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onChangeNumber = (e) => {
        setCount(e.target.value)
    }

    const onChangeInt = (e) => {
        setInt(e.target.value)
    }

    useEffect(() => {
        console.log("plap")
    }, [])

    useEffect(() => {
        console.log("plopinette")
        return () => setSearch([])
    }, [])

    useEffect(() => {
        console.log("plop")
        req(search, count)
    }, [search, count])

    return (
        <div>
            <input type="text" value={search} onChange={onChange}/>
            <input type="number" value={count} onChange={onChangeNumber}/>
            <input type="number" value={int} onChange={onChangeInt}/>
            <ul>
                { datas.map((d, i) => (
                    <div key={i}>
                        <li>Quote: {d.quote}</li>
                        <li>character: {d.character}</li>
                        <li><img src={d.image} alt={d.character} width={50}/></li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default List
