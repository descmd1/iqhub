import React from 'react'
import classes from "../Components/login/login.module.css"

const SettingsModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
        <form className={classes.setting__container}>
          <p className={classes.login__para}>Want to change password?</p>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter old email"
              className={classes.login__email}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter old password"
              className={classes.login__email}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter new password"
              className={classes.login__email}
            />
          </div>
          <div className={classes.settings__btn__box}>
          <button onClick={{onClose}} className={classes.settings__btn}>
            Cancel
          </button>
          <button className={classes.settings__btn}>
            Save
          </button>
          </div>
        </form>
    </div>
  )
}

export default SettingsModal