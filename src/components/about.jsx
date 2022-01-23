import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "NextJs_skill",
          content: "NextJS",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "VueJs_skill",
          content: "VueJS (NextJS)",
          porcentage: "40%",
          value: "40"
        },
        {
          id: "Nodejs (express)",
          content: "Nodejs (express)",
          porcentage: "40%",
          value: "40"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hello and thanks for visiting my profile. I am a Full Stack Web Developer  and mostly I am passionate on web coding. I’m quite expert in using coding and markup languages like:Hypertext markup language (HTML)Cascading Style Sheet Javascript, Typescript I have completed my graduation in Computer Application and also done many courses related to web designing, coding, and programming. My 1 year experience of Job helped me to understand the business tricks. Now I can easily cope up with the business market and understand the consumers’ needs."
        },
        {
          id: "second-p-about",
          content:
            "Learning Programmer [React, React-native, Nodejs, Hasura/Graphql,Testing with Jest]Always willing to learn new technologies."
        },
        {
          id: "third-p-about",
          content:
            "Passionate to Learn Technology and have a good exposure on Mobile Development as well using (Java Android Native Development),Learning Dart and React Native"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
