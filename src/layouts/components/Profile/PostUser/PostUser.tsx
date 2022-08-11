import React from 'react';
import { CommentIcon, DotIcon, DotsIcon, EmojiIcon, HeartIcon, PublicIcon, ShareIcon } from '~/components/Icons';
import Status from '~/layouts/Status';

const PostUser = () => {
    return (
        <div className="post-user col-start-4 col-end-9 pb-10">
            <Status />
            {/* LIST POST OF USERS */}
            <div className="list-post-item mt-3">
                {[1, 2, 3].map((item) => (
                    <div className="w-140 m-auto text-base font-medium mt-4">
                        <div className="bg-white rounded-xl">
                            <div className="flex p-3">
                                <div></div>
                                <div className="ml-4 flex-1 flex flex-col justify-around">
                                    <h3 className="">Full Name</h3>
                                    <div className="flex items-center space-x-1 text-sm text-gray-400 font-thin">
                                        <h6>24 phút</h6>
                                        <div>
                                            <DotIcon width={14} height={14} className="fill-gray-400" />
                                        </div>
                                        <div>
                                            <PublicIcon width={14} height={14} className="fill-gray-400" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <DotsIcon width={24} height={24} />
                                </div>
                            </div>
                            <div></div>
                            <div className="px-3 pt-2">
                                <ul className="flex space-x-4">
                                    <li>
                                        <HeartIcon width={28} height={28} />
                                    </li>
                                    <li>
                                        <CommentIcon width={28} height={28} />
                                    </li>
                                    <li>
                                        <ShareIcon width={28} height={28} />
                                    </li>
                                </ul>
                                <h4>10,134 lượt thích</h4>
                            </div>
                            <div className="px-3 py-2 font-light text-sm space-y-2">
                                <p>
                                    <span className="font-medium">Full Name</span> Kylian Mbappé is the FIFA cover star
                                    for the third year in a row 🌟
                                </p>
                                {/* <p>
                               Cụ thể, ngày 6/7, Grab thông báo áp dụng phụ phí thời tiết nắng nóng gay gắt đối với nhiều
                               thành phố, tỉnh thành tùy theo từng dịch vụ Grab thu thêm 2.000 - 5.000 đồng.
                           </p>
                           <p>
                               Grab cho biết chính sách mới này được đưa ra nhằm hỗ trợ các tài xế thực hiện đơn hàng. Phụ
                               phí sẽ áp dụng cho từng đơn hàng trong chuyến xe, đồng thời được cộng trực tiếp vào giá cước
                               tại những thời điểm thời tiết nắng nóng gay gắt.
                           </p> */}
                            </div>
                            <div className="px-3 py-2 flex items-center border-t border-x-gray-500">
                                <span>
                                    <EmojiIcon width={24} height={24} />
                                </span>
                                <input
                                    type="text"
                                    className="input placeholder:font-thin"
                                    placeholder="Thêm bình luận..."
                                />
                                <button>Đăng</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostUser;
