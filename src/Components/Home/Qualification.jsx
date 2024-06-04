import React, { useEffect, useRef } from "react";
import "../Style/Qualification.css"

const Qualification = () => {


  return (
    <>

<h1 className="Qtitle">Education<span> Timeline</span></h1>

<div class="Qcontainer">

   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Secondary School</h3>
         <span>Sai shiksha Niketan Boarding High School</span>
         <p>Passed Date : 2018</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Higher Secondary</h3>
         <span>Golden Gate International College</span>
         <p>Passed Date : 2020</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>UnderGraduate</h3>
         <span>Softwarica College</span>
         <p>Passed Date : 2023</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Master</h3>
         <span>Processing For Austrilia</span>
         <p>pending...</p>
      </div>
   </div>

</div>

    </>
  );
};

export default Qualification;
