
import Typewriter from "typewriter-effect";
import '../css/pages.css';
import portrait from "../images/dummyportrait.png"
import Project from "../Project";

function Portfolio() {
    return (
        <div>
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
                    I'm still building out my website,
                    and I'm excited to show you once I'm done! In the meantime, I can
                    be reached at xinru_li@brown.edu :D
                    {/*I believe in intersectional innovation, trying new things,*/}
                    {/*and designing a world that is accessible to all!*/}
                </div>
            </div>

            <br/>
            <div className={"projects"}>
                <div className={"filter"}>
                    <text className={"heading"}>My Projects!</text>
                    <ul>
                        <li>All</li>
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