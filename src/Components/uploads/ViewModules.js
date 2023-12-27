import React, { useState } from "react";
import Layout from "../layout/Layout";
import { BsCheckAll, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { AiFillCaretRight, AiOutlineLink } from "react-icons/ai";
import { BiSolidLandmark } from "react-icons/bi";
import classes from "./Viewmodules.module.css";
import { Link } from "react-router-dom";
import QuestionModal from "./QuestionModal";
import TopicsModal from "./TopicsModal";

const ViewModules = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalShow(true);
  };
  const openModal = () => {
    setIsModalOpen(true);
  }
  return (
    <Layout>
      <div className={classes.view_module}>
        <form className={classes.view_form}>
          <span className={classes.__span}>
            module: module tiltle{" "}
            <BsCheckAll size={18} className={classes.markIcon} />
          </span>
          <section className={classes.view__section}>
            <button className={classes.content_button}>
              <BsFillFileEarmarkTextFill size={13} /> Content
            </button>
            <button className={classes.resource_button}>
              <AiOutlineLink size={18} className={classes.resourceIcon} />{" "}
              Resources
            </button>
          </section>
          <div>
            <video controls className={classes.video_container}>
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </form>
        <div className={classes.faqbox}>
          <div className={classes.__buttons}>
            <button className={classes.topics} onClick={openModal}>Topics</button>
            <TopicsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            <button className={classes.questions} onClick={showModal}>Ask Question</button>
            <QuestionModal
          isOpen={isModalShow}
          onClose={() => setIsModalShow(false)}
          className={classes.modal}
        />
          </div>
          <form className={classes.video__title}>
              <p className={classes.video__span}> 
              <AiFillCaretRight size={12} className={classes.playIcon}/> &nbsp;
                video title  <BsCheckAll size={18} className={classes.markIcon}/>
              </p>
          </form>
          <div className={classes.end}>
           <Link to='/dashboard'> <button className={classes.back}>Back</button></Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewModules;
