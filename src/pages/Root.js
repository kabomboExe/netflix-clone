import { Outlet } from 'react-router-dom';
import CustomFooter from '../components/CustomFooter';
import CustomHeader from '../components/CustomHeader';

function Root() {
    return (
        <div>
            <CustomHeader></CustomHeader>
            <Outlet></Outlet>
            <CustomFooter></CustomFooter>
        </div>);
}

export default Root;