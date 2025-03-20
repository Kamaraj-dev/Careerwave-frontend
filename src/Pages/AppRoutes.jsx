import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Homepage from "./Homepage";
import FindJob from "./FindJob";
import FindTalent from "./FindTalent";
import JobDescribePage from "./JobDescribePage";
import CompanyPage from "./CompanyPage";
import PostJobPage from "./PostJobPage";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import ApplyJobPage from "./ApplyJobPage";
import TalentProfile from "./TalentProfile";
import SignUpPage from "./SignUpPage";
import ProfilePage from "./ProfilePage";
import { useSelector } from "react-redux";
import ProtectedRoute from "../Sercvices/ProtectedRoute";

const AppRoutes=()=>{
    const user=useSelector((state)=>state.user)
    return(
    <BrowserRouter>
                <div className='relative'>
                <Header/>

                <Routes>
                    <Route path='*' element={<Homepage />} />
                    <Route path='/find-job' element={user?<FindJob />:<Navigate to="/"/>} />
                    <Route path='/find-talent' element={user?<FindTalent />:<Navigate to="/"/>} />
                    <Route path='/jobs/:id' element={user?<JobDescribePage />:<Navigate to="/"/>} />
                    <Route path='/company/:name' element={user?<CompanyPage />:<Navigate to="/"/>} />
                    <Route path='/post-job/:id' element={user?<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage /></ProtectedRoute>:<Navigate to={"/"}/> } />
                    <Route path='/posted-job/:id' element={user?<ProtectedRoute allowedRoles={['EMPLOYER']}><PostedJobPage /> </ProtectedRoute>:<Navigate to={"/"}/>}/>
                    <Route path='/job-history' element={user?<ProtectedRoute allowedRoles={['APPLICANT']}><JobHistoryPage/></ProtectedRoute>:<Navigate to={"/"}/>} />
                    <Route path='/apply-job/:id' element={user?<ApplyJobPage />:<Navigate to="/"/>} />
                    <Route path='/talent-profile/:id' element={user?<TalentProfile />:<Navigate to="/"/>} />
                    <Route path='/signup' element={user?<Navigate to={"/"}/>:<SignUpPage/>} />
                    <Route path='/login' element={user?<Navigate to={"/"}/>:<SignUpPage/>} />
                    <Route path='/profile' element={user?<ProfilePage />:<Navigate to="/"/>} />
                </Routes>
                <Footer/>
                </div>
            </BrowserRouter>
    );
}
export default AppRoutes;