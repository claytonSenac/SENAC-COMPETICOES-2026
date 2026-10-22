export default function Button(
    {
        text="Salvar", 
        bgColor="bg-blue-400",
        textColor="text-white",
        newClass="",
        onClick,
    }
){
    return(
        <>
            <button className={`font-semibold cursor-pointer p-2 rounded shadow ${textColor} ${bgColor} ${newClass}` } onClick={onClick}>
                {text}
            </button>
        </>
    )
}