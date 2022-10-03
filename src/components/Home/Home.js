import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
import Posts from '../Posts/Posts';
import HiddenIcons from '../Sidebar/HiddenIcons';
const Home = () => {
    
    
    return(
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3' id='soso'>
                        <Sidebar />
                    </div>
                    <div className='col-6'>
                            <div className='allPostsPlacee'>
                            <div className='homeTextPlace'>
                                <h3 id='h3'>Home</h3>   
                                <div id='hid'> 
                                <HiddenIcons/>
                                </div>
                            </div>
                                <Posts />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;