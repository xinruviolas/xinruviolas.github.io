
import Typewriter from "typewriter-effect";
import '../css/pages.css';

function Portfolio() {
    return (
        <div>
            <div className={"intro"}>
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
                I believe in intersectional innovation, trying new things,
                and designing a world that is accessible to all!
            </div>
        </div>

    );
}
export default Portfolio;