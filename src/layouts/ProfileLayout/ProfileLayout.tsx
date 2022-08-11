import Header from '../components/Header';
import { HeaderThumb } from '../components/Profile';

interface DefaultLayoutProps {
    Children: React.ComponentType;
}

const ProfileLayout = ({ Children }: DefaultLayoutProps) => {
    return (
        <div>
            <Header />
            <div className="profile-page bg-gray-100">
                <div className="container mx-auto">
                    <div className="row">
                        <div className="max-w-screen-2xl 2xl:m-auto xl:max-w-screen-xl xl:mx-auto xl:pt-6 relative">
                            <HeaderThumb />
                            <div className="profile-main">
                                <Children />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
