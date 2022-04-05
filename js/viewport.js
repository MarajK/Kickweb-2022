window.onscroll = function() {
    let articles = document.getElementsByTagName("article");


    for (let i = 0; i < articles.length; i++) {
        let domRect = articles[i].getBoundingClientRect();

        if (domRect.top < window.innerHeight) {
            console.log("ich bin im viewport");
            articles[i].setAttribute("class", "myclass");
            ht
            if (domRect.bottom < 0) {
                console.log("ich bin oben rausgerutscht");
                articles[i].classList.remove("myclass");
            }
        } else {
            console.log("ich bin noch nicht im viewport");
            articles[i].classList.remove("myclass");
        }

    }
};