import React from "react";
import networkConnectionsImage from "./media/connection.jpeg";
import tutorialVideo from "./media/about.mp4";

export default function AboutSection(props) {
  return (
    <>
      <h1>{props.title}</h1>

      <div className={`${props.styles.video} position-relative m-auto my-5`}>
        <video controls>
          <source src={tutorialVideo} type="video/mp4" />
          <source src={tutorialVideo} type="video/ogg" />
        </video>
      </div>

      <figure className="d-flex m-auto">
        <figcaption>
          <div>
            <p className={props.styles.desc}>
              The network devices can be controlled by using telnet or a console
              cable but in this project used techniqe of the automation. The
              automation is very exciting and very new in the network
              world,where the automation is just tools in order to succeed at
              your job and to do a lot better and remotely . Autonet web site is
              an automated tool To be able to control network devices remotely.
            </p>
          </div>
          <div>
            <h4>Features of AUTONET:</h4>
            <ul>
              <li>configuration for any device in the network .</li>
              <li>suitable for lab or mobie phone.</li>
              <li>
                change shutdown mode for any interfaces in switching or router,
                the speed of them , password of the device ,and We can do a lot
                of tasks.
              </li>
            </ul>
          </div>
        </figcaption>
        <img src={networkConnectionsImage} alt="Network Connections" />
      </figure>
    </>
  );
}
