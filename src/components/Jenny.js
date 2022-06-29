import Identity from "./Identity"

const Jenny = () => {

    const users = [
        { name: 'Vianney', firstName: 'Jenny', age: 34 },
        { name: 'Grandjean', firstName: 'Florian', age: 34 },
        { name: 'Gueguen', firstName: 'Marine', age: 26 },
        { name: 'Sparrow', firstName: 'Jack', age: 8 },
    ]

    return (
        <div>
            { 
                users.map((user, i) => {
                    return <Identity key={i} name={user.name} firstname={user.firstName} age={user.age} />
                }) 
            }
        </div>
    )
}



export default Jenny
