import React from "react";
import mahmoud from "./media/mahmoud.jpeg";
import { Link, Route, Routes } from "react-router-dom";
import InfoCard from "./InfoCard";
import useModalContext from "../../../Hooks/useCreateModal";
import { ModalContext } from "../../../App";
export default function MembersSection(props) {
  const modal = useModalContext();
  const teamMembers = [
    {
      name: "mahmoud",
      props: {
        name: "Mahmoud Sameh Muhammed",
        image: mahmoud,
        email: "mahmoudsameh734@gmail.com",
        position: "Admin",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJs", "NodeJs"],
      },
    },
    {
      name: "ahmed",
      props: {
        name: "Mahmoud Sameh Muhammed",
        image: mahmoud,
        email: "mahmoudsameh734@gmail.com",
        position: "Admin",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJs", "NodeJs"],
      },
    },
    {
      name: "osama",
      props: {
        name: "Mahmoud Sameh Muhammed",
        image: mahmoud,
        email: "mahmoudsameh734@gmail.com",
        position: "Admin",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJs", "NodeJs"],
      },
    },
    {
      name: "sara",
      props: {
        name: "Mahmoud Sameh Muhammed",
        image: mahmoud,
        email: "mahmoudsameh734@gmail.com",
        position: "Admin",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJs", "NodeJs"],
      },
    },
  ];

  return (
    <ModalContext.Provider value={modal}>
      <h1>{props.title}</h1>
      <div className={`${props.styles.members} mb-4`}>
        {teamMembers.map((member) => (
          <Link
            to={"member/" + member.name}
            key={member.name}
            className={`${props.styles.member} d-flex`}
          >
            <img src={member.props.image} alt={member.name} />
          </Link>
        ))}
      </div>
      <Routes>
        {teamMembers.map((member) => (
          <Route
            key={member.name}
            path={`member/${member.name}`}
            element={<InfoCard member={member.props} styles={props.styles} />}
          />
        ))}
      </Routes>
    </ModalContext.Provider>
  );
}
