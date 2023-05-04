const Tags = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) =>
{
    createTags(e.target.value);

    if(e.key == 'Enter'){
        selectRandom();
    }
});

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!== '');

    console.log('input', input);
    console.log('tags', tags);

    Tags.innerHTML = "";

    tags.forEach(t =>{
        const mytag = document.createElement('span');
        mytag.classList.add('tag');
        mytag.innerHTML = t;
        Tags.appendChild(mytag);
    })
}

function LightOn(tag){
    tag.classList.add('highlight');
}
function LightOff(tag){
    tag.classList.remove('highlight');
}
function GetRandomTag(){
    const tagS = document.querySelectorAll('.tag');
    const randomindex = Math.floor(Math.random() * tagS.length)
    return tagS[randomindex];
}
function selectRandom()
{
    const time = 3000;
    const intervalID = setInterval(()=>{
        const randomTag = GetRandomTag();
        LightOn(randomTag);
        setTimeout(() =>{
            LightOff(randomTag);
        },100);
    },100);

    setTimeout(()=>{
        clearInterval(intervalID);
        setTimeout(() =>{
            const randomTag = GetRandomTag();
            LightOn(randomTag);
        },100);
    },time);
}