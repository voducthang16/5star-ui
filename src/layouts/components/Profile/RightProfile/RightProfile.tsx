import React from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

const RightProfile = () => {
    return (
        <div className="left-profile card rounded-xl col-start-9 col-end-12 w-full text-base max-h-[100%] h-fit">
            <div className="profile-intro">
                <div className="profile-title border-b  p-[20px] pb-[14px]">
                    <h6 className="title text-base font-bold text-gray-500 ">Last Photo</h6>
                </div>
                <div className="profile-content p-[20px]">
                    <ul className="personal-info-list text-gray-500 overflow-hidden">
                        {[1, 2, 3, 4, 5, 6].map((items) => (
                            <li className="w-1/3 p-2 overflow-hidden float-left">
                                <Link to="">
                                    <Image alt="Image" src="" className="w-full rounded-md block"></Image>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RightProfile;
