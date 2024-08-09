import { useEffect } from "react";


export function useSort(
    sortingAlgo: string,
    numbers: number[], 
    setNumbers: (numbers: number[]) => void, 
    isSorting: boolean,
    setIsSorting: (isSorting: boolean) => void, 
    timeoutValue: number,
    timeout: (number: number) => Promise<unknown>
) {
    useEffect(() => {
  
        const bubbleSort = async () => {
            let arr = [...numbers];
            let n = arr.length;
            let swapped;

            do {
                swapped = false;
                for (let i = 0; i < n - 1; i++) {
                    if (arr[i] > arr[i + 1]) {
                        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                        setNumbers([...arr]); 
                        swapped = true;
                        await timeout(timeoutValue); 
                    }
                }
                n--;
            } while (swapped);

            setIsSorting(false);
        };

        const quickSort = async (arr: number[], low: number, high: number) => {
            if (low < high) {
                let pi = await partition(arr, low, high);
                await quickSort(arr, low, pi - 1);
                await quickSort(arr, pi + 1, high);
            }
        };
    
        const partition = async (arr: number[], low: number, high: number) => {
            let pivot = arr[high];
            let i = low - 1;
    
            for (let j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    setNumbers([...arr]);
                    await timeout(timeoutValue);
                }
            }
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            setNumbers([...arr]);
            await timeout(timeoutValue);
            return i + 1;
        };

        const selectionSortAlgo = async () => {
            let arr = [...numbers];
            let n = arr.length;

            for (let i = 0; i < n - 1; i++) {
                let minIndex = i;
                for (let j = i + 1; j < n; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                if (minIndex !== i) {
                    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                    setNumbers([...arr]);
                    await timeout(timeoutValue);
                }
            }

            setIsSorting(false);
        };

        if (isSorting) {
            if(sortingAlgo === 'bubblesort'){
                bubbleSort()
            }
            else if(sortingAlgo === 'quicksort'){
                quickSort([...numbers], 0, numbers.length - 1).then(() => setIsSorting(false));
            } 
            else if (sortingAlgo === 'selectionsort') {
                selectionSortAlgo();
            }
            
        }
    }, [isSorting]);
}