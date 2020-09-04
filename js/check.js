var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9},
    {name: 'John', age: 40},
    {name: 'Ann', age: 19},
    {name: 'Elisabeth', age: 16}
    ]
    
    document.write('<h3>Adolescentes</h3>');
    document.write('<hr>');
    people.forEach(function (teenager) {
        if (teenager.age > 10 && teenager.age < 20){ 
        console.log('There are teenagers:', teenager);
        document.write(('<h4>There are teenagers:</h4>', teenager ,teenager.name + ' edad:'+ teenager.age) + "<br/>");
        }   
    })