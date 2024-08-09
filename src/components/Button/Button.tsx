import { SortButtonContract } from "../../types/ButtonContract"

export function Button({ callback }: SortButtonContract){
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        callback()
    }
    return (
        <button onClick={handleClick}>
            Sort!
        </button>
    )
}