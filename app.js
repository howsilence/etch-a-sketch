// const declarations
const container = document.getElementById('grid');
const sml = document.getElementById('small-btn');
const med = document.getElementById('medium-btn');
const lrg = document.getElementById('large-btn');
const eraseBtn = document.getElementById('erase-btn');
const rows = document.getElementsByClassName('rcell');
const f2bBtn = document.getElementById('f2b-btn');
const colorBtn = document.getElementById('color-btn');
const grayBtn = document.getElementById('gray-btn');




// row and col functions
const makeRows = (height) => {
    for (r = 0; r < height; r++) {
        let rows = document.createElement('div');     
        container.appendChild(rows).className = 'rcell';
        
    };
};

const makeColumns = (width) => {
     for(r = 0; r < rows.length; r++) {
        for (c = 0; c < width; c++) {
            let columns = document.createElement('div');
            container.appendChild(columns).className = "ccell";
            };
        };
    };


// create grid functions
const setupGridSmall = () => {
    //grid small = 16 * 26
    height = 16;
    width = 26;
    makeRows(height);
    makeColumns(width);
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    pointerStyle();
};
const setupGridMedium = () => {
    //grid medium = 32 * 52
    height = 32;
    width = 52;
    makeRows(height);
    makeColumns(width);
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    pointerStyle();
};

const setupGridLarge = () => {
    //grid large = 64 * 104
    height = 64;
    width = 104;
    makeRows(height);
    makeColumns(width);
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    pointerStyle();
};

// default load function
window.onload = setupGridSmall();


// button event listeners
sml.addEventListener('click', ()=>{
    const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                container.removeChild(element);
            });
    setupGridSmall();
});
med.addEventListener('click', ()=>{
    const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                container.removeChild(element);
            });
    setupGridMedium();
});
lrg.addEventListener('click', ()=>{
    const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                container.removeChild(element);
            });
    setupGridLarge();
});
eraseBtn.addEventListener('click', ()=>{
    f2bBtn.disabled = false;
    colorBtn.disabled = false;
    const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                container.removeChild(element);
            });
    setupGridSmall();
    pointerStyle();
});
f2bBtn.addEventListener('click',  e => {
        f2bBtn.disabled = true;
        colorBtn.disabled = false;
        grayBtn.disabled = false;
        pointerStyle();
});
colorBtn.addEventListener('click', e => {
    f2bBtn.disabled = false;
    colorBtn.disabled = true;
    grayBtn.disabled = false;
    pointerStyle();
});
grayBtn.addEventListener('click', e =>{
    f2bBtn.disabled = false;
    colorBtn.disabled = false;
    grayBtn.disabled = true;
    pointerStyle();
});
// hoisted functions
function pointerStyle(){
    if (f2bBtn.disabled == true){
        console.log('fader active!');
        const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                element.removeEventListener('mouseenter', techniColor);
                element.removeEventListener('mouseenter', normalColor);
                element.addEventListener('mouseenter', fader);
            });
    } else if (colorBtn.disabled == true){
        console.log('color active!');
        const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                element.removeEventListener('mouseenter', fader);
                element.removeEventListener('mouseenter', normalColor);
                element.addEventListener('mouseenter', techniColor);
            });
    } else if (grayBtn.disabled == true) {
        console.log('default active!');
        const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                element.removeEventListener('mouseenter', fader);
                element.removeEventListener('mouseenter', normalColor);
                element.addEventListener('mouseenter', normalColor);
            });
    } else {
        console.log('default active!');
        const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                element.removeEventListener('mouseenter', fader);
                element.removeEventListener('mouseenter', normalColor);
                element.addEventListener('mouseenter', normalColor);
    });
}};
function randomColorGen(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};
function normalColor(e){
    e.target.style.backgroundColor = "rgb(122, 122, 122)";
    e.target.style.opacity = 1;
};
function techniColor(e){
    e.target.style.backgroundColor = '#' + randomColorGen();
    e.target.style.opacity = 1;
};
function fader(e){
    e.target.style.backgroundColor = "rgb(122, 122, 122)";
    e.target.style.opacity = 0.2;
    e.target.count += 1;
    e.target.style.opacity = 0.2 * e.target.count;
}