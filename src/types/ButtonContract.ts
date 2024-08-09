export type SortButtonContract = {
    callback: () => void;
}

export type SortButtonContractEvent = {
    callback: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}