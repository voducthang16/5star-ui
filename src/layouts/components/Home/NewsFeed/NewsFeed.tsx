import Image from '~/components/Image';
import {
    PublicIcon,
    AddImageIcon,
    VoteIcon,
    EmojiIcon,
    ScheduleIcon,
    DotsIcon,
    DotIcon,
    HeartIcon,
    CommentIcon,
    ShareIcon,
} from '~/components/Icons';
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

            {/* POST ITEM */}
            <div className="pb-8 space-y-4">
                <div className="w-120 m-auto text-base font-medium">
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
                        <div>
                            <Image
                                alt="POST"
                                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/294227974_647648743384701_384401695819382853_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=MrOnO2WnGgUAX_j7fNj&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT89zqf5knX6REBeFeVHar19xpKvKJpdaA1i2hazaa_5nQ&oe=62DB341F"
                            />
                        </div>
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
                                <span className="font-medium">Full Name</span> Kylian Mbappé is the FIFA cover star for
                                the third year in a row 🌟
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
                <div className="w-120 m-auto text-base font-medium">
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
                        <div>
                            <Image
                                alt="POST"
                                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/294227974_647648743384701_384401695819382853_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=MrOnO2WnGgUAX_j7fNj&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT89zqf5knX6REBeFeVHar19xpKvKJpdaA1i2hazaa_5nQ&oe=62DB341F"
                            />
                        </div>
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
                                <span className="font-medium">Full Name</span> Kylian Mbappé is the FIFA cover star for
                                the third year in a row 🌟
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
                <div className="w-120 m-auto text-base font-medium">
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
                        <div>
                            <Image
                                alt="POST"
                                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/294227974_647648743384701_384401695819382853_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=MrOnO2WnGgUAX_j7fNj&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT89zqf5knX6REBeFeVHar19xpKvKJpdaA1i2hazaa_5nQ&oe=62DB341F"
                            />
                        </div>
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
                                <span className="font-medium">Full Name</span> Kylian Mbappé is the FIFA cover star for
                                the third year in a row 🌟
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
            </div>
        </div>
    );
}

export default NewsFeed;
