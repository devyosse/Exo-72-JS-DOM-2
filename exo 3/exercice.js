let div = document.getElementsByClassName('name-tag');

for( let i = 0; i < div.length; i++){
    let paragraph = document.createElement('p');
    paragraph.innerHTML = 'HELLO WORLD !';
    div[i].append(paragraph);
}







