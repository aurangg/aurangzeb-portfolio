import Padding from "../components/Padding";

export default function AboutHobbies({ about }) {
  return (
    <section className="position-relative">
      <div className="container position-relative border-lr">
        <Padding spacing={40} border={false} />
        <div className="row" style={{ rowGap: "16px" }}>
          {about?.data?.hobbies.map((i, index) => (
            <div className="col-lg-6" key={index}>
              <div className="hobbies-box">
                <h6 className="thumb-title about-hobbies-title">
                  {i?.hobbies_title}
                </h6>
                <div className="chip-flex">
                  {i?.hobbies_text?.map((j, index2) => (
                    <div className="project-chip" key={index2}>
                      <p className="chip-text about-hobbies-text">{j.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
