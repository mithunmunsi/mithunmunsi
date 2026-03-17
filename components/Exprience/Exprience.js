import React from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";

const Expriences = [
  {
    date: "2020 - Present",
    logo: "images/work/4.png",
    position: "CEO, NEXTBY",
    companyName: "NEXTBY, Finland",
    workFrom: "",
    url: "https://nextby.fi",
  },
  {
    date: "2024 - 2025",
    logo: "images/work/1.png",
    position: "Web Developer",
    companyName: "Tutors Finland Oy, Finland.",
    workFrom: "(Remote)",
    url: "https://www.tutors.es",
  },
  {
    date: "2013 - 2015",
    logo: "images/work/2.png",
    position: "SEO Executive",
    companyName: "CMS Consulting Inc. (UPWORK), Canada",
    workFrom: "(Remote)",
    url: "https://www.cmsconsulting.ca",
  },
  {
    date: "2011 - 2013",
    logo: "images/work/3.png",
    position: "Data Entry Operator",
    companyName: "Intelligent Image Management Ltd., Bangladesh",
    workFrom: "(On-site)",
    url: "https://www.iimdirect.com",
  },
];

const ExprienceSec = (props) => {
  return (
    <div className="wpo-work-area section-padding">
      <div className="container">
        <SectionTitle Title={"My Work Experience"} />
        <div className="wpo-work-wrap">
          {Expriences.map((exprience, exp) => (
            <div className="wpo-work-item" key={exp}>
              <ul>
                <li className="date">{exprience.date}</li>
                <li className="logo">
                  <img src={exprience.logo} alt="" />
                </li>
                <li className="position">
                  {exprience.position}{" "}
                  <span>
                    {exprience.companyName} <span>{exprience.workFrom}</span>
                  </span>
                </li>
                <li className="link">
                  <Link
                    href={exprience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to website
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="shape-wk">
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4214)">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4214"
              x="0"
              y="0"
              width="1500"
              height="1500"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="275"
                result="effect1_foregroundBlur_39_4212"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ExprienceSec;
