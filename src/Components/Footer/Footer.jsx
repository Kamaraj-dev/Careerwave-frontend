import { IconBrandTwitter, IconBrandFacebook, IconBrandLinkedin } from "@tabler/icons-react";
import { footerLinks } from "../../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location=useLocation();
  return ( location.pathname!="/signup" && location.pathname!="/login"?
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
  
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-white mb-4">CareerWave</div>
              <div className="text-sm sm:text-base">
                Your one-stop destination to find your dream job and kickstart your career.
              </div>
            </div>
            
                {
                    footerLinks.map((item, index) => 
                    <div key={index} className="ml-2" >
                        <div className="text-lg font-semibold text-white mb-4">{item.title}</div>
                        <ul className="space-y-2 text-sm ">
                        {
                            item.link.map((links, index) =>
                                <li key={index} className="hover:translate-x-2 transition duration-300 ease-in-out"><a href="" className="hover:text-red-500 ">{links}</a></li>
                            )
                        }
                        </ul>
                    </div>
                    )
                }
          </div>
  

          <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} CareerWave. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <IconBrandFacebook alt="Facebook" className="h-6 w-6 hover:opacity-80" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <IconBrandTwitter alt="Twitter" className="h-6 w-6 hover:opacity-80" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <IconBrandLinkedin alt="LinkedIn" className="h-6 w-6 hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </footer>:<></>
    );
  };
  
  export default Footer;

