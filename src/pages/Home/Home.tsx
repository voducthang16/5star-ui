import { SidebarLeft, NewsFeed, SidebarRight } from '~/layouts/components/Home';
function Home() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:mx-auto xl:pt-6 relative">
                <SidebarLeft style={{ width: '280px', top: '88px' }} className="sticky float-left bg-transparent" />
                <NewsFeed className="float-left mx-auto px-8 bg-transparent space-y-4 w-192" />
                <SidebarRight style={{ width: '280px', top: '88px' }} className="sticky float-right bg-transparent" />
                <div className="clear-both"></div>
            </div>
        </div>
    );
}

export default Home;
