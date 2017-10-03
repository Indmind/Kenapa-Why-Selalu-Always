window.onload = () => {
    document.getElementById("generate-btn").addEventListener("click", () => {
        let text = '';
        let indexed = [];
        for(let j = 0;j < getRandomInt(5, data.length);j++){
            const temp = data[getRandomInt(0, data.length-1)];
            const ind = temp.i;
            const end = temp.e;
            if(!inArray(ind, indexed)){
                text += ind + ' ' + end + ' ';
                indexed.push(ind);
            }
        }
        createAlert(text);
    });

    function createAlert(text){
        const alrt = document.getElementById("result");
        alrt.innerHTML = text;
        alrt.parentNode.classList.remove("hide");
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function inArray(needle,haystack){
        var count = haystack.length;
        for(var i = 0;i < count;i++){
            if(haystack[i] === needle) return true;
        }
        return false;
    }
}

function hide(){
    document.getElementById("calert").className += " hide";
}