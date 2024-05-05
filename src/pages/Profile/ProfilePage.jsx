import Layout from '../../Layouts/DashboardLayout/DashboardLayout';
import { useAuth } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <Layout>
            {/* Add your main content for the profile page here */}
            {/* For example: */}
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            
                <div>
                    {user && (
                        <>
                            <p>Name: {user['user'].name}</p>
                            <p>Email: {user['user'].email}</p>
                        </>
                    )}
                </div>
        </Layout>
    );
};

export default ProfilePage;
