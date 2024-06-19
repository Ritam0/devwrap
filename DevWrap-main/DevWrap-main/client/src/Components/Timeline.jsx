import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Navbar from "./Navbar";
import Preloader from "./Preloader";
import "./BG.css"
const Timeline = () => {
  return (
    <div className="timeline">
      <Preloader/>
      <Navbar />
<div className="tl p-[30px]">
<VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="22nd Feb"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">
            Registration Starts
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="1st & 2nd March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Offline Registration</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="3rd March , 10 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Project Announcement</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="3rd March , 11 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">
            Hacking Starts !!
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="3rd March , 11 AM - 4th March 11 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Hacking With Fun Events !!</h3>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="4th March , 10 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Project Submission Starts</h3>
        </VerticalTimelineElement><VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="4th March , 11am"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Hacking Ends !!</h3>
        </VerticalTimelineElement><VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="7th March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Prelims Result out!!</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="9th March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Finals</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="9th March 10 AM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">7 Hour offline Hacking starts</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="9th March 12 PM - 1 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Fun Events!!</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="9th March 1 PM - 2 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Lunch</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="9th March , 4 PM"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Judging Process Starts!!</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(119, 131, 135, 0.2)', color: '#000', borderRadius: '10px', backdropFilter: 'blur(5px)',fontFamily: 'Poppins, sans-serif' }}
          date="9th March , 5pm"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-medium">Wrap up!!</h3>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>
</div>
      
    </div>
  );
};

export default Timeline;
