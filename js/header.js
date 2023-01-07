const headerContent = document.querySelector("header");

headerContent.innerHTML += `

 <div class="container flex row">
        <div class="main_logo">
          <a href="index.html">
            <img src="images/AD_logo.png" alt="Site logo" />
          </a>
          <p class="logo-text">
          PREMIUM DESIGN
          </p>
        </div>
        <label for="hamburger_menu"><i class="fas fa-bars"></i></label>
        <input type="checkbox" id="hamburger_menu" />
        <nav>
          <ul class="categories">
            <li><a href="products.html#furniture">Furniture</a></li>
            <li><a href="products.html#lighting">Lighting</a></li>
            <li><a href="products.html#accessories">Accessories</a></li>
            <li>
              <a href="cart.html"><i class="fas fa-shopping-cart"></i></a>
            </li>
          </ul>
        </nav>
      </div>
      
      `;
