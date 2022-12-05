let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

function convertionToMinute (array){  
    array.forEach(function(item){
        item[1] /= 60;
    });
    return array;
};

function moreTwoHour (array){
  let resArray = array.filter(function(item){
    return item[1] > 2;
  });
  return resArray;
};

function newItem (array,amount){
  let resArray = array.map (function(item){
    item = item.concat(item[1] * amount);
    return item;
  })
  return resArray;
};

function table (array){
  array.forEach(function(item){
    document.write(`
      <tr>
        <td>Task name: ${item[0]}</td>
        <td>Taks duration: ${item[1]} hours</td>
        <td>Task amount: $${item[2]}</td>
      </tr>
    `);
  });
};

let MondayAlredy = convertionToMinute (monday);
let TuesdayAlredy = convertionToMinute (tuesday);
MondayAlredy = moreTwoHour(MondayAlredy);
TuesdayAlredy = moreTwoHour(TuesdayAlredy);
MondayAlredy = newItem (MondayAlredy,amount);
TuesdayAlredy = newItem (TuesdayAlredy,amount);

document.write(`<table>`);
table(MondayAlredy);
table(TuesdayAlredy);
document.write(`</table>`);