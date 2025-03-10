import BasicDot from "@/app/components/BasicDot";
import VerticalLines from "@/app/components/VerticalLines";

export default function Banner({ project }) {
  return (
    <section className="position-relative">
      <VerticalLines topLine={true} bottomLine={true} />
      <div className="container position-relative border-lr section-sm-padding">
        <BasicDot
          topLeft={true}
          topRight={true}
          bottomRight={true}
          bottomLeft={true}
        />
        <div
          className="banner-box"
          style={{ display: "block", paddingBottom: "12px" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="project-title-box">
                <h2 className="thumb-title data-detail-title">
                  {project.data.title}
                </h2>
                <p className="thumb-description">
                  {project.data.description[0].text}
                </p>
              </div>
            </div>
            <div className="detail-header">
              <div className="detail-main-upper">
                <div className="work-data">
                  <p className="data-title">Client Name</p>
                  <h6 className="data-info">{project.data.client_name}</h6>
                </div>
                <div className="work-data">
                  <p className="data-title">Year</p>
                  <h6 className="data-info">{project.data.year}</h6>
                </div>
              </div>
              <div className="detail-main-lower">
                <div className="work-data">
                  <p className="data-title">Industry</p>
                  <div className="chip-flex">
                    {project.data.industry.map((j, index) => (
                      <div className="project-chip" key={index}>
                        <p className="chip-text">{j.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="work-data">
                  <p className="data-title">Scope of Work</p>
                  <div className="tags-flex" style={{ marginBottom: "0px" }}>
                    {project.data.scope.map((k, index) => (
                      <div
                        className={`tags-inner scope-bg bg-${index}`}
                        key={index}
                      >
                        <p className="project-tags scope-text">{k.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
