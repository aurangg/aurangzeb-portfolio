import { staticMetadata } from "@/lib/metadata";
import Image from "next/image";
import BasicDot from "../components/BasicDot";
import { resumeData } from "@/data/resume";
import VerticalLines from "../components/VerticalLines";
import { pastelColors } from "@/constants/colors";
import Padding from "../components/Padding";

export const metadata = staticMetadata.resume;

export default function ResumeData() {
  const data = resumeData;
  return (
    <>
      <div className="col-lg-8 border-lr position-relative">
        <Padding spacing={60} border={false} />
      </div>
      <div className="col-lg-8 border-lr position-relative section-sm-padding">
        <VerticalLines topLine={true} bottomLine={true} />
        <BasicDot
          topLeft={true}
          topRight={true}
          bottomLeft={true}
          bottomRight={true}
        />
        <div className="resume-box resume-box-flex">
          <div className="display-container">
            <Image
              src={`https://images.prismic.io/aurangzebbbk-portfolio/Z9SNyjiBA97Gigm1_display-picture-hero.png?auto=format,compress`}
              alt="resume-picture"
              width={454}
              height={454}
              className="display-picture"
            />
            <div className="experience-tag">6 years experience</div>
          </div>
          <div className="resume-name-box">
            <p
              className="resume-name-box-location"
              style={{ marginBottom: "8px" }}
            >
              {data.general.about}
            </p>
            <h2 className="resume-name">{data.general.displayName}</h2>
            <p className="resume-title">
              {data.general.profession}{" "}
              <span
                className="albert font-weight-500 opacity-05"
                style={{ textTransform: "lowercase" }}
              >
                from
              </span>{" "}
              {data.general.location}
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 border-lr position-relative section-sm-padding">
        <VerticalLines bottomLine={true} topLine={false} />
        <BasicDot
          topLeft={false}
          topRight={false}
          bottomLeft={true}
          bottomRight={true}
        />
        <div
          className="resume-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p className="resume-property-text">Work Experience</p>
          {data.workExperience.map((i, index) => (
            <div className="resume-box-body" key={index}>
              <div className="resume-header">
                <p className="albert resume-text font-weight-400 opacity-05">
                  {i.year}
                </p>
              </div>
              <div className="resume-body">
                <a
                  href={i.url}
                  className="role resume-text albert font-weight-600"
                >
                  {i.myrole} at {i.company}
                </a>
                <p className="location resume-text jetbrains font-weight-300 opacity-05 text-uppercase">
                  {i.location}
                </p>
                <div className="contributions-box">
                  {i.contributions.map((j, index) => (
                    <div key={index} className="contributions-list">
                      <span>-</span>
                      <p className="thumb-description about-text contributions">
                        {j}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="tags-flex skills-box">
                  {i.skills.map((i, index) => (
                    <div
                      key={index}
                      className="tags-inner scope-bg"
                      style={{
                        backgroundColor: pastelColors[index].background,
                      }}
                    >
                      <p className="project-tags skills-text">{i}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-8 border-lr position-relative section-sm-padding">
        <VerticalLines bottomLine={true} topLine={false} />
        <BasicDot
          topLeft={false}
          topRight={false}
          bottomLeft={true}
          bottomRight={true}
        />
        <div
          className="resume-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p className="resume-property-text">Projects</p>
          {data.project.map((i, index) => (
            <div className="resume-box-body" key={index}>
              <div className="resume-header">
                <p className="albert resume-text font-weight-400 opacity-05">
                  {i.year}
                </p>
              </div>
              <div className="resume-body">
                <a
                  href={i.url}
                  className="role resume-text albert font-weight-600"
                >
                  {/* {i.tagline} at {i.company} */}
                  {i.tagline}
                </a>
                <p className="location resume-text jetbrains font-weight-300 opacity-05 text-uppercase">
                  {i.location}
                </p>
                <ul className="contributions-box">
                  {i.contributions.map((j, index) => (
                    <div key={index} className="contributions-list">
                      <span>-</span>
                      <p className="thumb-description about-text contributions">
                        {j}
                      </p>
                    </div>
                  ))}
                </ul>
                <div className="tags-flex skills-box">
                  {i.skills.map((i, index) => (
                    <div
                      key={index}
                      className="tags-inner scope-bg"
                      style={{
                        backgroundColor: pastelColors[index].background,
                      }}
                    >
                      <p className="project-tags skills-text">{i}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-8 border-lr position-relative section-sm-padding">
        <VerticalLines bottomLine={true} topLine={false} />
        <BasicDot
          topLeft={false}
          topRight={false}
          bottomLeft={true}
          bottomRight={true}
        />
        <div
          className="resume-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p className="resume-property-text">Certifications</p>
          {data.certifications.map((i, index) => (
            <div className="resume-box-body" key={index}>
              <div className="resume-header">
                <p className="albert resume-text font-weight-400 opacity-05">
                  {i.year}
                </p>
              </div>
              <div className="resume-body">
                <a
                  href={i.url}
                  className="role resume-text albert font-weight-600"
                >
                  {i.name} from {i.organization}
                </a>
                <p className="location resume-text jetbrains font-weight-300 opacity-05 text-uppercase">
                  ID: {i.certificateId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-8 border-lr position-relative section-sm-padding">
        <VerticalLines bottomLine={true} topLine={false} />
        <BasicDot
          topLeft={false}
          topRight={false}
          bottomLeft={true}
          bottomRight={true}
        />
        <div
          className="resume-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p className="resume-property-text">Education</p>
          {data.education.map((i, index) => (
            <div className="resume-box-body">
              <div key={index} className="resume-header">
                <p className="albert resume-text font-weight-400 opacity-05">
                  {i.year}
                </p>
              </div>
              <div className="resume-body">
                <p className="role resume-text albert font-weight-600">
                  {i.degree}
                </p>
                <p className="thumb-description about-text contributions">
                  {i.school}
                </p>
                <p className="location resume-text jetbrains font-weight-300 opacity-05 text-uppercase">
                  {i.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-8 border-lr position-relative section-sm-padding">
        <VerticalLines bottomLine={true} topLine={false} />
        <BasicDot
          topLeft={false}
          topRight={false}
          bottomLeft={true}
          bottomRight={true}
        />
        <div
          className="resume-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p className="resume-property-text">Skills</p>
          {data.skills.map((i, index) => (
            <div className="resume-box-body" key={index}>
              <div className="resume-header">
                <p className="albert resume-text font-weight-400 opacity-05">
                  {i.name}
                </p>
              </div>
              <div className="resume-body">
                <div className="chip-flex">
                  {i.skill_array.map((j, index) => (
                    <div
                      key={index}
                      className="hobbies-chip"
                      style={{
                        backgroundColor: pastelColors[index].background,
                        borderRadius: "4px",
                      }}
                    >
                      <p className="hobbies-text" style={{ fontSize: "16px" }}>
                        {j}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-8 border-lr position-relative section-sm-padding">
        <VerticalLines bottomLine={true} topLine={false} />
        <BasicDot
          topLeft={false}
          topRight={false}
          bottomLeft={true}
          bottomRight={true}
        />
        <div
          className="resume-box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p className="resume-property-text">Interests</p>
          <div className="chip-flex">
            {data.interests.map((i, index) => (
              <div
                className="hobbies-chip"
                style={{
                  backgroundColor: pastelColors[index].background,
                  borderRadius: "4px",
                }}
                key={index}
              >
                <p className="hobbies-text" style={{ fontSize: "16px" }}>
                  {i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-8 border-lr position-relative">
        <Padding spacing={60} border={false} />
      </div>
    </>
  );
}
