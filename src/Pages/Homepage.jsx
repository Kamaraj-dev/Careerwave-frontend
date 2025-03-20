
import DreamJob from "../Components/Landingpage/DreamJob";
import Companies from "../Components/Landingpage/Companies"; 
import JobCategory from "../Components/Landingpage/JobCategory"; 
import Working from "../Components/Landingpage/Working" 
import Testimonial from "../Components/Landingpage/Testimonial";
import Subscribe from "../Components/Landingpage/Subscribe";




const Homepage=()=>{
    return(
        <div className="min-h-[100vh]">
            <DreamJob/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonial/>
            <Subscribe/>
        </div>
    );
}
export default Homepage;