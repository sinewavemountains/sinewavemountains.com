/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
/*!
* Modified by Studio Kura in 2021
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const options = {method: 'GET'};


    fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=4&collection=sinewavemountains', options)
      .then(response => response.json())
      .then(response => {
          var count = 0;
          response.assets.forEach((asset) => {
              img_asset = document.getElementById('img-asset' + count);
              img_asset.src = asset.image_url;
              img_asset.alt = asset.name;
              info_asset = document.querySelector('#info-asset' + count + ' h4');
              info_asset.innerHTML = asset.name;
              link_asset = document.querySelector('#info-asset' + count + ' p a');
              link_asset.href = asset.permalink;
              count = count + 1;
          });
      })
      // .catch(err => console.error(err));

});
