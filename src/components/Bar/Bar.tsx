import './Bar.css'
import { BarContract } from '../../types/BarContract'

export function Bar({ number }: BarContract){
    return (
        <div className="bar" style={{height: `${number}%`}}>
            
        </div>
    )
}