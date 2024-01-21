const mainDiv = document.createElement('div');
mainDiv.className = 'wrapper';
for (let i = 2; i <= 14; i++) {
    for (let j = 1; j <= 4; j++) {
        let divCard = document.createElement('div');
        divCard.className = 'card';
        let divCardTop = document.createElement('div');
        divCardTop.className = 'card__info';
        let divCardBottom = document.createElement('div');
        divCardBottom.className = 'card__info';
        let imgTop = document.createElement('img');
        let imgBottom = document.createElement('img');
        let imgPerson = document.createElement('img');
        imgPerson.className = 'person';

        let imgLink = '';
        let imgLinkPerson = '';
        let cardFlag = '';

        switch (j) {
            case 1: {
                imgLink = 'images/clubs.svg';
                break;
            }
            case 2: {
                imgLink = 'images/diamonds.svg';
                break;
            }
            case 3: {
                imgLink = 'images/hearts.svg';
                break;
            }
            case 4: {
                imgLink = 'images/spades.svg';
                break;
            }
            default: {
                imgLink = 'images/spades.svg';
                break;
            }
        }

        switch (i) {
            case 11: {
                cardFlag = 'J';
                divCard.className = 'card card--person';
                imgLinkPerson = 'images/jack.svg';
                break;
            }
            case 12: {
                cardFlag = 'Q';
                divCard.className = 'card card--person';
                imgLinkPerson = 'images/queen.svg';
                break;
            }
            case 13: {
                cardFlag = 'K';
                divCard.className = 'card card--person';
                imgLinkPerson = 'images/king.svg';
                break;
            }
            case 14: {
                cardFlag = 'T';
                divCard.className = 'card card--person';
                imgLinkPerson = imgLink;
                break;
            }
            default: {
                cardFlag = i;
                break;
            }
        }
        divCardTop.innerHTML = cardFlag ? cardFlag : i;
        divCardBottom.innerHTML = cardFlag ? cardFlag : i;

        imgTop.src = imgLink;
        imgPerson.src = imgLinkPerson;
        imgBottom.src = imgLink;

        divCardTop.appendChild(imgTop);
        divCardBottom.appendChild(imgBottom);

        divCard.appendChild(divCardTop);
        divCard.appendChild(imgPerson);
        divCard.appendChild(divCardBottom);

        mainDiv.appendChild(divCard);
    }
}
document.body.appendChild(mainDiv);
