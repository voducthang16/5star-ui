import { useEffect, useRef } from 'react';
import Image from '~/components/Image';
import { UsersIcon, ChatIcon, VideoCameraIcon, HistoryIcon, SavedIcon } from '~/components/Icons';
interface SidebarProps {
    className?: string;
}

function Sidebar({ className }: SidebarProps) {
    const scrollBar = useRef(null);

    useEffect(() => {
        const scrollBarElement = scrollBar.current as any;
        scrollBarElement.style.height = 'calc(100vh - 88px)';
    }, []);

    return (
        <div className={className}>
            <div ref={scrollBar} className="overflow-y-hidden hover:overflow-y-auto">
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
                        <h3 className="ml-4 max-w-name truncate">Bạn bè</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full">
                            <ChatIcon width={24} height={24} className="fill-primary" />
                        </span>
                        <h3 className="ml-4 max-w-name truncate">Tin nhắn</h3>
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
                    <li className="pl-4 mb-2 font-semibold text-stone-600">Lối tắt của bạn</li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="https://lienquan.garena.vn/kg/favicon/apple-icon-180x180.png"
                                alt="Avatar"
                                className="w-8 rounded-lg border border-solid border-gray-200 object-contain"
                            />
                        </span>
                        <h3 className="ml-4 truncate">Garena Liên Quân Mobile</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="https://pm1.narvii.com/6615/dd8bfadd018fadab1acd75027ee80ad7cb768d5b_00.jpg"
                                alt="Avatar"
                                className="w-8 rounded-lg border border-solid border-gray-200 object-contain"
                            />
                        </span>
                        <h3 className="ml-4 truncate">Dragon City</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRw0PD3-Krs1guegjKsWFZTTvk4OFZQuGblQA-ObTd4yUQYTxzsDSrvV_HsMdol1By10&usqp=CAU"
                                alt="Avatar"
                                className="w-8 rounded-lg border border-solid border-gray-200 object-contain"
                            />
                        </span>
                        <h3 className="ml-4 truncate">Candy Crush Saga</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.2081-6/32163690_1945579722422425_5247644664919490560_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=y96DUPnmDCwAX_a8Ip-&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT8rpMPI5F6IAws8uNMlxbax-3QekibFJR1S01F6jS8Uew&oe=62D28989"
                                alt="Avatar"
                                className="w-8 rounded-lg border border-solid border-gray-200 object-contain"
                            />
                        </span>
                        <h3 className="ml-4 truncate">Angry Bird</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.2081-6/55370045_662488887519429_9203686866002378752_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=mq7gflX1a1YAX-wckF5&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT-yYr9Ptzmg3kOHSICa_XQD1vxpFwnlrJQUS0iAEKqLxg&oe=62D3B1CF"
                                alt="Avatar"
                                className="w-8 rounded-lg border border-solid border-gray-200 object-contain"
                            />
                        </span>
                        <h3 className="ml-4 truncate">EverWing</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.2081-6/115803868_1632927190200218_7726110434222976102_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=GUjIvA9z4O8AX9WzHI1&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT_QCVVHgdRkiGl4Ttq8WqzK6WpBPW1dC34MN3VHeeMIjg&oe=62D25B98"
                                alt="Avatar"
                                className="w-8 rounded-lg border border-solid border-gray-200 object-contain"
                            />
                        </span>
                        <h3 className="ml-4 truncate">Cờ Caro</h3>
                    </li>
                    <li className="flex items-center w-full hover:bg-slate-200 p-1 transition-all rounded-lg cursor-pointer">
                        <span className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.2081-6/279672557_3166161906983452_1497681950955376450_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=Eb3sHKZSTf8AX8a2PsB&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT--IE_h6_o7NgTobiKfmb8OcqoggwKMGtVLw7d9yvoE5A&oe=62D29B98"
                                alt="Avatar"
                                className="w-8 rounded-lg border border-solid border-gray-200 object-contain"
                            />
                        </span>
                        <h3 className="ml-4 truncate">Uno</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
