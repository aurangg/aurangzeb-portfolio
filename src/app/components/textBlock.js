import Dot from "./dot";

export default function TextBlock({ project, text_block_title }) {
  return (
    <div className="row">
      <div className="col-lg-4">
        <p className="banner-description">{text_block_title}</p>
      </div>
      <div className="col-lg-8">
        <div className="text-block-section">
          {project.data.text_block.map((i, index) => (
            <div key={index} className="text-block-div">
              {i.text_block_list.map((j, index2) => (
                <>
                  {index2 === 0 ? (
                    <div className="text-block-inner">
                      <Dot
                        color={`${text_block_title.includes("Challenge") ? "red" : "green"}`}
                      />
                      <h6 className="text-block-heading">{j.text}</h6>
                    </div>
                  ) : (
                    <p className="text-block-info">{j.text}</p>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
