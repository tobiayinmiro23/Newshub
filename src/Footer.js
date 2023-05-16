import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
          <footer>
             <div class="footer-menu">
                <div class="page-section">
                <h2 class="">Sections</h2>
                <ul class="">
                <li>Headlines</li>
                <li>Local</li>
                <li>Politics</li>
                <li>Health</li>
                <li>Business</li>
                <li>Entertainment</li>
                <li>Environment</li>
                <li>Sports</li>
                <li>Crime</li>
                </ul>
                </div>
                <div class="page-programs">
                <h2 class="">Programmess</h2>
                <ul class="">
                <li> Sunrise Daily</li>
                <li> Sunrise</li>
                <li> Business Morning</li>
                <li>Politics Today</li>
                <li>Sports This Morning</li>
                <li> Hard Copy</li>
                <li>Network Africa</li>
                <li> Aviation This Week</li>
                <li>More Programmes</li>
                </ul>
                </div>
                <div class="page-tv">
                <div>
                <h2 class="app-links">Apps</h2>
                <ul class="">
                <li> Download Android App</li>
                <li> Download for iOS </li>
                </ul>
                </div>
                <div>
                <h2 class="live-links">Social media</h2>
                <ul class="sm-links">
                    <div className="img"><img src="/image/facebook (2).png" alt="" srcset="" /></div>
                    <div className="img"><img src="/image/twitter (3).png" alt="" srcset="" /></div>
                    <div className="img"><img src="/image/instagram (4).png" alt="" srcset="" /></div>
                    <div className="img"><img src="/image/linkedin (3).png" alt="" srcset="" /></div>
                    <div className="img"><img src="/image/youtube (3).png" alt="" srcset="" /></div>
                </ul>
                </div>
                </div>
                <div class="page-about">
                <h2 class="">About Us</h2>
                <ul class="">
                <li> About Channels  </li>
                <li> Meet The Team </li>
                <li>Management </li>
                <li>Presenters </li>
                <li> Contact </li>
                <li> Privacy Policy </li>
                <li>Advertise </li>
                </ul>
                </div>
                </div>
        </footer>
    </div>
  )
}

export default Footer