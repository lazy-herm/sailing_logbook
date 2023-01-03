import Col from "react-bootstrap/Col";


const Voyage = (props) => {
    let content = [];
    props.data.harbours_visited && content.push(props.data.harbours_visited.join(" , "))
    props.data.event && content.push(props.data.event)
    props.data.role && content.push(props.data.role)
    props.data.max_wind_speed && content.push(props.data.max_wind_speed+'knt(s)')
    
    if (content.length < 1){
        content = 'Not Filled';
    }else{
        content = content.join(' - ');
    }

    return(<td className="text-capitalize"><Col>{content}</Col></td>)
    
}

export default Voyage;