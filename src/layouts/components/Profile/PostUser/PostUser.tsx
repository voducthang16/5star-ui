import React from 'react';
import { CommentIcon, DotIcon, DotsIcon, EmojiIcon, HeartIcon, PublicIcon, ShareIcon } from '~/components/Icons';
import Status from '~/layouts/Status';
import { PostService } from '~/services';
import Image from '~/components/Image';
import { useState, useEffect } from 'react';
interface PostUserProps {
    id: string;
}
const PostUser = ({ id }: PostUserProps) => {
    const name = localStorage.getItem('name');
    console.log(id);
    const [post, setPost] = useState([]);
    useEffect(() => {
        PostService.getUserPost(id).then((res) => {
            console.log(res);
            setPost(res.data);
        });
    }, []);
    return (
        <div className="post-user col-start-4 col-end-9 pb-10">
            <Status />
            {/* LIST POST OF USERS */}
            <div className="list-post-item mt-3">
                {post?.map((item: any, index) => (
                    <div key={index} className="w-140 m-auto text-base font-medium mt-4">
                        <div className="bg-white rounded-xl">
                            <div className="flex p-3">
                                <div>
                                    <Image
                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                        alt="Avatar"
                                        className="w-12 rounded-full border border-solid border-gray-200"
                                    />
                                </div>
                                <div className="ml-4 flex-1 flex flex-col justify-around">
                                    <h3 className="">{name}</h3>
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
                            <div
                                dangerouslySetInnerHTML={{ __html: item.text }}
                                className="px-3 py-2 font-light text-sm space-y-2"
                            ></div>
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
