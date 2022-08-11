import { LeftProfile, PostUser, RightProfile } from '~/layouts/components/Profile';

const Profile = () => {
    return (
        // PROFILE - PAGE
        <div className="grid grid-cols-11 mt-3 gap-3">
            <LeftProfile />
            <PostUser />
            <RightProfile />
        </div>
    );
};

export default Profile;
