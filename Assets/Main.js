let surahLists = document.querySelector(".surah-lists");
let loader = document.querySelector("#Loading");


const buildDom = (surahNumber,surahEnglish,surahArabic,description,surahAyah) =>{
    surahLists.innerHTML += `<div class="surah-info">
    <div class="side">
        
    </div>
  <div class="Left-side">

    <span id="NumberOfSurah">${surahNumber}</span>
  </div>
  
   <div class="surah-english-container">
    <div class="surah-english">
        <a href="http://127.0.0.1:5500/QuraanApp/tafsiir.html?id=${surahNumber}" id="surah-eng">${surahEnglish}</a>
        <p id="description">${description}</p>
    </div>
    
   </div>

   <div class="surah-arabic-container">
    <div class="surah-arabic">
        <a href=http://127.0.0.1:5500/QuraanApp/tafsiir.html?id=${surahNumber}" id="surah-ar">${surahArabic}</a>
        <p id="number">${surahAyah} Ayahs</p>
    </div>
   </div>
  
  
  </div>`
}
// searchSurah

const searchSurah = (e) =>{
    
    let surahInfo = document.querySelectorAll('.surah-info');

    let term = e.target.value.toUpperCase();

    surahInfo.forEach((surah) => {
        let surahEng = surah.querySelector('#surah-eng').innerText.toUpperCase();
        let surahAr = surah.querySelector('#surah-ar').innerText.toUpperCase();
        if(surahEng.indexOf(term) > - 1 || surahAr.indexOf(term) > - 1){
            surah.style.display = 'flex';
        }else{
            surah.style.display = 'none';
        }
    })
}
// All surah
const getAllSurah = async () =>{

    loader.style.display  ='block'
    let request = await fetch('http://api.alquran.cloud/v1/quran/quran-uthmani');

    let surah = await request.json();

    console.log(surah)
    loader.style.display  ='none'

    surah.data.surahs.forEach( (sura) => {

        buildDom(sura.number,sura.englishName,sura.name,sura.englishNameTranslation,sura.ayahs.length);
        console.log(sura.ayahs)
    })



}
getAllSurah();

document.addEventListener('input',searchSurah)