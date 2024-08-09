import './BarContainer.css'
import { BarContainerContract } from '../../types/BarContainerContract'
import { Bar } from '../Bar/Bar'

export function BarContainer({ numbers }: BarContainerContract){
    return (
        <div className="bar-container">
            {
                numbers?.map((value, index) => {
                    return <Bar
                        key={index} 
                        number={value}
                    />
                })
            }
        </div>
    )
}