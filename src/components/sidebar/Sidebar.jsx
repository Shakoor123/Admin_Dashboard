import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SurroundSoundOutlinedIcon from '@mui/icons-material/SurroundSoundOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            Kattippara
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span></li>
                    <p className="title">LINKS</p>
                <li>
                    <PeopleIcon className='icon'/>
                    <span>Users</span></li>
                <li>
                    <Inventory2TwoToneIcon className='icon'/>
                    <span>Products</span></li>
                <li>
                    <BookmarkBorderOutlinedIcon className='icon'/>
                    <span>Orders</span></li>
                 <p className="title">USWEFULL</p>
                <li>
                    <DeliveryDiningOutlinedIcon className='icon'/>
                    <span>Delivery</span></li>
                <li>
                    <ListAltOutlinedIcon className='icon'/>
                    <span>Status</span></li>
                <li>
                    <NotificationsActiveOutlinedIcon className='icon'/>
                    <span>Notifications</span></li>
                    <p className="title">SERVICE</p>
                <li>
                    <SurroundSoundOutlinedIcon className='icon'/>
                    <span>System helth</span></li>
                    <p className="title">USER</p>
                <li>
                
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span></li>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span></li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Log out</span></li>
            </ul>
        </div>
        <div className="bottom">
            <div className="color"></div>
            <div className="color"></div>
        </div>
    </div>
  )
}

export default Sidebar