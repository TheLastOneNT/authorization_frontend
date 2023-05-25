import React, { useState, useContext } from "react";
import { Space, Input, Button, Layout, Typography, message, Spin } from "antd";
import axioss from '../../restAPI';
import { AuthContext } from "../../components/AuthContext";


const Login = (props) => {
  const {doLogin} = useContext(AuthContext)
  const { Footer, Content } = Layout;
  const { Title } = Typography;
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("zelenchyks@gmail.com");
  const [password, setPassword] = useState("2020Empire229");

  const styleCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }

  // const getUsers = (token)=>{
  //
  //   axioss.get('/users', {headers: { Authorization: `Bearer ${token}` }})
  //     .then((response) => {
  //       console.log('========users================')
  //       console.log(response.data);
  //       console.log('========users================')
  //     })
  //   .catch(error => { messageApi.open({ type: 'error', content: error.message, }); console.log(error); })
  // }

  const handleSubmit = async () => {
    setLoading(true)
    
    await axioss.post('/signin', { email, password})
      .then((response) => { doLogin(response.data) })
      .catch(error => { messageApi.open({ type: 'error', content: error.message, }); console.log(error); })
      .finally(() => { setLoading(false) })
  };

  return (
    <Layout>
      {contextHolder}
      <Layout style={{ height: '100vh', }}>

        <Content>


          {loading ? (
            <Spin style={styleCenter} size="large" />
          ) : (
              <Space direction='horizontal' wrap style={{ display: 'flex', justifyContent: 'center', height: '50vh', padding: 30 }}>

                <div style={{ height: 150 }}>
                  <Title>Inventory</Title>
                  <p>by Empire City Laboratories</p>
                </div>

                <div style={{ width: 0.5, height: 180, backgroundColor: '#e1e1e1', margin: 10 }}>{' '}</div>

                <Space direction="vertical" style={{ width: 300 }} size='middle'>
                  <Input type="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                  <Input type="password" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
                  <Button type="primary" onClick={handleSubmit}>Submit</Button>
                </Space>
              </Space>
          )}

        </Content>

        <Footer style={{ textAlign: 'center', backgroundColor: '#204E57', color: 'grey' }} >
          <p > 2008-2023 Empire City Laboratories, Inc.  </p>
          <small>All Rights Reserved. ECL and Empire City Laboratories are registered trademarks of Empire City Laboratories®, Inc.</small>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Login;
