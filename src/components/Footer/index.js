import React, { PureComponent } from 'react';

export default class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <footer>

                <div class="footer-links">
                    <h5 class="footer-link--title">Quick Link</h5>
                    <ul>
                        <li><a class="footer-link" href="">News</a></li>
                        <li><a class="footer-link" href="">Agency</a></li>
                        <li><a class="footer-link" href="">Store</a></li>
                        <li><a class="footer-link" href="">Grid</a></li>
                    </ul>
                </div>



                <div class="footer-links">
                    <h5 class="footer-link--title">Information</h5>
                    <ul>
                        <li><a class="footer-link" href="index.html">Home</a></li>
                        <li><a class="footer-link" href="">Features</a></li>
                        <li><a class="footer-link" href="about_us.html">About Us</a></li>
                        <li><a class="footer-link" href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-contact">
                    <h5 class="footer-link--title">Contact us</h5>
                    <div class="contact-method">
                        <p>72 Kangnam, 45 Opal Point Suite 391, UK</p>
                        <p>contact@pisen.com</p>
                    </div>
                    <div class="social-contact"><a class="icon-btn" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a><a class="icon-btn" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a><a class="icon-btn" href="https://twitter.com/"><i class="fab fa-twitter"></i></a><a class="icon-btn" href="https://dribbble.com/"><i class="fab fa-dribbble"></i></a></div>
                </div>

                <div class="col-lg-4">
                    <h5 class="footer-link--title">Subscribe To Our Mailing List </h5>
                    <form action="" method="post">
                        <div class="email-form">
                            <input class="input-form" type="text" placeholder="Enter Your Mail" />
                            <button> <i class="fas fa-paper-plane"></i></button>
                        </div>
                        <div class="read-policy">
                            <input type="checkbox" id="read" />
                            <label for="read">I've read and accept the Privacy Policy</label>
                        </div>
                    </form>
                </div>
            </footer>
        );
    }
}
