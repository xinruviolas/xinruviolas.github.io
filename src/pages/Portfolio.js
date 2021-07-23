
import Typewriter from "typewriter-effect";
import '../css/pages.css';
import portrait from "../images/dummyportrait.png"
import Project from "../Project";

function Portfolio() {
    function filterSelection(selection) {
        console.log(selection);
    }
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={"intro"}>
                <img src={portrait} alt="photo of me" className = {"photo"}/>
                <div className = {"introwords"}>
                    Nice to Meet you! My name is
                    <div className={"heading"}>
                        Xinru and I'm
                        <Typewriter
                            onInit={(typewriter)=> {
                                typewriter
                                    .typeString("building this website!")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("(breaking code)")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Super excited you're here <3")
                                    .start();
                            }}
                        />
                    </div>
                    <br/>
                    I'm a senior at <a href="https://brown.edu/" target="_blank" class={"pagelink"}> Brown University</a> studying
                    Music and Computer Science. I'm still building out my website,
                    and I'm excited to show you once I'm done! In the meantime, I can
                    be reached at xinru_li@brown.edu, and you can learn a bit more about my coding projects <a href="https://youtu.be/K6MMCBSUCvg" target="_blank" className={"pagelink"}>here!</a>
                    {/*and you can learn a bit more about me on the <a href="/about" target="_blank" class={"pagelink"}>*/}
                    {/*About Page </a> :D*/}
                    {/*I believe in intersectional innovation, trying new things,*/}
                    {/*and designing a world that is accessible to all!*/}
                </div>
            </div>

            <br/>
            <div className={"projects"}>
                <div className={"filter"}>
                    <text className={"heading"}>My Projects!</text>
                    <ul>
                        <li class="btn active" onClick={filterSelection('all')} >All</li>
                        <li>Software</li>
                        <li>Engineering</li>
                        <li>Product</li>
                        <li>Design</li>
                        <li>DEI</li>
                        <li>Music</li>
                    </ul>
                </div>
                <div className={"myprojects"}>
                    <Project/>
                </div>

            </div>
        </div>
    );
}
export default Portfolio;