import Link from "next/link";
import BasicDot from "../components/BasicDot";
import Padding from "../components/Padding";
import VerticalLines from "../components/VerticalLines";
import { contact_page } from "@/constants/urls";

export default function Nayyab() {
  return (
    <section className="position-relative border-adjust">
      <Padding spacing={40} border={true} />
      <VerticalLines topLine={true} bottomLine={true} />
      <div className="container section-sm-padding border-lr">
        <BasicDot
          topLeft={true}
          topRight={true}
          bottomRight={true}
          bottomLeft={true}
        />
        <div className="row">
          <div className="col-lg-12">
            <div
              className="banner-box"
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <h1 className="banner-title">Hi Nayyab</h1>
              <p
                className="banner-description"
                style={{ marginBottom: "12px", opacity: "0.8" }}
              >
                I hope this makes you feel better. Nothing but love, and so much
                of it. ♥️ Itna dil pay na lain. Kuch kehnay ka dil kar raha hai,
                laken likha nahi jaa raha, tou{" "}
                <span>
                  <Link href={`/${contact_page}`}>Contact Page</Link>
                </span>{" "}
                pay jayen, wahan bus aapnay dil ki saari baat likh dain. Agar wo
                dil nahi, tou bus mujay aapnay pas sammjhain, bohat bohat bohat
                pas. I'm here and I won't let you fall. I'm here!
              </p>
              <p
                className="banner-description"
                style={{ marginBottom: "12px", opacity: "0.8" }}
              >
                Made with love, for you.
              </p>
              <p
                className="banner-description"
                style={{ marginBottom: "12px", opacity: "0.8" }}
              >
                Tons of hugssssssss!!! ♥️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
