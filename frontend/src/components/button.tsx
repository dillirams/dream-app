
interface ButtonProps{
    varient:"primary"|"secondary",
    text:string,
    size:"sm"|"md",
    onClick?:()=>void
}
const defaultStyle="flex justify-center rounded-xl text-white font-medium cursor-pointer"

const varientStyle={
    "primary":"bg-indigo-500 hover:bg-indigo-800",
    "secondary":"bg-gray-500 hover:bg-gray-800"
}

const sizeStyle={
    "sm":"px-3 py-1",
    "md":"px-4 py-3 w-full"
}

export function Button(props:ButtonProps){
    return <button onClick={props.onClick} className={`${varientStyle[props.varient]} ${sizeStyle[props.size]} ${defaultStyle}`}>{props.text}</button>
}