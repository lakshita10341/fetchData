let buton=document.getElementById('click');
let currentPage =1;
let url='https://reqres.in/api/users';

const chooseTable=()=>{
    showTable(url);
    buton.addEventListener('click',()=>{
        currentPage = currentPage === 1 ? 2 : 1;
        buton.textContent= `Page ${currentPage===1?2:1}`;
        url =`https://reqres.in/api/users?page=${currentPage}`;
        showTable(url);
    });
}

const showTable=(url)=>{
    try {
   
        let promise = fetch(url);
        promise.then((value1) => {
            
            return value1.json();
        }).then((value2) => {
            const users = value2.data;
            console.log(users);
    
            const tbody = document.querySelector('#user-data tbody');
            tbody.innerHTML = '';
            users.forEach(user => {
                const newRow = document.createElement('tr');
                const id = document.createElement('td');
                id.textContent = user.id;
    
                const email = document.createElement('td');
                email.textContent = user.email;
    
                const Name = document.createElement('td');
                Name.textContent = user.first_name + " " + user.last_name;
    
                const avatar = document.createElement('td');
                const avatarImg = document.createElement('img');
                avatarImg.src = user.avatar;
                avatar.appendChild(avatarImg);
    
                newRow.appendChild(id);
                newRow.appendChild(email);
                newRow.appendChild(Name);
                newRow.appendChild(avatar);
                tbody.appendChild(newRow);
            });
        });
    
        
    } catch (error) {
        console.error('Error occurred:', error);
    }
}
chooseTable();
//`${url}&page=${page}`
//DIVIDE IT IN FUNCTTIONS
