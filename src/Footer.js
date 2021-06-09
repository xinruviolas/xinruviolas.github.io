
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { fileTextO } from "react-icons-kit/fa/fileTextO";
import { githubSquare } from "react-icons-kit/fa/githubSquare";
import { envelope } from "react-icons-kit/fa/envelope";
import Icon from "react-icons-kit";
import "./css/Footer.css"
import resume from "./Xinru_Li.pdf"
import MyNavbar from "./MyNavbar";

const date = new Date();

const links = [
    {
        link: "http://linkedin.com/in/xinruli",
        type: "li",
    },
    {
        link: "https://github.com/xinruviolas",
        type: "github",
    },
    {
        link: resume,
        type: "resume",
    },
    {
        link: "mailto:xinru_li@brown.edu",
        type: "email",
    },
];

const iconMap = {
    li: <div className={"icons"}> <Icon icon={linkedinSquare} size={30} /> </div>,
    github: <div className={"icons"}> <Icon icon={githubSquare} size={30} /> </div>,
    resume:  <div className={"icons"}> <Icon icon={fileTextO} size={30} /> </div>,
    email:  <div className={"icons"}>  <Icon icon={envelope} size={30} /> </div>,
};

function Footer() {
    return (
        <footer className={"footer"}>
        <br/>
        <br/>
        <br/>
            <ul className={"list"}>
                {links.map((e, i) => {
                    const currIcon = iconMap[e.type];
                    return (
                        <li className={"horizontal"} key={i}>
                            <a
                                href={e.link}
                                target="_blank"
                                className={"logos"}
                            >
                                {currIcon}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div className={"footertext"}>
                © {date.getFullYear()} made with ❤️ (and a vast amount of sugar) by Xinru Li
            </div>
            <br/>
        </footer>
    );
}

export default Footer;