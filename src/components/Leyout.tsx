import React from 'react';
import { Layout } from 'antd';


const Leyout = ({ children }: { children: any }) => {

    return (
        <React.Fragment>
            <Layout hasSider>
                
                <Layout className="site-layout" style={{ background: '#fafafa', }}>
                    {/* <Header /> */}
                    <Layout.Content style={{ overflow: 'initial', height: 'calc(100vh)' }}>
                        <div className="p-8">
                            {children}
                        </div>
                    </Layout.Content>
                </Layout>
            </Layout>
        </React.Fragment>
    );
}

export default Leyout;