    CardSuit = ['clubs','spades','diamonds','hearts'];
    CardNumber = ['2','3','4','5','6','7','8','9','10','J','Q','K','T'];
    CardImg = ['jack','queen','king'];
    ValueForPersone = 0;

    document.write(`<div class="wrapper">`);

    for (i=0; i<13 ; i++){
        for (j=0; j<4 ; j++){
            if( i<9 ) {
                document.write(`
                <div class="card">
                    <div class="card__info">${CardNumber[i]}<img src="images/${CardSuit[j]}.svg" alt="hearts"></div>
			        <div class="card__info">${CardNumber[i]}<img src="images/${CardSuit[j]}.svg" alt="hearts"></div>
                </div>
                `);
            } else if( i>=9 && i<=11 ) {
                document.write(`
                <div class="card card--person">
			        <div class="card__info">${CardNumber[i]}<img src="images/${CardSuit[j]}.svg" alt="clubs"></div>
			        <img class="person" src="images/${CardImg[ValueForPersone]}.svg" alt="clubs">
			        <div class="card__info">${CardNumber[i]}<img src="images/${CardSuit[j]}.svg" alt="clubs"></div>
		        </div>
                `);
                if( j == 3 ){
                    ValueForPersone ++;
                }
            } else {
                document.write(`
                <div class="card card--person">
			        <div class="card__info">${CardNumber[i]}<img src="images/${CardSuit[j]}.svg" alt="clubs"></div>
			        <img class="person" src="images/${CardSuit[j]}.svg" alt="clubs">
			        <div class="card__info">${CardNumber[i]}<img src="images/${CardSuit[j]}.svg" alt="clubs"></div>
		        </div>
                `);
            };
        };

    };

    document.write('</div>');