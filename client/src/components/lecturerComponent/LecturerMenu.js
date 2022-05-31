import {
  HomeOutlined
} from '@ant-design/icons';
// import { useQuery } from '@apollo/react-hooks';
import { Menu } from 'antd';
import React, { useContext } from 'react';
import { FpsView } from 'react-fps';
import { Link } from 'react-router-dom';
import { EnrolmentContext, NavbarContext } from '../../context';
// import { CheckError } from '../../utils/ErrorHandling';

export default () => {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);
 
    // eslint-disable-next-line no-empty-pattern
  const { } = useContext(EnrolmentContext);
  const { collapsed } = useContext(NavbarContext);

  return (
    <Menu theme='dark' mode='vertical' defaultSelectedKeys={[path]}>
      <Menu.Item key={'dashboard'} icon={<HomeOutlined />}>
        <Link to={'/dashboard'}>Courses</Link>
      </Menu.Item>
      {!collapsed && <FpsView width={190} height={100} top={525} />}
    </Menu>
  );
};
