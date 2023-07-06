import React, { useState } from "react";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-container">
                            <div className="logo">
                                <img src="images/logo.svg" alt="logo" />
                            </div>
                            <ul className={`nav-list ${isMenuOpen && "show-menu"}`}>
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
                            <div onClick={toggleMenuHandler} className="nav-toggler">
                                <img src="images/icon-hamburger.svg" alt="menu icon" className="show" />
                                <img src="images/icon-close.svg" alt="close icon" className="" />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`overlay ${isMenuOpen && "show-menu"}`}></div>

                <div className="hero-section">
                    <div className="container">
                        <div className="hero-container">
                            <div className="hero-text">
                                <h1 className="heading-primary">Next generation digital banking</h1>
                                <p className="text">
                                    Take you financial life online. Your Easybank account will be a
                                    one-stop-shop for spending, saving, budgeting, investing, and much more
                                </p>
                                <button className="btn">Request Invite</button>
                            </div>
                            <div className="hero-image">
                                <img
                                    src="images/bg-intro-desktop.svg"
                                    alt="hero image"
                                    className=" desktop"
                                />
                                <img src="images/bg-intro-mobile.svg" alt="hero image" className=" mobile" />
                                <img src="images/image-mockups.png" alt="mobiles" className="hero-mobiles" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="features-section">
                <div className="container">
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
                            <p className="text text-sm">
                                Our modern web and mobile applications allow you to keep track of your
                                finances wherever you are in the world.
                            </p>
                        </div>
                        {/* Feature */}
                        <div className="feature">
                            <img src="images/icon-budgeting.svg" alt="online icon" className="feature-img" />
                            <h3 className="heading-tertiary">Simple Budgeting</h3>
                            <p className="text text-sm">
                                See exactly where your money goes each month. Receive notifications when
                                you're close to hitting your limits.
                            </p>
                        </div>
                        {/* Feature */}
                        <div className="feature">
                            <img src="images/icon-onboarding.svg" alt="online icon" className="feature-img" />
                            <h3 className="heading-tertiary">Fast Onboarding</h3>
                            <p className="text text-sm">
                                We don't do branches. Open your account in minutes online and start taking
                                control of your finances right away.
                            </p>
                        </div>
                        {/* Feature */}
                        <div className="feature">
                            <img src="images/icon-api.svg" alt="online icon" className="feature-img" />
                            <h3 className="heading-tertiary">Open API</h3>
                            <p className="text text-sm">
                                Manage your savings, investments, pension, and much more from one account.
                                Tracking your money has never been easier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="articles-section">
                <div className="container">
                    <h2 className="heading-secondary">Latest Articles</h2>
                    <div className="col-4">
                        {/* Card */}
                        <article className="card">
                            <div className="card-img">
                                <img src="images/image-currency.jpg" alt="currency image" className="" />
                            </div>

                            <div className="card-body">
                                <div className="article-author">By Claire Robinson</div>
                                <h3 className="card-heading">Receive money in any currency with no fee</h3>
                                <p className="text text-xs">
                                    The world is getting smaller and we're becoming more mobile. So why should
                                    you be forced to only receive money in a single ...
                                </p>
                            </div>
                        </article>
                        {/* Card */}
                        <article className="card">
                            <div className="card-img">
                                <img src="images/image-restaurant.jpg" alt="currency image" className="" />
                            </div>
                            <div className="card-body">
                                <div className="article-author">By Wilson Hutton</div>
                                <h3 className="card-heading">Treat yourself without worrying about money</h3>
                                <p className="text text-xs">
                                    Our simple budgetting feature allows you to separate out your spending and
                                    set realistic limits each month. That means you ...
                                </p>
                            </div>
                        </article>
                        {/* Card */}
                        <article className="card">
                            <div className="card-img">
                                <img src="images/image-plane.jpg" alt="currency image" className="" />
                            </div>
                            <div className="card-body">
                                <div className="article-author">By Wilson hutton</div>
                                <h3 className="card-heading">Take your Easybank card wherever you go</h3>
                                <p className="text text-xs">
                                    We want you to enjoy your travels. This is why we don't charge any fees on
                                    purchases while you're abroad. We'll even show you ...
                                </p>
                            </div>
                        </article>
                        {/* Card */}
                        <article className="card">
                            <div className="card-img">
                                <img src="images/image-confetti.jpg" alt="currency image" className="" />
                            </div>

                            <div className="card-body">
                                <div className="article-author">By Claire Robinson</div>
                                <h3 className="card-heading">Our invite-only Beta accounts are now live!</h3>
                                <p className="text text-xs">
                                    After a lot of hard work by the whole team, we're excited to launch our
                                    closed beta. It's easy to request an invite through the site ...
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-socials">
                            <div className="logo">easybank</div>
                            {/* Footer socials */}
                            <div className="footer-social-list">
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
                            <div className="footer-links-1">
                                <a href="/" className="footer-link">
                                    About Us
                                </a>
                                <a href="/" className="footer-link">
                                    Contact
                                </a>
                                <a href="/" className="footer-link">
                                    Blog
                                </a>
                            </div>
                            <div className="footer-links-1">
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
                        </div>
                        <div className="copyrights">
                            <button className="btn">Request Invite</button>
                            <p>&copy; Easybank. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
