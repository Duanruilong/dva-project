import { Menu, Icon } from 'antd';
// import Link from 'umi/link';
import {  NavLink } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
    //   selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <NavLink to="/" >
            Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/users">
        <NavLink to="/users" >
            users
        </NavLink>
      </Menu.Item>
      
      {/* <Menu.Item key="/404">
      <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item> */}
    </Menu>
  );
}

export default Header;