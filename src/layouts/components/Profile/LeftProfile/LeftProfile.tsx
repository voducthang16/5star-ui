import React from 'react';

const LeftProfile = () => {
    return (
        <div className="left-profile col-start-1 col-end-4 w-full text-base max-h-[100%] h-fit">
            <div className="profile-intro card rounded-xl">
                <div className="profile-title border-b  p-[20px] pb-[14px]">
                    <h6 className="title text-base font-bold text-gray-500 ">Profile Intro</h6>
                    <div className="bio-text text-center text-gray-500 mt-4">Bio text Say hi !!!</div>
                </div>
                <div className="profile-content p-[20px]">
                    <ul className="personal-info-list text-gray-500">
                        <li>
                            Sống tại <b> Thành phố Hồ Chí Minh</b>
                        </li>
                        <li>Đã tham gia 2022</li>
                        <li>Đang hẹn hò</li>
                    </ul>
                </div>
            </div>
            <div className="profile-social-other card rounded-xl mt-4">
                <div className="profile-title border-b p-[20px] pb-[14px]">
                    <h6 className="title text-base font-bold text-gray-500">Other Social Network</h6>
                </div>
            </div>
        </div>
    );
};

export default LeftProfile;
