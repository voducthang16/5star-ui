import { useParams } from 'react-router-dom';
import { LeftProfile, PostUser, RightProfile } from '~/layouts/components/Profile';

const Profile = () => {
    const { id } = useParams();
    return (
        // PROFILE - PAGE
        <div className="grid grid-cols-11 mt-3 gap-3">
            <LeftProfile />
            <PostUser id={id!} />
            <RightProfile />
        </div>
    );
};

export default Profile;
