import Navbar from '../../components/navbar/Navbar'
import RightChart from '../../components/rightChart/RightChart'

import LeftChart from '../../components/leftChart/LeftChart'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import './home.scss'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
        <Navbar/>
        <div className="widgetContainer">
        <Widget type='user'/>
        <Widget type='order'/>
        <Widget type='earning'/>
        <Widget type='balance' />
        </div>
        <div className="charts">
          <LeftChart/>
          <RightChart/>
        </div>
        <Table/>
        </div>

    </div>
  )
}

export default Home