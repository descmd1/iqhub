import React from 'react'
import style from "../../Components/login/login.module.css"
import classes from '../dashboard/Card.module.css'
import { BsBookmark, BsCheckAll, BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const data = [
    {
      id: 1,
      moduleNumber: 1,
      courseTitle: 'introduction to chemistry',
      duration: '40min - 2hrs'
    },
    {
      id: 2,
      moduleNumber: 2,
      courseTitle: 'introduction to chemistry',
      duration: '40min - 2hrs'
    },
    {
      id: 3,
      moduleNumber: 3,
      courseTitle: 'introduction to chemistry',
      duration: '40min - 2hrs'
    }
  ]

const TopicsModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    
        <div className={style.topicsmodal__container}>
            <p onClick={onClose} className={style.closemodal}>X</p>
        <div className={classes.card__container}>
    {data.map((data) =>(
      <div key={data.id} className={classes.card_box}> 
      <div className={classes.card_item_box}>
    <p>Module- {data.moduleNumber}</p>
    
    <p>{data.courseTitle}</p>
   
<Link to='/view-module'>
<div className={classes.icon_div}>
<BsBookmark />
</div>
</Link>
</div>
    </div>
     ))}
    </div>
        </div>
    
  )
}

export default TopicsModal