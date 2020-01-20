window.onload = function () {
    //Активация блоков по клику
    function activeBlock (nameOfClass, nameOfClassChange) {
        let arr = document.getElementsByClassName(nameOfClass);
        for (let item of arr) {
            item.addEventListener("click", () => {
                if (item.className.indexOf(nameOfClassChange) !== -1) {
                    item.classList.remove(nameOfClassChange);
                } else {
                    item.classList.add(nameOfClassChange);
                }
            });
        }
    }
    activeBlock("cell", "active");
    activeBlock("info__block", "active__block");

    //Слайдер
    function slider (idOfPrevButton, idOfNextButton, idOfSlides, classOfActiveSlide, idOfRound, idOfActiveRound) {
        const prevButton = document.getElementById(idOfPrevButton);
        const nextButton = document.getElementById(idOfNextButton);
        let slideImages = ["Rectangle.jpg", "zaliv.jpg", "norilsk.jpg", "magadan.jpg"];
        let activeTextId = 1;
        nextButton.addEventListener("click", () => {
            if (activeTextId === 4) {
                activeTextId = 1;
            } else {
                activeTextId++;
            };
            if (idOfNextButton == "next") {
                document.getElementById("first_screen").style.backgroundImage = `url(./img/${slideImages[activeTextId - 1]})`; 
            };

            document.getElementById(idOfSlides + String(activeTextId == 1 ? 4 : activeTextId - 1)).classList.remove(classOfActiveSlide);
            document.getElementById(idOfSlides + String(activeTextId)).classList.add(classOfActiveSlide);    
            
            document.getElementById(idOfRound + String(activeTextId == 1 ? 4 : activeTextId - 1)).classList.remove(idOfActiveRound);
            document.getElementById(idOfRound + String(activeTextId)).classList.add(idOfActiveRound); 
        });
        prevButton.addEventListener('click', () => {
            if (activeTextId === 1) {
                activeTextId = 4;
            } else {
                activeTextId--;
            };
            if (idOfPrevButton == "prev") {
                document.getElementById("first_screen").style.backgroundImage = `url(./img/${slideImages[activeTextId - 1]})`; 
            };
            document.getElementById(idOfSlides + String(activeTextId == 4 ? 1 : activeTextId + 1)).classList.remove(classOfActiveSlide);
            document.getElementById(idOfSlides + String(activeTextId)).classList.add(classOfActiveSlide);

            document.getElementById(idOfRound + String(activeTextId == 4 ? 1 : activeTextId + 1)).classList.remove(idOfActiveRound);
            document.getElementById(idOfRound + String(activeTextId)).classList.add(idOfActiveRound); 
        });
    }
    slider("prev", "next", "text", "active", "round", "round_active");
    slider("client_prev_button", "client_next_button", "client", "client__active", "id_client", "round__c_a");
    slider("tf_prev_button", "tf_next_button", "tf", "active_tf", "tf_but", "round__c_a");
}