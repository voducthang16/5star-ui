import Logo from '~/components/Logo';
import { HomeIcon, ChatIcon, NotificationIcon, UsersIcon, DownwardIcon } from '~/components/Icons';
import Search from '~/layouts/components/Search';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
function Header() {
    const id = localStorage.getItem('id');
    const name = localStorage.getItem('name');
    return (
        <header className="bg-white shadow-md fixed top-0 right-0 left-0 z-50">
            <div className="max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:m-auto grid grid-cols-11 h-16">
                <div className="col-start-1 col-end-6 flex items-center">
                    <span className="mr-2">{<Logo width={48} height={48} />}</span>
                    <Search
                        className="form-group rounded-full flex focus-within:ring-1 border border-solid border-gray-100 
                            focus-within:ring-offset-0 focus-within:ring-gray-300 flex-1"
                    />
                </div>
                <div className="col-start-7 col-end-12 flex items-center">
                    <ul className="col-start-11 col-end-13 flex items-center justify-around flex-1 text-base">
                        <Link to={`/profile/${id}`} className="flex items-center">
                            <Image
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                alt="Avatar"
                                className="w-12 rounded-full border border-solid border-gray-200"
                            />
                            <h3 className="ml-4 max-w-name truncate">{name}</h3>
                        </Link>
                        <li className="w-px h-6 bg-gray-300"></li>
                        <Link to={'/'} className="flex items-center">
                            <span className="icon-header">
                                <HomeIcon width={24} height={24} className={'fill-icon'} />
                            </span>
                        </Link>
                        <li>
                            <span className="icon-header relative">
                                <UsersIcon width={24} height={24} className={'fill-icon'} />
                                <span
                                    className="absolute -top-1 -right-4 bg-red-500 min-w-notification 
                                rounded-full p-1 text-xs text-white text-center"
                                >
                                    9
                                </span>
                            </span>
                        </li>
                        <li>
                            <span className="icon-header relative">
                                <ChatIcon width={24} height={24} className={'fill-icon'} />
                                <span
                                    className="absolute -top-1 -right-4 bg-red-500 min-w-notification 
                                rounded-full p-1 text-xs text-white text-center"
                                >
                                    99
                                </span>
                            </span>
                        </li>
                        <li>
                            <span className="icon-header relative">
                                <NotificationIcon width={24} height={24} className={'fill-icon'} />
                                <span
                                    className="absolute -top-1 -right-4 bg-red-500 min-w-notification 
                                rounded-full p-1 text-xs text-white text-center"
                                >
                                    99+
                                </span>
                            </span>
                        </li>
                        <li className="w-px h-6 bg-gray-300"></li>
                        <li>
                            <span className="icon-header">
                                <DownwardIcon width={24} height={24} className={'fill-icon'} />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
