import {Link} from 'react-router-dom';

const About = ()=>{
    return (<>
        <h1>About Us</h1>
        <h2>We are great</h2>
        <Link to="/">Back to home</Link>
        <p>
            <a href="/">Back to home</a>
        </p>
    </>)
};


export default About;