import React from "react";

const App = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <nav className="navbar">
                        <div className="logo">
                            <img src="images/logo.svg" alt="logo" />
                        </div>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Careers
                                </a>
                            </li>
                        </ul>
                        <button className="btn">Request Invite</button>
                        <div className="nav-toggler">
                            <img src="images/icon-hamburger.svg" alt="menu icon" className="show" />
                            <img src="images/icon-close.svg" alt="close icon" className="show" />
                        </div>
                    </nav>
                </div>

                <div className="hero-text">
                    <h1 className="heading-primary">Next generation digital banking</h1>
                    <p className="text">
                        Take you financial life online. Your Easybank account will be a one-stop-shop for
                        spending, saving, budgeting, investing, and much more
                    </p>
                    <button className="btn">Request Invite</button>
                </div>
                <img src="images/bg-intro-desktop.svg" alt="hero image" className="hero-image desktop" />
                <img src="images/bg-intro-mobile.svg" alt="hero image" className="hero-image mobile" />
            </header>

            <section className="features-section">
                <h2 className="heading-secondary">Why choose Easybank?</h2>
                <p className="text">
                    We leverage Open Banking to turn your bank account into your financial hub. <br />
                    Control your finances like never before.
                </p>
                <div className="col-4">
                    {/* Feature */}
                    <div className="feature">
                        <img src="images/icon-online.svg" alt="online icon" className="feature-img" />
                        <h3 className="heading-tertiary">Online Banking</h3>
                        <p className="text">
                            Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.
                        </p>
                    </div>
                    {/* Feature */}
                    <div className="feature">
                        <img src="images/icon-online.svg" alt="online icon" className="feature-img" />
                        <h3 className="heading-tertiary">Online Banking</h3>
                        <p className="text">
                            Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.
                        </p>
                    </div>
                    {/* Feature */}
                    <div className="feature">
                        <img src="images/icon-online.svg" alt="online icon" className="feature-img" />
                        <h3 className="heading-tertiary">Online Banking</h3>
                        <p className="text">
                            Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.
                        </p>
                    </div>
                    {/* Feature */}
                    <div className="feature">
                        <img src="images/icon-online.svg" alt="online icon" className="feature-img" />
                        <h3 className="heading-tertiary">Online Banking</h3>
                        <p className="text">
                            Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.
                        </p>
                    </div>
                </div>
            </section>

            <section className="articles-sections">
                <h2 className="heading-secondary">Latest Articles</h2>
                <div className="col-4">
                    {/* Card */}
                    <article className="card">
                        <img src="images/currency.jpg" alt="currency image" className="card-img" />
                        <div className="article-author">By Claire Robinson</div>
                        <h3 className="heading-tertiary">Receive money in any currency with no fee</h3>
                        <p className="text">
                            The world is getting smaller and we're becoming more mobile. So why should you be
                            forced to only receive money in a single ...
                        </p>
                    </article>
                    {/* Card */}
                    <article className="card">
                        <img src="images/currency.jpg" alt="currency image" className="card-img" />
                        <div className="article-author">By Claire Robinson</div>
                        <h3 className="heading-tertiary">Receive money in any currency with no fee</h3>
                        <p className="text">
                            The world is getting smaller and we're becoming more mobile. So why should you be
                            forced to only receive money in a single ...
                        </p>
                    </article>
                    {/* Card */}
                    <article className="card">
                        <img src="images/currency.jpg" alt="currency image" className="card-img" />
                        <div className="article-author">By Claire Robinson</div>
                        <h3 className="heading-tertiary">Receive money in any currency with no fee</h3>
                        <p className="text">
                            The world is getting smaller and we're becoming more mobile. So why should you be
                            forced to only receive money in a single ...
                        </p>
                    </article>
                    {/* Card */}
                    <article className="card">
                        <img src="images/currency.jpg" alt="currency image" className="card-img" />
                        <div className="article-author">By Claire Robinson</div>
                        <h3 className="heading-tertiary">Receive money in any currency with no fee</h3>
                        <p className="text">
                            The world is getting smaller and we're becoming more mobile. So why should you be
                            forced to only receive money in a single ...
                        </p>
                    </article>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-socials">
                    <div className="logo">
                        <img src="images/logo.svg" alt="logo" className="footer-logo" />
                    </div>
                    {/* Footer socials */}
                    <div className="footer-socials">
                        <a href="/" className="footer-social">
                            <img src="images/icon-facebook.svg" alt="facebook" />
                        </a>
                        <a href="/" className="footer-social">
                            <img src="images/icon-youtube.svg" alt="youtube" />
                        </a>
                        <a href="/" className="footer-social">
                            <img src="images/icon-twitter.svg" alt="twitter" />
                        </a>
                        <a href="/" className="footer-social">
                            <img src="images/icon-pinterest.svg" alt="pinterest" />
                        </a>
                        <a href="/" className="footer-social">
                            <img src="images/icon-instagram.svg" alt="instagram" />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <a href="/" className="footer-link">
                        About Us
                    </a>
                    <a href="/" className="footer-link">
                        Contact
                    </a>
                    <a href="/" className="footer-link">
                        Blog
                    </a>
                    <a href="/" className="footer-link">
                        Careers
                    </a>
                    <a href="/" className="footer-link">
                        Support
                    </a>
                    <a href="/" className="footer-link">
                        Privacy Policy
                    </a>
                </div>
                <div className="copyrights">
                    <button className="btn">Request Invite</button>
                    <p>&copy; Easybank. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
