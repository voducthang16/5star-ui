import React from 'react';
import { Link } from 'react-router-dom';
import { MenuMoreIcon, MessageIcon, MessageMutipleIcon, SearchIcon } from '~/components/Icons';
import Image from '~/components/Image';

const Friends = () => {
    return (
        <div className="friends">
            <div className="row">
                <div className="friends-header card flex mt-3 p-[20px] justify-between items-center">
                    <div className="list-friend-title">
                        <h6 className="text-gray-500 font-medium">Danh sách bạn bè</h6>
                    </div>
                    <div className="form-search flex items-center">
                        <form>
                            <div className="form-search relative">
                                <input
                                    type="text"
                                    className="input-form outline-none px-2 text-base py-2 w-[240px]  bg-gray-200 shadow-sm rounded-xl overflow-hidden"
                                />
                                <div className="icon-search absolute right-[10px] top-[10px] border-l border-[#ccc] pl-2">
                                    <SearchIcon width={24} height={24} className="fill-gray-500" />
                                </div>
                            </div>
                        </form>
                        <div className="more-action mx-5">
                            <button className="btn bg-gray-200 rounded-md px-[0.4rem] py-[0.4rem]">
                                <Link to="">
                                    <MenuMoreIcon height={24} width={24} className="fill" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="friends-content container mt-5 pb-[20px]">
                <div className="row grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 6].map((items) => (
                        <div className="friend-item card w-full">
                            <div className="friend-header-thumb">
                                <Image
                                    alt="Image Friend Error"
                                    src="https://i.pinimg.com/736x/52/55/44/5255445017cd98fd66d7d589e6c10f58.jpg"
                                    className="w-full h-auto "
                                />
                            </div>
                            <div className="friend-content text-center relative">
                                <div className="more absolute right-[25px] top-[60px] cursor-pointer">
                                    <MenuMoreIcon height={24} width={24} className="fill-gray-200" />
                                </div>
                                <div className="friend-avatar">
                                    <div className="author-thumb h-[90px] w-[90px] m-auto mt-[-50px] border-2 border-[#ccc] truncate align-middle rounded-full bg-[#fff]">
                                        <Image alt="Avatar Error" src="" className="align-unset max-w-full h-auto" />
                                    </div>
                                    <div className="author-content mt-2">
                                        <h3 className="author-name text-base font-medium">Nguyễn Văn SSS</h3>
                                        <div className="country text-sm text-gray-500 mt-1">Ho Chi Minh City</div>
                                    </div>
                                </div>
                            </div>
                            <div className="friend-box pb-8">
                                <div className="friend-box-info mt-3">
                                    <ul className="text-sm flex justify-center gap-4 items-center">
                                        <li>
                                            <div className="box-item text-center">
                                                <div className="friend-count-item font-medium">52</div>
                                                <div className="friend-text-item text-xs text-gray-500">Bạn bè</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="box-item text-center">
                                                <div className="friend-count-item font-medium">100</div>
                                                <div className="friend-text-item text-xs text-gray-500">Bài viết</div>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="bg-primary px-3 py-3 rounded-full hover:bg-secondary transition duration-150">
                                                <MessageMutipleIcon
                                                    height={20}
                                                    width={20}
                                                    className="fill-[#fff] font-bold"
                                                />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Friends;
