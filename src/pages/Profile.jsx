import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfilePost from '../components/ProfilePost';

const Profile = () => {
    return (
        <div>
            <Navbar/>
            <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse">
                <div className="flex flex-col md:w-[70%] w-full">
                 <ProfilePost/>
                </div>
                <div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Profile;