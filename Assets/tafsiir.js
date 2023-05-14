let container = document.querySelector(".container");

let url = window.location.href;

let url_variables = url.split("?");

let exactSurah = url_variables[1].split("=");

let offset = 0;



// exactSurah[0] = id
// exactSurah[1] = the actualy surah number

let ayahCounter = 0
const biuldDom = (ayah, ayahNum) => {
    console.log(ayah)

    if(ayahCounter < 1 ){

        let ayahSplit = ayah.split("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ");

        console.log(ayahSplit);
        
        container.innerHTML += `<div id="bisin"> <a href"#" dir="rtl" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</a></div>`;
        
        container.innerHTML += `<div style="padding-bottom:100px" id="aayah"><a href="" dir='rtl' lang='ar'>${ayahSplit[1]}<img src="./Assets/images/ayah.png" id="ayah-sign"><span id="ayah-number">${ayahNum}</span></a></div>`;
       
    }else{
        container.innerHTML += `<div id="aayah"><a href="" dir='rtl' lang='ar'>${ayah}<img src="./Assets/images/ayah.png" id="ayah-sign"><span id="ayah-number">${ayahNum}</span></a></div>`;
        
 
    }

    ayahCounter++;
}


const reading = async (num) => {

    let response = await fetch(`http://api.alquran.cloud/v1/surah/${num}`);

    let surah = await response.json();

    surah.data.ayahs.forEach( (sura) => {
        biuldDom(sura.text, sura.numberInSurah);
    });
    

}


reading(exactSurah[1]);

