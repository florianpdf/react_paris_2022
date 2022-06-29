import { useState } from "react"
import Identity from "./Identity"
import Form from "./Form"

const Robyn = () => {

    const [name, setName] = useState()
    const [firstname, setFirstname] = useState()
    const [age, setAge] = useState()

    return (
        <div>
            <Form value={name} setValue={setName} />
            <Form value={firstname} setValue={setFirstname} />
            <Form value={age} setValue={setAge} />

            <Identity name={name} firstname={firstname} age={age} school='WCS' town='Fontainebleau' />
            <p>Je suis Robyn</p>
        </div>
    )
}

export default Robyn
