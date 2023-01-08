const footerContent = document.querySelector("footer");

footerContent.innerHTML += `

<div class="footer-container flex space-around">
        <!-- First row -->
        <div>
          <h2>contact</h2>
          <ul>
            <li>Nasjonal Gaten 19, Kristiania</li>
            <li>Contact@agerupdesign.no</li>
            <li>+47 123 45 678</li>
          </ul>
        </div>

        <div>
          <h2>About</h2>
          <ul>
            <li class="link"><a href="history.html">History</a></li>
            <li class="link"><a href="ourmission.html">Our Mission</a></li>
          </ul>

          <h2>Follow</h2>
          <ul>
            <li class="link"><a target="_blank" href="https://www.instagram.com">Intsagram</a></li>
            <li class="link"><a target="_blank" href="https://www.facebook.com">Facebook</a></li>
          </ul>
        </div>

        <div>
          <h2>Subscribe</h2>
          <ul>
            <li>• Get weekly deals</li>
            <li>• Join fun competitions</li>
            <li>• Monthly news letters</li>
          </ul>

          <form class="flex column" method="POST">
            <label class="li_foot" for="email">Email</label>
            <input type="email" id="email" name="Email" />
            <input type="submit" value="Subscribe" class="cta cta-large" />
          </form>
        </div>
      </div>
      `;
