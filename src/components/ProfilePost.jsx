import React from 'react';

const ProfilePost = () => {
    return (
        <div className='w-full flex mt-8 space-x-4'>
            {/* left */}
            <div className='w-[35%] h-[200px] flex justify-center items-center'>
                <img src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1703672514~exp=1703673114~hmac=0dddd4064801704d680c092fcfdc306bb22d5e282239d9a69b4f55f3fb9e9c0a" alt="" className='w-full h-full object-cover' />
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbnTZs4YLKIt3eAelwShiBMKZtyWELWzlDg&usqp=CAU" alt="" className='' /> */}
            </div>
            {/* right */}
            <div className="flex flex-col w-[65%]">
                <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>10 Uses of Artificial Intelligence in day to day life. </h1>
                <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
                    <p>mdbaizedhasans@gmail.com</p>
                    <div className="flex space-x-2">
                        <p>16/06/2023</p>
                        <p>10:30</p>
                    </div>
                </div>
                <p className='sm:text-sm md:text-xl'>Prominent examples of AI sowftware used in every life include voice assistants.Prominent examples of AI sowftware used in every life include voice assistants.</p>
            </div>
        </div>
    );
};

export default ProfilePost;