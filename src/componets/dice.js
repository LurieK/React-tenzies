
function Dice (props) {


return (
    <div className={props.held? 'die-held' : 'die'}>
        <h2 className="die-num">{props.value}</h2>
    </div>

    )
}

export default Dice