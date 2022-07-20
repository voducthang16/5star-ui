import { SidebarLeft, NewsFeed, SidebarRight } from '~/layouts/components/Home';
function Home() {
    return (
        <div className="bg-gray-100">
            <div
                className="max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:mx-auto xl:pt-6
                grid grid-cols-9"
            >
                <SidebarLeft className="col-start-1 col-end-3 bg-transparent" />
                <NewsFeed className="col-start-3 col-end-8 px-8 bg-transparent space-y-4" />
                <SidebarRight className="col-start-8 col-end-10 bg-transparent" />
            </div>
        </div>
    );
}

export default Home;
