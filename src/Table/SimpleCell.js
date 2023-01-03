import Col from "react-bootstrap/Col";


const SimpleCell = (props) => {
    
    let unit = null;
    if (props.data > 1 && props.unitPlural){
        unit = props.unitPlural;
    }else if (props.unit){
        unit = props.unit;
    }

    return(<td className="text-capitalize"><Col>{props.data} {unit && unit}</Col></td>)
    
}

export default SimpleCell;