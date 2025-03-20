import { Link, useParams } from "react-router-dom";
import { timeAgo } from "../../Sercvices/Utilities";

const PostedJobCard=(props)=>{
    const {id}=useParams();
    return(
        <Link to={`/posted-job/${props.id}`} className={`bg-gray-100 p-2 border-l-2 border-red-700 rounded-xl ${props.id==id?"bg-red-200":"bg-gray-100"}`}>
            <div className="text-sm font-semibold">{props.jobTitle}</div>
            <div className="text-xs font-medium">{props.location}</div>
            <div className="text-xs">{props.jobStatus=="DRAFT"?"Drafted ":props.jobStatus=="CLOSED"?"Closed ":"Posted "} 
                {timeAgo(props.postTime)}</div>
        </Link>
    );
}
export default PostedJobCard;