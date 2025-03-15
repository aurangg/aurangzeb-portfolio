import { pastelColors } from "@/constants/colors";
import Padding from "../components/Padding";

export default function AboutHobbies({ about }) {
  const getRandomPastelColors = (length) => {
    return Array.from({ length }, () => {
      const randomIndex = Math.floor(Math.random() * pastelColors.length);
      return pastelColors[randomIndex];
    });
  };
  return (
    <section className="position-relative">
      <div className="container position-relative border-lr section-sm-padding">
        <Padding spacing={40} border={false} />
        <div className="row" style={{ rowGap: "16px" }}>
          {about?.data?.hobbies.map((i, index) => (
            <div className="col-lg-6" key={index}>
              <div className="hobbies-box">
                <h6 className="thumb-title about-hobbies-title">
                  {i?.hobbies_title}
                </h6>
                <div className="chip-flex">
                  {i?.hobbies_text?.map((j, index2) => {
                    const { background, text } = getRandomPastelColors(1)[0];
                    return (
                      <div
                        className="hobbies-chip"
                        style={{ background: background }}
                        key={index2}
                      >
                        <p className="hobbies-text" style={{ color: text }}>
                          {j.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
