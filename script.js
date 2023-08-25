let baliSex = document.getElementById("balisex");
let webHelp = document.getElementById("webhelp");
let tp = document.getElementById("tp");
let limoStar = document.getElementById("limostar");
let uDeA = document.getElementById("udea");
let cnx = document.getElementById("cnx");
let test = document.getElementsByClassName("test");
let workExp = document.getElementById("worksexp");
let hidden1 = document.getElementById("hidden1");


function showWorkIcons() {
    hidden1.style.display = "flex";
}
workExp.addEventListener("click", showWorkIcons);

function showExp(events) {
    let tar = events.target;
    if (tar == webHelp) {
        webhelpexp.style.display = "block";
        limostarexp.style.display = "none";
        tpexp.style.display = "none";
        udeaexp.style.display = "none";
        cnxexp.style.display = "none";
        balisexexp.style.display = "none";
    } else if (tar == tp) {
        webhelpexp.style.display = "none";
        limostarexp.style.display = "none";
        tpexp.style.display = "block";
        udeaexp.style.display = "none";
        cnxexp.style.display = "none";
        balisexexp.style.display = "none";
    } else if (tar == limoStar) {
        webhelpexp.style.display = "none";
        limostarexp.style.display = "block";
        tpexp.style.display = "none";
        udeaexp.style.display = "none";
        cnxexp.style.display = "none";
        balisexexp.style.display = "none";
        tpexp.style.display = "none";
    } else if (tar == baliSex) {
        webhelpexp.style.display = "none";
        limostarexp.style.display = "none";
        tpexp.style.display = "none";
        udeaexp.style.display = "none";
        cnxexp.style.display = "none";
        balisexexp.style.display = "block"; 
    } else if (tar == uDeA) {
        webhelpexp.style.display = "none";
        limostarexp.style.display = "none";
        tpexp.style.display = "none";
        udeaexp.style.display = "block";
        cnxexp.style.display = "none";
        balisexexp.style.display = "none";
    } else {
        webhelpexp.style.display = "none";
        limostarexp.style.display = "none";
        tpexp.style.display = "none";
        udeaexp.style.display = "none";
        cnxexp.style.display = "block";
        balisexexp.style.display = "none";
        }
};
hidden1.addEventListener("click", showExp);

/*
let baliSex = document.getElementById("balisex");
let baliSexExp = document.getElementById("balisexexp");
let workExp = document.getElementById("worksexp");
let hidden1 = document.getElementById("hidden1");
function showWorkExp() {
    hidden1.style.display = "flex";
}
workExp.addEventListener("click", showWorkExp);
function showBaliSexExp() {
    baliSexExp.style.display = "block";
}
baliSex.addEventListener("click", showBaliSexExp);

function showBaliSexExp() {
    baliSexExp.style.display = "block";
}
baliSex.addEventListener("click", showBaliSexExp);
*/