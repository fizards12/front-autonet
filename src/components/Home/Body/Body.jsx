import React from "react";
import AboutSection from "./AboutSection";
import MembersSection from "./MembersSection";
import GuideSection from "./GuideSection";
import styles from "./Body.module.css";

function Body() {
  const sections = [
    { section: AboutSection, title: "About Project", key: "about" },
    { section: GuideSection, title: "Guidelines", key: "guide" },
    { section: MembersSection, title: "Team Members", key: "members" },
  ];
  return (
    <main className="container">
      {sections.map((e) => (
        <section key={e.key} id={e.key} className="p-3">
          <e.section title={e.title} styles={styles} />
        </section>
      ))}
    </main>
  );
}

export default Body;
