import React from 'react';
import '../Styles/Footer.css'
import instagram from '../../images/footer/instagram.png'
import facebook from '../../images/footer/facebook.png'
import twitter from '../../images/footer/twitter.png'

function Footer() {
  return (
  <footer class="footer">
      <div className='abfooter'>
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <ul>
            <li><a href="#"><i class="fab fa-facebook-f"></i><img src={facebook} alt="" /></a></li>
            <li><a href="#"><i class="fab fa-twitter"><img src={twitter} alt="" /></i></a></li> 
            <li><a href="#"><i class="fab fa-instagram"><img src={instagram} alt="" /></i></a></li> 
            {/* <a href="#"><i class="fab fa-linkedin-in"></i></a> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} South Side Shopping. All rights reserved.</p>
      </div>
      </div>
 </footer>
  );
}

export default Footer;













