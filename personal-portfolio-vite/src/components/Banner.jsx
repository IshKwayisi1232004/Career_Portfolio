import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
//import headerImg from "../assets/header-tag.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "CS Undergrad at Southern New Hampshire University", "Software Engineer", "Web Developer", "Embedded Programmer", "Gamer" ];
    const [text, setText] = useState('');
    const [index, setIndex ] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }
        else{
            setIndex(prevIndex => prevIndex + 1);
        }

    }

    useEffect(() => {
        const ticker = setInterval(tick, delta);

        return () => {clearInterval(ticker)};
    }, [text, delta])

    return(
        <section className="banner" id="home">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>{`Hi I'm Ishmael Kwayisi`}</h1>
                        <h2>
                           
                            <span className="wrap">
                                {text}
                            </span>
                        </h2>
                        <p>My passion for coding began in 8th grade during a CoderZ competition and grew into a drive to use technology to help others. I’m now pursuing a career in computer science, with interests in software engineering, full-stack development, UI/UX design, and data analysis.</p>
                        <p>Through school and personal projects, I’ve gained experience in C++, Java, C#, and Python, and I’m learning modern web tools like Vite, React, and Git. My favorite projects are the ones focused that never have an easy solution. Since programming offers an endless number of possibilities to solve problems, I like to explore them all the best I can.</p>
                        <p>Outside of coding, I stay creative and analytical through puzzle-focused games, drawing, creative writing, and working out. These hobbies also allow me to reinforce my perseverance, organization and open-mindedness.</p>
                        <p>I’m currently seeking an internship or entry-level role where I can make meaningful contributions, learn from industry professionals, and help build technology that makes a positive impact on society.
                        And I believe with the growing nature of technology, those aspirations will come true.</p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={headerImg} alt="Header Img" />  */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}