// const declarations
const container = document.getElementById('grid');
const cells = document.getElementsByClassName('cell');
const sml = document.getElementById('small-btn');
const med = document.getElementById('medium-btn');
const lrg = document.getElementById('large-btn');
const eraseBtn = document.getElementById('erase-btn');
const rows = document.getElementsByClassName('rcell');
const f2bBtn = document.getElementById('f2b-btn');

// row and col functions
const makeRows = (height) => {
    for (r = 0; r < height; r++) {
        let rows = document.createElement('div');
        rows.addEventListener('mouseenter', (e)=>{
            event.target.setAttribute('id', 'moused');
        });
        container.appendChild(rows).className = 'rcell';
        
    };
};

const makeColumns = (width) => {
     for(r = 0; r < rows.length; r++) {
        for (c = 0; c < width; c++) {
            let columns = document.createElement('div');
            columns.addEventListener('mouseenter', (e)=>{
                event.target.setAttribute('id', 'moused');
            });
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
};
const setupGridMedium = () => {
    //grid medium = 32 * 52
    height = 32;
    width = 52;
    makeRows(height);
    makeColumns(width);
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
};

const setupGridLarge = () => {
    //grid large = 64 * 104
    height = 64;
    width = 104;
    makeRows(height);
    makeColumns(width);
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
};



// event listeners
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
    const gridArray = Array.from(container.childNodes);
            gridArray.forEach((element) => {
                container.removeChild(element);
            });
})
f2bBtn.addEventListener('click', ()=>{
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach(fade());
});
// misc function(s)
function fade(){
    let currentOpacity = +this.style.opacity;
    if (currentOpacity < 1) currentOpacity += 0.1;
  this.style.opacity = currentOpacity;
};