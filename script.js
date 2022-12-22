let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(img_src){
    const Tr = this.map(function(hero){
        let nameHeroes = hero.name;
        nameHeroes = nameHeroes.toLowerCase().replaceAll(" ","");
        return `
            <tr>
                <td>
                    <p>${hero.name}</p>
                </td>
                <td>
                    <img src="images/${img_src}/${nameHeroes}.svg" alt="hero">
                </td>
            </tr>
        `
    })
    
    document.write(`
        <table border="2" bordercolor="#000000" cellspacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                ${Tr}
            </tbody>
        </table>
    `)
};



marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");