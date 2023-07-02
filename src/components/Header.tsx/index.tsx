import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { Dropdown} from 'antd';
import type { MenuProps } from 'antd';

const Header = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to='/profile'>
          Profile
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to='/logout' >
          Logout
        </Link>
      ),
    }
  ];

  return (
    <div className="header">
      <Link to="/"><h2>Code Makers</h2></Link>

      <div className="user-modal">
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  )
}

export default Header