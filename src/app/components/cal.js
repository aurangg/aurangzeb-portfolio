"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
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
    <div className="section-padding-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cal-section">
              <div className="heading-area">
                <p className="section-subheading">Quick chat. Fresh ideas.</p>
                <h2 className="section-heading">
                  Let’s Shape Your Next Big Idea.
                </h2>
              </div>
              <Cal
                namespace="30min"
                calLink="aurangzeb-khan-b543vh/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "light" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
