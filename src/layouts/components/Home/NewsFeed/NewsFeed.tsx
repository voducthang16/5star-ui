import Image from '~/components/Image';
import { PublicIcon, AddImageIcon, VoteIcon, EmojiIcon, ScheduleIcon } from '~/components/Icons';
interface NewsFeedProps {
    className?: string;
}
function NewsFeed({ className }: NewsFeedProps) {
    return (
        <div className={className}>
            {/* POST */}
            <div className="w-120 m-auto">
                <div className="bg-white rounded-xl p-3">
                    <div className="flex">
                        <span>
                            <Image
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                alt="Avatar"
                                className="w-12 rounded-full border border-solid border-gray-200"
                            />
                        </span>
                        <div className="ml-4 flex-1">
                            {/* status */}
                            <div className="flex items-center h-12">
                                <h3 className="text-base text-gray-300">Bạn đang nghĩ gì thế? Name</h3>
                            </div>
                            {/* public, friend */}
                            <div className="text-sm font-medium pb-2 border-b border-solid border-gray-100">
                                <div className="inline-flex items-center p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                                    <PublicIcon width={20} height={20} className="fill-primary" />
                                    <span className="ml-1 text-primary">Công khai</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                {/* Add Image, Vote, Emoji, Schedule */}
                                <ul className="flex space-x-4">
                                    <li>
                                        <AddImageIcon width={24} height={24} className="fill-primary" />
                                    </li>
                                    <li>
                                        <VoteIcon width={24} height={24} className="fill-primary" />
                                    </li>
                                    <li>
                                        <EmojiIcon width={24} height={24} className="fill-primary" />
                                    </li>
                                    <li>
                                        <ScheduleIcon width={24} height={24} className="fill-primary" />
                                    </li>
                                </ul>
                                <div>
                                    <button className="btn btn-primary py-2 text-sm">Đăng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsFeed;
