import profilepic from './assets/profile.JPG';

export default function Header() {
    return (
        <>
            <header className="text-white">
                <div className="container-fluid bg-dark">
                    <div className="row">
                        <div className="col-lg-5 profile">
                            <div
                                className="justify-content-center card profile d-flex flex-row align-items-center p-3 text-center"
                                style={{width: "100%", height: "100%"}}
                            >
                                <img
                                    src={profilepic}
                                    className="rounded-circle me-3"
                                    alt="Profile Picture"
                                    style={{width: 100, height: 100, objectFit: "cover"}}
                                />
                                <div className="d-flex flex-column">
                                    <h5 className="card-title mb-1">Sabith Ahmed</h5>
                                    <p className="card-text mb-2">Aspiring Web Developer</p>
                                    <div className="d-flex flex-column gap-1">
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/sabith-ahmed-185284164/"
                                            className="card-link profile-link"
                                        >
                                            <i className="bi bi-linkedin"/> LinkedIn
                                        </a>
                                        <p>
                                            <i className="bi bi-envelope-at-fill"/>{" "}
                                            sabithahmed128@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col text-center d-flex flex-column justify-content-center"
                            style={{height: 200}}
                        >
                            <h1>My Projects</h1>
                            <p>
                                Some small FrontEnd projects I built using HTML, CSS, JS and free APIs. This website
                                itself is built with React JS (Version 19.2)
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}