import { AddFriendIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';

const HeaderThumb = () => {
    const name = localStorage.getItem('name');
    return (
        <div>
            <div className="top-header relative">
                <div className="cover-image">
                    <Image
                        src="https://i.pinimg.com/736x/17/08/9f/17089f4c221d8a8d19371546cf706fa0--twitter-cover-cover-pics.jpg"
                        alt="Photo Image Not Found"
                        className="h-[300px] rounded-tl-md rounded-tr-md w-full"
                    />
                </div>
                <div className="profile-section card py-[40px] px-[40px] relative">
                    <div className="row grid grid-cols-11 profile-menu">
                        <div className="left col-start-1 col-end-5 text-base font-semibold text-gray-500 w-full">
                            <ul className="profile-menu-list flex justify-evenly items-center">
                                <li className="profile-menu-item menu-hover ">Posts</li>
                                <li className="profile-menu-item menu-hover ">About</li>
                                <li className="profile-menu-item menu-hover ">Friends</li>
                            </ul>
                        </div>
                        <div className="right col-start-8 col-end-12 text-base font-semibold text-gray-500 w-full">
                            <ul className="profile-menu-list flex justify-evenly items-center">
                                <li className="profile-menu-item menu-hover ">Posts</li>
                                <li className="profile-menu-item menu-hover ">About</li>
                                <li className="profile-menu-item menu-hover ">Friends</li>
                            </ul>
                        </div>
                    </div>
                    <div className="control-block-button absolute right-[100px] top-[-18px] text-base">
                        <button className="btn-primary px-5 py-2 rounded-xl text-white font-semibold">
                            <AddFriendIcon height={18} width={18} className="fill-[#fff] inline-block mr-1" />
                            Kết bạn
                        </button>
                        <button className="bg-gray-300 px-5 py-2 ml-3 rounded-xl text-black font-semibold hover:bg-gray-200 transition duration-200">
                            <MessageIcon height={18} width={18} className="fill-[#000] inline-block mr-1" />
                            Nhắn tin
                        </button>
                    </div>
                </div>
                <div className="profile-author absolute left-[50%] translate-x-[-50%] bottom-[15px] text-center">
                    <div className="author-avatar rounded-full height-[132px] w-[132px] border-4 border-[#ccc] truncate align-middle m-auto bg-[#fff]">
                        <Image
                            alt="No Images"
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                            className="align-unset max-w-full h-auto"
                        />
                    </div>
                    <div className="author-content">
                        <h4 className="author-name font-bold text-center text-gray-600">{name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderThumb;
