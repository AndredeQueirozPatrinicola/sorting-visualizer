import { SortButtonContract } from "../../types/ButtonContract"

export function SelectAlgo({ callback }: SortButtonContract){
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        callback(e)
    }
    return (
        <select onChange={handleChange}>
            <option value={'quicksort'}>Quick Sort</option>
            <option value={'bubblesort'}>Bubble Sort</option>
            <option value={'selectionsort'}>Selection Sort</option>
        </select>
    )
}