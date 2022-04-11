 fetch('https://randomuser.me/api/?results=5').then((data)=>
{
    return data.json();
}).then((data)=>{
    const container = document.getElementById('content-container');
    for (let i = 0; i < data.results.length; i++) {
         const pers = {
         avatarSrc : data.results[i].picture.large,
         fullName : data.results[i].name.first + ' ' + data.results[0].name.second,
         speciality : data.results[i].email,
         description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quo nostrum quidem corrupti placeat, vero laboriosam ratione dolorem
            velit accusantium, itaque odit. Ab dicta delectus necessitatibus
            maiores, beatae amet doloribus.`
     };
      const user = new userCard(pers);
      container.append(user.render(pers));
    }
    

})