import Footer from "../components/footer";
import ProjectsComponent from "./projects";

export const metadata = {
  title: "Real Work. Real Impact",
  description: `Your users expect seamless experiences. I craft scalable, data-driven designs that not only look great but deliver measurable results. From SaaS dashboards to high-converting websites and mobile apps, every project is built with growth, usability, and future-proofing in mind.

🚀 Success Stories (Expectations You Can Have)
🔹 Kuwait’s Largest Bank: Mobile app redesign boosted user retention by 20%, streamlining transactions.
🔹 Healthcare SaaS CRM: A new dashboard reduced workflow bottlenecks by 40%, improving efficiency.
🔹 ForkToFit (Food Delivery App): UI/UX improvements led to a 35% jump in user engagement.

💬 Client Testimonial Placeholder (Insert a strong client review here)

🔍 What You Get When You Work With Me:
✅ User-Centric, Data-Backed Designs – UX that maximizes usability & engagement
✅ Scalable UI/UX Systems – Future-proofing your product for long-term success
✅ Developer-Ready Files – Seamless handoffs for faster execution

I’m not here to oversell—I let my work speak for itself. If you're looking for UI/UX that delivers real impact, let’s build something great together. Check out my portfolio. 🚀`,
};

export default function Projects() {
  return (
    <>
      <ProjectsComponent />
      <Footer />
    </>
  );
}
