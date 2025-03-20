import { Carousel } from '@mantine/carousel';
import {jobcategory} from "../../Data/Data";


const JobCategory=()=>{
    return(
        <div className="mt-10 pb-5 ">
            <div className="text-center mb-5  font-semibold text-4xl">Browse<span className='text-red-800'> Job</span> Category</div>
            <div className="text-lg mb-5 text-center w-2/3 mx-auto">Explore diverse job opportunites tailored to your skill. Start your Career journey today!</div>
            <Carousel className='[&_button]:!bg-gray-50 [&_button]:opacity-75 hover:[&_button]:opacity-100'  slideSize="22%" height={200} slideGap="md" controlSize={30} loop>
            {
                    jobcategory.map((category, index) => <Carousel.Slide key={index}> 
                        <div className="flex flex-col items-center bg-gray-200  rounded-xl justify-center p-2 w-72  hover:cursor-pointer hover:shadow-lg" key={index}>
                            <div className="p-2 rounded-full">
                                <img className='w-10 rounded-lg' src={`/img/avatar.png`} alt="" />
                            </div>
                            <div className=" text- font-semibold"> {category.name} </div>
                            
                            <div className="p-1 text-xs text-justify ">{category.description}</div>
                            <div className="p-1 text-sm text-red-800">{category.jobs} new job posted</div>
                        </div>
                    </Carousel.Slide>
                    )
                }
            </Carousel>
            
        </div>
    );
}
export default JobCategory;