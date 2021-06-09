
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
                    <div className={"heading"}>
                        <Typewriter
                            onInit={(typewriter)=> {
                                typewriter
                                    .typeString("hello!")
                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("heyoooooo~~~")
                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("WELCOME!!!")
                                    .start();
                            }}
                        />
                    </div>
                    <br/>
                    My name is Xinru (pronounced "shin-rue") and I'm a magician (because I wave a stick as a conductor and
                    I build things get it hehe) from Chicago, IL. When I'm not working on my various <a
                    href="/" target="_blank" className={"pagelink"}> side projects </a> I like thinking
                    about ways we could solve societal problems using the intersection of equity, design, and technology.

                    <br/> <br/> Currently I'm
                    working at <a href="https://www.google.com/" target="_blank" className={"pagelink"}> Google</a>  on their Ads product,
                    teaching a <a href="http://cs.brown.edu/courses/cs016/"target="_blank" className={"pagelink"}>CS
                    intro course</a> at <a href="https://www.brown.edu/"target="_blank" className={"pagelink"}>Brown University</a>,
                    thinking through literacy and educational equity with <a href="https://www.teachingbuddies.org/"target="_blank" className={"pagelink"}>
                    Teaching Buddies </a>, and trying to become a plant mom!

                </div>
            </div>

        </div>
    );
}
export default Portfolio;