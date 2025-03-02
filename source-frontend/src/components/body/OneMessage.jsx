import { Card } from "react-bootstrap"

const OneMessage = (props) => {
    return (
        <div className={props.className} style={{borderRadius: "50px", width: "80%"}}>
            {props.timestamp}
            <p className="fw-bold">{props.username}</p>
            <p>{props.message}</p>
        </div>
    )
}

export default OneMessage;