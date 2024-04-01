import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Index = (): JSX.Element => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/landing/page')
    }, [navigate]);

    return (<></>)
};

export default Index;