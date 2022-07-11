import Logo from '~/components/Logo';
import { HomeIcon, ChatIcon, NotificationIcon, UsersIcon, DownwardIcon } from '~/components/Icons';
import Search from '~/layouts/components/Search';
import Image from '~/components/Image';
function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:m-auto grid grid-cols-11 h-16">
                <div className="col-start-1 col-end-6 flex items-center">
                    <span className="mr-2">{<Logo width={48} height={48} />}</span>
                    {
                        <Search
                            className="form-group rounded-full flex focus-within:ring-1 border border-solid border-gray-100 
                            focus-within:ring-offset-0 focus-within:ring-gray-300 flex-1"
                        />
                    }
                </div>
                <div className="col-start-7 col-end-12 flex items-center">
                    <ul className="col-start-11 col-end-13 flex items-center justify-around flex-1 text-base">
                        <li className="flex items-center">
                            <Image
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                alt="Avatar"
                                className="w-12 rounded-full border border-solid border-gray-200"
                            />
                            <h3 className="ml-4">Name</h3>
                        </li>
                        <li className="w-px h-6 bg-gray-300"></li>
                        <li className="flex items-center">
                            {<HomeIcon width={30} height={30} className={'fill-primary'} />}
                            <span className="ml-4">Trang chủ</span>
                        </li>
                        <li className="w-px h-6 bg-gray-300"></li>
                        <li>{<UsersIcon width={30} height={30} className={'fill-primary'} />}</li>
                        <li>{<ChatIcon width={30} height={30} className={'fill-primary'} />}</li>
                        <li>{<NotificationIcon width={30} height={30} className={'fill-primary'} />}</li>
                        <li className="w-px h-6 bg-gray-300"></li>
                        <li>{<DownwardIcon width={30} height={30} className={'fill-primary'} />}</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
