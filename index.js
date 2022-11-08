const {hash} = window.location;
const decrypted = atob(hash.replace('#',''))
if(decrypted){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML = decrypted;
} 

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault();
    const messageFrom = document.querySelector('#message-form');
    messageFrom.classList.add('hide');
    const messageLink = document.querySelector('#message-link');
    messageLink.classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    const location = window.location;
    const linkInput = document.querySelector('#link-input');
   
    linkInput.value = `${location}#${encrypted}`;
    linkInput.select();
   
})