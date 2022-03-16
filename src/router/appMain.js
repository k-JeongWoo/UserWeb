import TopMenu from '../components/Layout/TopMenu'
import LeftMenu from '../components/Layout/LeftMenu'
import FooterMenu from '../components/Layout/FooterMenu'
import AppMain from '../components/AppMain'
import AlarmList from '../components/appMain/AlarmList'
import AlarmDetail from '../components/appMain/AlarmDetail'
export default [
  {
    path: '/',
    name: 'AppMain',
    components: {
      header: TopMenu,
      default: AppMain,
      leftMenu: LeftMenu,
      footer: FooterMenu
    }
  },
  {
    path: '/alarmList',
    name: 'AlarmList',
    components: {
      header: TopMenu,
      default: AlarmList
    }
  },
  {
    path: '/alarmDetail',
    name: 'AlarmDetail',
    components: {
      header: TopMenu,
      default: AlarmDetail
    }
  }
]
