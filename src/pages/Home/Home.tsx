import { Sidebar, NewsFeed } from '~/layouts/components/Home';
function Home() {
    return (
        <div className="bg-gray-100">
            <div
                className="max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:mx-auto xl:pt-6
                grid grid-cols-10"
            >
                <Sidebar className="col-start-1 col-end-3 bg-transparent" />
                <NewsFeed className="col-start-3 col-end-9 px-8 bg-transparent" />
                <Sidebar className="col-start-9 col-end-11 bg-transparent" />
            </div>
        </div>
    );
}

export default Home;
