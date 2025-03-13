import Image from "next/image";

export default function Coming() {
  return (
    <div className="coming flex-all">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-box">
              <Image
                src="avatar-with-glow.svg"
                alt="avatar-with-glow"
                width={256}
                height={282}
              />
              <div>
                <h1 className="section-heading">
                  Coming Soon
                  <span style={{ color: "#f40" }}>.</span>
                </h1>
                <p className="section-subheading align-left">in few days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
