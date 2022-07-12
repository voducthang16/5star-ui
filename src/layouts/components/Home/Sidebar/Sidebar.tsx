import Image from '~/components/Image';
import { UsersIcon, VideoCameraIcon, HistoryIcon, SavedIcon } from '~/components/Icons';
interface SidebarProps {
    className?: string;
}
function Sidebar({ className }: SidebarProps) {
    return (
        <div className={className}>
            <div>
                <ul className="text-sm pb-4 border-b border-indigo-300">
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <Image
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                            alt="Avatar"
                            className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                        />
                        <h3 className="ml-4 max-w-name truncate">Full Name</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full">
                            <UsersIcon width={24} height={24} fillColor1="fill-primary" fillColor2="fill-secondary" />
                        </span>
                        <h3 className="ml-4 max-w-name truncate">Friends</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full">
                            <VideoCameraIcon width={24} height={24} className="fill-primary" />
                        </span>
                        <h3 className="ml-4 max-w-name truncate">Watch</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full">
                            <HistoryIcon width={24} height={24} className="fill-primary" />
                        </span>
                        <h3 className="ml-4 max-w-name truncate">Kỷ niệm</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full">
                            <SavedIcon width={24} height={24} className="fill-primary" />
                        </span>
                        <h3 className="ml-4 max-w-name truncate">Đã lưu</h3>
                    </li>
                </ul>
                <ul className="py-4 text-sm">
                    <li className="pl-4">Lối tắt của bạn</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
