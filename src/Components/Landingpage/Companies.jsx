import Marquee from "react-fast-marquee";
import {companies} from "../../Data/Data.jsx";

const Companies=()=>{
    return (
      <div className=' mt-10 pb-5'>
        <div className="text-center mb-5 font-semibold text-4xl">Trusted by <span className='text-red-800'>100+</span> Companies</div>
        <Marquee pauseOnHover={true}>
          
          {
            companies.map((company, index) => (
              <div className="px-5 py-5 hover:bg-slate-100 rounded-xl cursor-pointer" key={index}>
                <img className="w-20 " src={`/Companies/${company}.png`} alt={company} />
              </div>
            ))
          }

        </Marquee>
      </div>

    );
  }
export default Companies;