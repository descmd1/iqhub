import React, { useState } from 'react'
import SettingsModal from "../SettingsModal";
import classes from "../../Components/login/login.module.css"
import Layout from '../layout/Layout';

const ResetUser = () => {
    const [isModalShow, setIsModalShow] = useState(false);

    const showModal = () => {
      setIsModalShow(true);
    };
  return (
    <Layout>
    <div className={classes.setting__container}>
         <p className={classes.login__para}>Want to change password or email?</p>
          <div>
            <p
              className={classes.login__email}>Click on the button below</p>
        
          </div>
          <button onClick={showModal} className={classes.login__button}>          
          
        Reset
        </button>
        <SettingsModal
          isOpen={isModalShow}
          onClose={() => setIsModalShow(false)}
          className={classes.modal}
        />
    </div>
    </Layout>
  )
}

export default ResetUser