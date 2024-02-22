import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CloudSync",
      description: "Clone App of OneDrive",
      imgUrl: projImg1,
      linkurl:"https://github.com/poojan-2099/CloudSync"
    },
    {
      title: "Wordle",
      description: "Puzzle Game",
      imgUrl: projImg2,
      linkurl:"https://poojan-2099.github.io/wordle/"
    },
    {
      title: "JobCycle",
      description: "Job Recruting APP",
      imgUrl: projImg3,
      linkurl:"https://github.com/poojan-2099/JobCycle"
    },
    {
      title: "AI Image Generator",
      description: "Image generator using prompts",
      imgUrl: projImg4,
      linkurl:"https://github.com/poojan-2099/Dall_E_CLone"
    },
    {
      title: "Advance Filtering App",
      description: "Advance Filtering of diamonds using their characteristic",
      imgUrl: projImg5,
      linkurl:"https://cvddiamondinc.com/diamond-inventory/"
    },
    {
      title: " Dijkstra Terrain Pathfinder",
      description: "A function that computes the surface distance from point A to point B, where points are specified in pixel coordinates (x, y) and surface distance is returned in meters",
      imgUrl: projImg6,
      linkurl:"https://github.com/poojan-2099/Dijkstra_TerrainPathFinder"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have done many professional and academic projects using 
                  NodeJS, PHP, Python, C#, .NET, MAUI integrating ReactJS, AngularJS with databases like mongoDB and MySql.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
          
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
