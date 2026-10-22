export default function Input(
    {
        type="text",
        value="",
        name="",
        onChange,
        newClass=""
    }
){
    return(
        <>
            <input type={type} value={value} name={name} onChange={onChange} 
                className={`input  ${newClass}`}
            />
        </>
    )
}