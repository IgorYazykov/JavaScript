color = ['red', 'Orange', 'yellow', 'green', 'rgb(102, 161, 216)', 'rgb(67, 67, 155)', 'rgb(146, 33, 146)']
hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = destination.concat(native, hero);

rainbow = rainbow.reverse();
rainbow.splice (0, 1, 'Richard');
rainbow.splice (3, 0, 'Gave');
rainbow.splice (4, 0, 'Battle');
rainbow.splice (6, 1, 'Vain');

for (i=0; i < rainbow.length; i++){
    document.write(`
        <div class="padding">
            <div class="circle" style="background-color: ${color[i]};"> </div>
            <p class="proverb"> ${rainbow[i]} </p>
        </div>
    `)
}
