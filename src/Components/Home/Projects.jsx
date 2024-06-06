import React, { useEffect } from "react";
import "../Style/Projects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import kalikashine from "../assets/image/Kalikashine.png"
import Easybuy from "../assets/image/easybuy.jpeg"
import Passportpal from "../assets/image/Passportpal.png"
import mern from "../assets/image/mern.jpg"
import insta from "../assets/image/insta.jpg"
import Artwallpaper from "../assets/image/Art Wallpaper.png"
import Capmart from "../assets/image/capmart.png"

const Projects = () => {
    useEffect(() => {
        var modalInfo = {
            1: {
                title: "Project 1",
                info: "Company Project with react and full deployment",
                link: "https://www.kalikashineservice.com.np/",
                github: "https://github.com/nirajann/KalikashineService.git"
            },
            2: {
                title: "UrbanSage",
                info: "ecommerce website for with full security features using Mern",
                link: "#",
                github: "https://github.com/nirajann/Urbansage.git"
            },
            3: {
                title: "PassportPal",
                info: "Education App built using Flutter and Firebase for final Project",
                link: "https://github.com/nirajann/PassportPal.git",
                github: "https://github.com/nirajann/PassportPal.git"
            },
            4: {
                title: "Easy Buy",
                info: "Ecommerce Webiste Using Pythong Django",
                link: "#",
                github: "#"
            },
            5: {
                title: "Instagram Clone",
                info: "Instagram Flutter Clone Using Firebase and Flutter",
                link: "https://github.com/nirajann/Instagramflutter-clone.git",
                github: "https://github.com/nirajann/Instagramflutter-clone.git"
            },
       
            6: {
                title: "Capmart",
                info: "Ecommerce App using Flutter and Firebase",
                link: "https://github.com/nirajann/Ecommerce-capmart.git",
                github: "https://github.com/nirajann/Ecommerce-capmart.git"
            },
            7: {
                title: "Art Wallpaper ",
                info: "Wallpaer App using Kotling and Firebase",
                link: "Wallpaer App using Kotling and Firebase",
                github: "https://github.com/nirajann/WallapaperApp.git"
            }
        };

        var modal = document.getElementById('preview');
        var btns = document.getElementsByClassName("p-button");
        var span = document.getElementsByClassName("close")[0];

        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var project = btns[i].parentElement;
                openModal(project);
            });
        }

        function openModal(project) {
            var id = project.id;
            var img = project.getElementsByClassName("p-img")[0].src;
            fillOut(id, img);
            modal.style.display = "block";
            document.getElementsByClassName("modal-content")[0].classList.add("scale");
        }

        function fillOut(id, img) {
            document.getElementById("title").innerHTML = modalInfo[id].title;
            document.getElementById("info").innerHTML = modalInfo[id].info;
            document.getElementById("img").src = img;
            document.getElementById("live").onclick = function () {
                window.open(modalInfo[id].link, '_blank');
            }
            document.getElementById("github").onclick = function () {
                window.open(modalInfo[id].github, '_blank');
            }
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    });

    return (
        <>
            <section className="projects">
                <h1 className="p-h1">Projects</h1>
                <div className="p-container">
                    <div className="item" id="1">
                        <img className="p-img" src={kalikashine} alt=""></img>
                        <div className="text">
                            <h3>Kalika Shine Service</h3>
                            <p>Company Project using REACT</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="2">
                        <img className="p-img" src={mern} alt=""></img>
                        <div className="text">
                            <h3>Security Project</h3>
                            <p>Backend Admin Panel using Mern</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="3">
                        <img className="p-img" src={Passportpal} alt=""></img>
                        <div className="text">
                            <h3>Passportpal</h3>
                            <p>Final Year Project Using Flutter and Firebase</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="4">
                        <img className="p-img" src={Easybuy} alt=""></img>
                        <div className="text">
                            <h3>Easy Buy</h3>
                            <p>E-commerce webiste using Django</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="5">
                        <img className="p-img" src={insta} alt=""></img>
                        <div className="text">
                            <h3>Instagram Clone Using Flutter and Firebase</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="6">
                        <img className="p-img" src={Capmart} alt=""></img>
                        <div className="text">
                            <h3>Capmart</h3>
                            <p>Ecommerce using Flutter</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="6">
                        <img className="p-img" src={Artwallpaper} alt=""></img>
                        <div className="text">
                            <h3>Wallpaper App</h3>
                            <p>Wallpaper App using kotlin</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                </div>
                <div id="preview" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <img id="img" src=""></img>
                        <div id="details">
                            <h3 id="title"></h3>
                            <p id="info">Some text</p>
                            <div className="p-button" id="live">View</div>
                            <FontAwesomeIcon className ="github" icon={faGithubSquare} id="github" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
