var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9},
    {name: 'John', age: 40},
    {name: 'Ann', age: 19},
    {name: 'Elisabeth', age: 16}
    ]
    
    people.forEach(function (teenager) {
        if (teenager.age > 10 && teenager.age < 20){ 
        console.log('There are teenagers:', teenager);
        document.write(('Ellos son Adolescentes', teenager.name + ' Edad:'+ teenager.age) + "<br/>");
        }   
    })
