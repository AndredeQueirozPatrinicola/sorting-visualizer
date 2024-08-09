import { useState } from "react";
import { BarContainer } from "../../components/BarContainer/BarContainer";
import { Button } from "../../components/Button/Button";
import { SelectAlgo } from "../../components/SelectAlgo/SelectAlgo";
import './Home.css';
import { useSort } from "../../hooks/useSort";

export function Home() {
    const initialNumbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    const [numbers, setNumbers] = useState(initialNumbers);
    const [isSorting, setIsSorting] = useState(false);
    const [selectedAlgo, setSelectedAlgo] = useState('quicksort')
    const timeout = (delay: number) => new Promise(res => setTimeout(res, delay));
    const sort = () => {
        setIsSorting(true);
    };
    const changeAlgo = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedAlgo(e.target.value)
    }
    useSort(selectedAlgo, numbers, setNumbers, isSorting, setIsSorting, 1, timeout)
    return (
        <div className="home">
            <div className="navbar">
                <Button callback={sort} />
                <SelectAlgo callback={changeAlgo} />
            </div>
            <BarContainer numbers={numbers} />
        </div>
    );
}