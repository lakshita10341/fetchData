let promise=fetch("https://reqres.in/api/users");
promise.then((value1)=>{
  
    return value1.json();
}).then((value2)=>{
    users = value2.data;
    console.log(users);

    const tbody = document.querySelector('#user-data tbody');
    users.forEach(user => {

        
        const newRow = document.createElement('tr');
        const id=document.createElement('td');
        id.textContent=user.id;


        const email=document.createElement('td');
        email.textContent=user.email;

        const FirstName=document.createElement('td');
        FirstName.textContent=user.first_name;

        const LastName=document.createElement('td');
        LastName.textContent=user.last_name;

        const avatar=document.createElement('td');
        const avatarImg=document.createElement('img');
        avatarImg.src= user.avatar;
        avatar.appendChild(avatarImg);
       

        newRow.appendChild(id);
        newRow.appendChild(email);
        newRow.appendChild(FirstName);
        newRow.appendChild(LastName);
        newRow.appendChild(avatar);
        tbody.appendChild(newRow);


        
    });
})
