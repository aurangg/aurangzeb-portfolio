export default function ProjectSkeleton() {
  return (
    <div className="project-box">
      <div className="col-lg-6">
        <div
          className="project-image-container"
          style={{ backgroundColor: "#E6EDFD" }}
        ></div>
      </div>
      <div className="col-lg-6">
        <div className="project-space-vertical">
          <div className="project-header">
            <div className="skeleton-logo"></div>
            <div className="project-title-box">
              <h2 className="skeleton-title"></h2>
              <p className="skeleton-description"></p>
              <p className="skeleton-description"></p>
            </div>
            <div className="chip-flex">
              <div className="skeleton-chip"></div>
              <div className="skeleton-chip"></div>
              <div className="skeleton-chip"></div>
            </div>
          </div>
          <div className="project-footer">
            <div className="tags-flex">
              <div className="tags-inner">
                <div className="skeleton-tags"></div>
                <div className="skeleton-dot"></div>
                <div className="skeleton-tags"></div>
                <div className="skeleton-dot"></div>
                <div className="skeleton-tags"></div>
              </div>
            </div>
            <div className="skeleton-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
