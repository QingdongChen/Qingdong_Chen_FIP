




let informations = document.querySelectorAll('.showinformation'),
    lightBox = document.querySelector('#lightbox');

let showinformation = {
        thefirst : {
            texts: "ZIMA",
            inform: "ZIMA",
            bio: "Zima Clearmalt is a clear, lightly carbonated alcoholic beverage manufactured and distributed by Coors Brewing Company or its licensees. Zima means winter in many Slavic languages. It was launched nationwide in 1993 as Zima Clearmalt and was trial-marketed two years ago in cities such as Nashville, Sacramento and Syracuse. The lemon-lime flavored drink was part of the clearness craze of the 1990s, which produced products like Crystal Pepsi and Tab Clear. Early advertising for Zima described it as a truly unique alcoholic beverage and used the tagline Zomething is different.",
            
            
        },
    
        thesecond : {
            texts: "Come and try zima with new packaging and new flavors!",
            inform: "ZIMA",
            bio: "After a period of time, zima meets you again. We have launched a new packaging with better-looking colors, better taste and a cleaner ingredient list. If you want to purchase, you can go to our store or contact us through the email box below to order our products.",
        },
    
        thethird : {
            texts: "We will contact you as soon as possible!",
            inform: "Congratulations on your successful submission",
            bio: "If you want to get in touch with us further, you are welcome to call or come to our store. Our staff will provide you with the services you need.",
            
        }
        
    }

function fillContent() {
    lightBox.querySelector('.name').textContent = showinformation[this.dataset.informations].texts;
    lightBox.querySelector("h3").textContent = showinformation[this.dataset.informations].inform;
    lightBox.querySelector('p').textContent = showinformation[this.dataset.informations].bio;
}

informations.forEach(infor => infor.addEventListener('click', fillContent));

