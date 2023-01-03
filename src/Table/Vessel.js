


const Vessel = (props) => {
    return (<td className="text-capitalize">
        {props.data.vessel_type+' - '+props.data.vessel_length+props.data.vessel_length_unit+' - '+props.data.vessel_name}
    </td>)
}

export default Vessel;