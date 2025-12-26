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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur voluptas quia assumenda perspiciatis, suscipit consequatur omnis nam explicabo molestiae velit tempore expedita nisi quas, modi aut nostrum maxime excepturi?</p>
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