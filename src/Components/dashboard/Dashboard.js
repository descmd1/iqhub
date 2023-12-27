import React from "react";
import Layout from "../layout/Layout";
import Card from '../dashboard/Card'
import { useAuth } from "../../utils/Auth";

const Dashboard = () => {
  // const auth = useAuth()
  return(
  <Layout title='dashboard'>
    <div style={{  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding:"10px",
  marginTop: '-400px'}}>
    {/* <p>Welcome {auth.user}</p> */}
    <Card />
    </div>
  </Layout>
  ) ;
};

export default Dashboard;
