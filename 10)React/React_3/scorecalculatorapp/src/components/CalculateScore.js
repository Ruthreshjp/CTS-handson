import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => decimal.toFixed(2) + '%';
const calcScore = (total, goal) => percentToDecimal(total / goal);
export const CalculateScore = ({ Name, School, Total, Goal }) => {
    return (
    <div className = "formatstyle">
        <h1><font color = "Brown">Student Details</font></h1>
        <div className = "Name">
            <b> <span> Name: </span></b>
            <span>{Name}</span>
        </div>
        <div className = "School">
            <b> <span> School: </span></b>
            <span>{School}</span>   
        </div>
        <div className = "Total">
            <b> <span> Total: </span></b>
            <span>{Total}</span>
        </div>
        <div className = "Goal">
            <b> <span> Goal: </span></b>
            <span>{Goal}</span>
        </div>
        <div className = "Score">
            <b> <span> Score: </span></b>
            <span>{calcScore(Total, Goal)}</span>
        </div>
    </div>
)

}