import React, { Component } from "react";
import "./App.scss";
import Header from "./components/header";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Nav from "./components/nav";
import axios from "axios";
import Loading from "./components/loading";
import { Transition } from "react-spring/renderprops";
import Contact from "./components/contact";

const serverUrl = "https://my-cv-asaf-backend.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
      user: null,
      education: null,
      courses: null,
      skills: null,
      projects: null,
      reachedSkills: false,
      reachedEducation: false,
      reachedProjects: false,
      linkList: null
    };
    this.scrollY = this.scrollY.bind(this);
  }

  scrollY = () => {
    this.setState({
      y: document.getElementById("app-wrapper").scrollTop,
      linkList: [
        { name: "About Me", y: document.getElementById("header").offsetTop },
        {
          name: "Technical Skills",
          y: document.getElementById("skills").offsetTop
        },
        {
          name: "Education",
          y: document.getElementById("education").offsetTop
        },
        { name: "Projects", y: document.getElementById("projects").offsetTop },
        { name: "Contact Me", y: document.getElementById("contact").offsetTop }
      ]
    });
    let y = this.state.y;
    let skillsTop = document.getElementById("skills").offsetTop * 0.7;
    let educationTop = document.getElementById("education").offsetTop * 0.9;
    let projectsTop = document.getElementById("projects").offsetTop * 0.9;
    this.setState({
      reachedSkills: y >= skillsTop ? true : false,
      reachedEducation: y >= educationTop ? true : false,
      reachedProjects: y >= projectsTop ? true : false
    });
  };

  scrollToPage = x => {
    document.getElementById("app-wrapper").scrollTo(0, x);
  };

  saveChanges = (name, value) => {
    this.setState({
      [name]: value
    });
  };
  /**A Function to get all the data from the server */
  getData() {
    axios
      .get(serverUrl + "User")
      .then(response => {
        this.setState({
          user: response.data
        });
        console.log("user:", response.data);
      })
      .catch(error => {
        console.log("error: ", error);
      });

    axios
      .get(serverUrl + "Education")
      .then(response => {
        console.log("education: ", response.data);
        this.setState({
          education: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });

    axios
      .get(serverUrl + "Course")
      .then(response => {
        console.log("courses: ", response.data);
        this.setState({
          courses: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });

    axios
      .get(serverUrl + "Skill")
      .then(response => {
        console.log("skills: ", response.data);
        this.setState({
          skills: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });

    axios
      .get(serverUrl + "Project")
      .then(response => {
        console.log("projects: ", response.data);
        this.setState({
          projects: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const linkList = this.state.linkList;

    const toggle =
      this.state.skills &&
      this.state.user &&
      this.state.education &&
      this.state.courses &&
      this.state.projects;

    return (
      <div id="app" className="App">
        <Transition
          items={toggle}
          from={{ position: "absolute", opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {toggle =>
            toggle
              ? props => (
                  <div
                    id="app-wrapper"
                    className="main-wrapper"
                    style={props}
                    onScroll={this.scrollY}
                  >
                    {linkList ? (
                      <Nav
                        style={props}
                        minimize={this.state.minimizeNav}
                        links={linkList}
                        scrollToPage={this.scrollToPage}
                      />
                    ) : (
                      <div />
                    )}
                    <Header data={this.state.user} />
                    <Skills
                      showSkills={this.state.reachedSkills}
                      data={this.state.skills}
                    />
                    <Education
                      data={this.state.education}
                      courses={this.state.courses}
                      showEducation={this.state.reachedEducation}
                    />
                    <Projects
                      projects={this.state.projects}
                      showProjects={this.state.reachedProjects}
                    />
                    <Contact user={this.state.user} />

                    <svg
                      id="tri-right"
                      className="triangle"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="
              M 0 50
              L 100 0
              L 100 100
              Z"
                      />
                    </svg>

                    <svg
                      id="tri-left"
                      className="triangle"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="
              M 100 50
              L 0 0
              L 0 100
              Z"
                      />
                    </svg>

                    <svg
                      id="tri-left-2"
                      className="triangle"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="
              M 100 50
              L 0 0
              L 0 100
              Z"
                      />
                    </svg>
                  </div>
                )
              : props => (
                  <div style={props}>
                    <Loading />
                  </div>
                )
          }
        </Transition>
        <div id="phoneBlocker">
          <h3>Turn your device to a horizontal view</h3>
        </div>
      </div>
    );
  }
}

export default App;
