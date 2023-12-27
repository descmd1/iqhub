import React from 'react'
import classes from "../../Components/login/login.module.css"

const QuestionModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
        <form className={classes.questionmodal__container}>
          <div>
            <textarea
              type="text"
              id="text"
              name="text"
              placeholder="type in your question"
              className={classes.login__email}
            />
          </div>
          <div className={classes.settings__btn__box}>
          <button onClick={{onClose}} className={classes.settings__btn}>
            Cancel
          </button>
          <button className={classes.settings__btn}>
            submit
          </button>
          </div>
        </form>
    </div>
  )
}

export default QuestionModal