sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

Summer_sports = sports.slice(5,12);
Winter_sports = sports.slice(0,5);

Fruits = Winter_sports.splice(2,1).concat (Summer_sports.splice(2,1));
Fruits = Fruits.concat (Summer_sports.splice(2,1));

Title = ['*** Winter sports ***','*** Summer sports ***','*** Fruits ***']
allArr = [Winter_sports , Summer_sports , Fruits];

for ( j =0 ; j<allArr.length;j++){
    console.log(Title[j]);
    for (i=0 ; i<allArr[j].length ;i++){
        console.log(`${allArr[j][i][0]}: ${allArr[j][i][1]}`);
    }
    console.log("");
}