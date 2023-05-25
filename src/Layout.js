import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "./Navigation";

const AppLayout = () => {
  const { Footer, Content } = Layout;
  return (
    <Layout>
      <Layout style={{ height: "100vh" }}>

        <Navigation />

        <Content>
          <div style={{ padding: "20px", backgroundColor: "#F5F5F5", height: "100%", }} >
            <Outlet />
          </div>
        </Content>

        <Footer style={{ textAlign: "center", backgroundColor: "#204E57", color: "grey", }} >
          <p> 2008-2023 Empire City Laboratories, Inc. </p>
          <small> All Rights Reserved. ECL and Empire City Laboratories are registered trademarks of Empire City Laboratories®, Inc. </small>
        </Footer>

      </Layout>
    </Layout>
  );
};

export default AppLayout;

// import React from "react";
// import { Outlet } from "react-router-dom";
// import { Layout, Col, Space,Divider } from "antd";
// import Navigation from "./Navigation";

// const { Header, Footer, Content } = Layout;

// const MainLayout = () => {
//   return (
//     <Layout>
//       <Header>
//         <Navigation />
//       </Header>

//         <Col xs={24} sm={24} md={12} lg={16} xl={20}>
//           <div style={{ padding: "20px" }}>
//             <Outlet />
//           </div>
//         </Col>

//       <Footer>
//         <Space direction='horizontal' split={<Divider type="vertical" wrap/>}>
//           <div>© 2008-2021 Empire City Laboratories, Inc. All Rights Reserved. ECL and Empire City Laboratories are registered trademarks of Empire City Laboratories®, Inc. </div>
//         </Space>
//       </Footer>
//     </Layout>
//   );
// };

// export default MainLayout;
