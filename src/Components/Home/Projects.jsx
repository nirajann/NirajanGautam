import React, { useEffect } from "react";
import "../Style/Projects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    useEffect(() => {
        var modalInfo = {
            1: {
                title: "Project 1",
                info: "...",
                link: "#",
                github: "#"
            },
            2: {
                title: "Project 2",
                info: "...",
                link: "#",
                github: "#"
            },
            3: {
                title: "Project 3",
                info: "...",
                link: "#",
                github: "#"
            },
            4: {
                title: "Project 4",
                info: "....",
                link: "#",
                github: "#"
            },
            5: {
                title: "Project 5",
                info: "...",
                link: "#",
                github: "#"
            },
            6: {
                title: "Project 6",
                info: "...",
                link: "#",
                github: "#"
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
                        <img className="p-img" src="https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80" alt=""></img>
                        <div className="text">
                            <h3>PROJECT 1</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="2">
                        <img className="p-img" src="https://images.unsplash.com/photo-1496492352121-593138d42a61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3542849cc0459345e3aa82a90ae51a01&auto=format&fit=crop&w=1350&q=80" alt=""></img>
                        <div className="text">
                            <h3>PROJECT 2</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="3">
                        <img className="p-img" src="https://images.unsplash.com/photo-1515215676803-119c88d493cf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=baf00747bfb9fe41ad9af8cf00dbebbf&auto=format&fit=crop&w=1350&q=80" alt=""></img>
                        <div className="text">
                            <h3>PROJECT 3</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="4">
                        <img className="p-img" src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e3be993a88feed38e4f5374ff3ba115&auto=format&fit=crop&w=1350&q=80g" alt=""></img>
                        <div className="text">
                            <h3>PROJECT 4</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="5">
                        <img className="p-img" src="https://images.unsplash.com/photo-1504875427817-937a8a12e167?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd7f399ba43093ead08e7dbf5e083f09&auto=format&fit=crop&w=1434&q=80" alt=""></img>
                        <div className="text">
                            <h3>PROJECT 5</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="p-button">Learn More</div>
                    </div>
                    <div className="item" id="6">
                        <img className="p-img" src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f758b0379f730e73c03b6153aaad7cf1&auto=format&fit=crop&w=1350&q=80" alt=""></img>
                        <div className="text">
                            <h3>PROJECT 6</h3>
                            <p>Short Description</p>
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
