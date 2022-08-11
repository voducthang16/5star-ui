import { useState } from 'react';
import { AddImageIcon, EmojiIcon, PublicIcon, ScheduleIcon, VoteIcon } from '~/components/Icons';
import Image from '~/components/Image';
import './MyStatus.scss';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import quillEmoji from 'react-quill-emoji';
import 'react-quill/dist/quill.snow.css';
import 'react-quill-emoji/dist/quill-emoji.css';

interface StatusProps {
    className?: string;
}

function Status({ className }: StatusProps) {
    const [value, setValue] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(value);
    };
    Quill.register('modules/imageResize', ImageResize);
    Quill.register(
        {
            'formats/emoji': quillEmoji.EmojiBlot,
            'modules/emoji-toolbar': quillEmoji.ToolbarEmoji,
            'modules/emoji-textarea': quillEmoji.TextAreaEmoji,
            'modules/emoji-shortname': quillEmoji.ShortNameEmoji,
        },
        true,
    );
    const modules = {
        toolbar: {
            container: [
                // [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                // [{ size: [] }],
                // [{ color: [] }, { background: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                // [{ align: [] }],
                // [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image', 'video'],
                // ['emoji'],
                // ['clean'],
                ['code-block'],
            ],
        },
        'emoji-toolbar': true,
        'emoji-textarea': true,
        'emoji-shortname': true,
    };
    return (
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
                    <form onSubmit={handleSubmit} className="ml-4 flex-1">
                        {/* status */}
                        <div className="flex items-center">
                            {/* <h3 className="text-base text-gray-300">Bạn đang nghĩ gì thế? Name</h3> */}
                            <div className="flex-1 font-medium text-base">
                                <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
                            </div>
                        </div>
                        {/* public, friend */}
                        <div className="text-sm font-medium mt-2 pb-2 border-b border-solid border-gray-100">
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
                                <button type="submit" className="btn btn-primary py-2 text-sm">
                                    Đăng
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Status;
