import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import styles from "./App.module.css"
import Content1 from "./modules/content";
import {
    useParams,
    useLocation,
    useNavigate
} from "react-router-dom";

const {Header, Sider, Content} = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const [tabType, setTabType] = useState("1");

    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate();

    return (
        <Layout className={styles.layout}>
            <Sider trigger={null} collapsible collapsed={collapsed} className={styles.slider}>
                <div className={styles.logo}>account</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => {
                        console.log(e);
                        setTabType(e.key);
                        navigate(`/${e.key}`)
                    }

                    }
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined/>,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined/>,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined/>,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{padding: 0, background: colorBgContainer}} className='flex justify-between'>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: styles.trigger,
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div className={'px-4'}>icon</div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: "100vh",
                        background: colorBgContainer,
                    }}
                >
                    {+tabType === 1 && <Content1/>}
                    {+tabType === 2 && <Content1/>}
                    {+tabType === 3 && <Content1/>}

                </Content>
            </Layout>
        </Layout>
    );
};

export default App;