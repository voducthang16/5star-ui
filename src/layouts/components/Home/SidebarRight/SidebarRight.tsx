import { useEffect, useRef } from 'react';
import { CakeIcon } from '~/components/Icons';
import Image from '~/components/Image';
interface SidebarRightProps {
    className?: string;
}

function SidebarRight({ className }: SidebarRightProps) {
    const scrollBar = useRef(null);

    useEffect(() => {
        const scrollBarElement = scrollBar.current as any;
        scrollBarElement.style.height = 'calc(100vh - 88px)';
    }, []);
    return (
        <div className={className}>
            <div ref={scrollBar} className="overflow-y-hidden overlay">
                {/* Birthday */}
                <div className="text-sm pb-4 border-b border-indigo-300 mr-3">
                    <h3 className="pl-2 mb-2 font-semibold text-stone-600">Sinh nhật</h3>
                    <div className="flex w-full">
                        <div
                            style={{ minWidth: '40px' }}
                            className="w-10 h-10 flex items-center justify-center rounded-full"
                        >
                            <CakeIcon width={24} height={24} />
                        </div>
                        <p className="ml-4">
                            <span className="font-semibold">Thang</span>, <span className="font-semibold">Phat</span>,{' '}
                            <span className="font-semibold">Nghi</span> và{' '}
                            <span className="font-semibold">2 người khác</span> có ngày sinh nhật hôm nay
                        </p>
                    </div>
                </div>

                {/* Accept Friend */}
                <div className="text-sm py-4 border-b border-indigo-300 mr-3">
                    <div className="flex justify-between">
                        <h3 className="pl-2 mb-2 font-semibold text-stone-600">Lời mời kết bạn</h3>
                        <h4 className="text-primary hover:cursor-pointer">Xem tất cả</h4>
                    </div>
                    <div className="flex w-full">
                        <div
                            style={{ minWidth: '40px' }}
                            className="w-10 h-10 flex items-center justify-center rounded-full"
                        >
                            <Image
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                alt="Avatar"
                                className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                            />
                        </div>
                        <div className="ml-4 w-full">
                            <h3 className="font-semibold mb-2">Full Name</h3>
                            <div className="flex space-x-2">
                                <button className="w-1/2 btn btn-primary px-3 py-2 text-sm">Xác nhận</button>
                                <button className="w-1/2 btn px-3 py-2 text-sm bg-gray-400 text-black">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contacts */}
                <div className="text-sm py-4 border-b border-indigo-300 mr-3">
                    <div className="flex justify-between">
                        <h3 className="pl-2 mb-2 font-semibold text-stone-600">Người liên hệ</h3>
                        <h4 className="text-primary hover:cursor-pointer">Icons</h4>
                    </div>
                    <ul>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Group Contacts */}
                <div className="text-sm py-4 border-b border-indigo-300 mr-3">
                    <div className="flex justify-between">
                        <h3 className="pl-2 mb-2 font-semibold text-stone-600">Cuộc trò chuyện nhóm</h3>
                        <h4 className="text-primary hover:cursor-pointer">Icons</h4>
                    </div>
                    <ul>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                        <li className="flex p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                            <div
                                style={{ minWidth: '40px' }}
                                className="w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <Image
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                    alt="Avatar"
                                    className="w-10 rounded-full border border-solid border-gray-200 object-contain"
                                />
                            </div>
                            <div className="flex items-center ml-4 font-medium">
                                <h3>Full Name</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarRight;
