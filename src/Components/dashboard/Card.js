import React from "react";
import { BsBookmark, BsCheckAll, BsFillTelephoneFill } from "react-icons/bs";
import classes from './Card.module.css'
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
const Card = () => {
  return(
  <div className={classes.card__container}>
    {data.map((data) =>(
      <div key={data.id} className={classes.card_box}> 
      <div className={classes.card_item_box}>
    <p>Module- {data.moduleNumber}</p>
    
    <p>{data.courseTitle}</p>
    <div className={classes.icon_div}>
    <BsBookmark />
<p>session:{data.duration}</p>
</div>
<Link to='/view-module'>
<div className={classes.icon_div}>
<BsBookmark />
</div>
</Link>
</div>
<Link to='/view-module'>
    <div className={classes.card_button_box}>
    <button className={classes.card_btn}>Continue</button>
    </div>
    </Link>
    </div>
     ))}
    </div>
    )
};

export default Card;
