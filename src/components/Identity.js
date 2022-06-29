const Identity = ({ name, firstname, age, ...props }) => {
    
    console.log(props)

    return (
        <div>
            <p>My name is { name }.</p>
            <p>My firstname is { firstname }.</p>

            { age > 30 ? <p>Your are old!!!!!</p> :<p>Your are young!!!!!</p> }
            
        </div>
    )
}

export default Identity
