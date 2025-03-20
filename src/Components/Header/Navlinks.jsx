import { Link, useLocation } from 'react-router-dom'; 

const Navlinks = () => {
    const links = [
        { name: "Find Job", url: "/find-job" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Post Job", url: "/post-job/0" },
        { name: "Posted Job", url: "/posted-job/0" },
        { name: "Job History", url: "/job-history" },
    ];
    const location = useLocation();

    return (
        <div className="md:flex space-x-6 text-lg">
            {links.map((link, index) => (
                <div key={index}
                    className={`${location.pathname =="/"+link.url ? "text-red-800  border-red-800 border-t-2" : "text-black"}`}>
                    <Link to={link.url} key={index}>
                        {link.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Navlinks;
