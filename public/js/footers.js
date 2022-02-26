Vue.component('footers',{
    template:
                `
                <div>
                    <section class="sales container">
                    <h2 class="visually-hidden">SALES</h2>
                    <ul class="sales__list">
                        <li class="sales__item sales__item-woman">
                                <div class="sales__item-up">
                                    <h3 class="sales__item-title">30% OFF</h3>
                                    <p class="sales__item-text">FOR WOMAN</p>
                                </div>
                        </li>
                        <li class="sales__item sales__item-man">
                            <div class="sales__item-up">
                                <h3 class="sales__item-title">HOT DEAL</h3>
                                <p class="sales__item-text">FOR MAN</p>
                            </div>
                        </li>
                        <li class="sales__item sales__item-kids">
                            <div class="sales__item-up">
                                <h3 class="sales__item-title">NEW ARRIVALES</h3>
                                <p class="sales__item-text">FOR KIDS</p>
                            </div>
                        </li>
                        <li class="sales__item sales__item-shoes">
                            <div class="sales__item-up">
                                <h3 class="sales__item-title">LUXIROUS & TRENDY</h3>
                                <p class="sales__item-text">ACCESORIES</p>
                            </div>
                            </li>
                        </ul>
                    </section>
                    <section class="support">
                    <h2 class="visually-hidden">SUPPORT</h2>
                        <ul class="support__list">
                            <li class="support__item">
                                <img src="./img/support.svg" alt="support">
                                <p class="support__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, 
                                    <span class="support__text-italic">a pulvinar purus condimentum“</span></p>
                            </li>
                            <li class="support__item">
                                <h2 class="support__item-title">SUBSCRIBE</h2>
                                <h2 class="support__item-subtitle">FOR OUR NEWLETTER AND PROMOTION</h2>
                                    <form action="#">
                                    <input class="support__subsribe-text" type="text" placeholder="Enter Your Email">
                                    <button class="support__subsribe-btn">Subscribe</button>
                                    </form>
                            </li>
                        </ul>
                </section>
                <footer class="footer">
                <p class="footer__license">© 2021 Brand All Rights Reserved.</p>
                <ul class="footer__list-icons">
                    <li class="footer__icon">
                        <a href="#"><img src="./img/facebook.svg" alt="facebook"></a>
                    </li>
                    <li class="footer__icon">
                        <a href="#"><img src="./img/instagram.svg" alt="instagram"></a>
                    </li>
                    <li class="footer__icon">
                        <a href="#"><img src="./img/pinterest.svg" alt="pinterest"></a>
                    </li>
                    <li class="footer__icon">
                        <a href="#"><img src="../img/twiter.svg" alt="twiter"></a>
                    </li>
                    </ul>
                </footer>
                </div>
                `
})