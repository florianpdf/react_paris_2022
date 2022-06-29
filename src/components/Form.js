const Form = props => {

    const onChange = (event) => {
        props.setValue(event.target.value)
    }

    return (
        <input 
            placeholder={`Your ${props.key}`}
            type='text'
            onChange={onChange}
            value={props.value}
        />
    )
}

export default Form
