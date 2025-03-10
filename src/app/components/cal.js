"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import SectionHeadingSM from "./section_heading_sm";
import BasicDot from "./BasicDot";
import VerticalLines from "./VerticalLines";

export default function CalFunction() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#7489BC" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  const secretKey = process.env.CALCOM_LINK;
  return (
    <section className="position-relative">
      <VerticalLines topLine={true} bottomLine={false} />
      <div className="container position-relative border-lr section-sm-padding ">
        <BasicDot
          topLeft={true}
          topRight={true}
          bottomRight={true}
          bottomLeft={true}
        />
        <div className="row">
          <div className="col-lg-12">
            <SectionHeadingSM
              subheading="Quick chat. Fresh ideas."
              heading="Let’s Shape Your Next Big Idea."
              subheadingAlign="align-center"
              headingAlign="align-center"
            />
            <Cal
              namespace="30min"
              calLink="aurangzeb-khan-b543vh/30min"
              style={{
                width: "100%",
                height: "100%",
                overflow: "scroll",
              }}
              config={{ layout: "month_view", theme: "light" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
