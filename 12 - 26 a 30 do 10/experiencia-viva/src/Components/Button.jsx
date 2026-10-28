const variants = {
    default: "bg-blue-400   p-2 rounded cursor-pointer shadow font-semibold",
    excluir: "bg-red-400  p-2 rounded cursor-pointer shadow font-semibold",
    editar: "bg-yellow-400  p-2 rounded cursor-pointer shadow font-semibold",
    custom: "p-2 rounded cursor-pointer shadow font-semibold",
}

export default function Button({
    children,
    variant = "default",
    newClass ="",
    onClick,
    title ="",
    textColor ="text-white"
}){
    return(
        <>
            <button onClick={onClick} className={`${variants[variant]} ${textColor} ${newClass}`}>
                {title}
                {children}
            </button>
        </>
    )
}