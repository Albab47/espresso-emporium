import NotFoundImg from '../assets/images/404/404.gif';
import BackToHomeNav from '../components/BackToHomeNav';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <BackToHomeNav />
            <img src={NotFoundImg} alt="404 not found image" />
        </div>
    );
};

export default ErrorPage;