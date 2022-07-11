import { SearchIcon, CloseIcon, LoadingIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
interface SearchProps {
    className?: string;
}

function Search({ className }: SearchProps) {
    return (
        <div className={className}>
            <input
                className={'input placeholder:font-thin placeholder:text-gray-500 flex-1'}
                type="text"
                placeholder="Tìm kiếm trên 5star"
            />
            {/* absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 */}
            <Tippy content="Tìm kiếm" placement="right">
                <button
                    className="py-3 px-4 hover:bg-slate-200 rounded-r-full
                relative after:absolute after:content-[''] after:block after:top-1/2 
                after:left-0 after:transform after:-translate-x-1/2 
                after:-translate-y-1/2 after:bg-gray-300 after:w-px after:h-6"
                >
                    <SearchIcon width={20} height={20} className="fill-gray-500" />
                </button>
            </Tippy>
        </div>
    );
}

export default Search;
