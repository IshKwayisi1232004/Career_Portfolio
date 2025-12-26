import {Col, Container, Tab, Row, Nav} from "react-bootstrap";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png";
//import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Project-Not-Zelda",
            description: "IT-145 Project",
            imgUrl: projImg1,
        },
        {
            title: "Crown of Exodus",
            description: "CS-250 Project",
            imgUrl: projImg2,
        },
        {
            title: "E-Commerce Site",
            description: "Personal Project",
            imgUrl: projImg3,
        },
        {
            title: "Portfolio Website",
            description: "Personal Project",
            imgUrl: projImg1,
        },
        {
            title: "Water Project",
            description: "EG-110 Project",
            imgUrl: projImg2,
        },
        {
            title: "Untitled Project",
            description: "Capstone",
            imgUrl: projImg3,
        },
    ];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus error saepe sed, cum culpa similique suscipit, nam, quisquam nostrum repudiandae iusto aliquid. Esse aspernatur perferendis rem vitae, harum beatae?</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                    Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
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
                                <Tab.Pane eventKey="second">
                                    Loren Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Loren Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img> 
        </section>
    )

}