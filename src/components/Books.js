import React, { useState, useEffect } from 'react'
import BookItems from './BookItems'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import WordsItems from './WordsItems';
import VerseItems from './VerseItems';
// import SearchBox from './SearchBox';
// import { useNavigate } from "react-router-dom";

const Books = () => {

    const [articles, setArticles] = useState([]);
    const [articles2, setArticles2] = useState([]);
    const [articles3, setArticles3] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchWord, setSearchWord] = useState('');
    const [searchVerse, setSearchVerse] = useState('');
    const [searchVerse2, setSearchVerse2] = useState('');

    useEffect(() => {
        fetchFromAPI(`${searchValue}`)
            .then((data) => setArticles(data))
    }, [searchValue]);


    useEffect(() => {
        if (searchVerse2) {
            fetchFromAPI(`${searchVerse}/${searchVerse2}`)
                .then((data) => setArticles3(data))
        } else {
            setArticles2([])
        }
    }, [searchVerse, searchVerse2]);



    useEffect(() => {
        if (searchWord) {
            fetchFromAPI(`corpus/${searchWord}`)
                .then((data) => setArticles2(data))
        } else if (searchWord === '') {
            setArticles2([])
        }
    }, [searchWord]);



    return (
        <div>
            <div className=''>
                <ul className="nav nav-tabs mt-2 p-2 pb-1 px-sm-4 px-0 bg-success bg-opacity-10 border-0 border-bottom border-success" id="myTab" role="tablist" style={{ padding: '1px' }}>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link px-3 text-bg-dark active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Choose Surah</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link px-2 text-bg-dark " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Search Word</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link px-2 text-bg-dark " id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Search Verse</button>
                    </li>
                </ul>

                <div className="tab-content border-0">
                    <div className="tab-pane active text-white" id="home" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <select className='form-select border-0 position-absolute text-bg-secondary text-black float-end' onChange={(event) => setSearchValue(event.target.value)} defaultValue={searchValue} style={{ boxShadow: "none" }}>
                            <option value=''>Choose surah ...</option>
                            <option value='1'>1. al-fatima</option>
                            <option value='2'>2. Al-Baqarah</option>
                            <option value='3'>3. Al-Imran </option>
                            <option value='4'>4. Al-Nisa</option>
                            <option value='5'>5. Al-Maidah</option>
                            <option value='6'>6. Al-An'am</option>
                            <option value='7'>7. Al-A'raf</option>
                            <option value='8'>8. Al-Anfal</option>
                            <option value='9'>9. Al-Taubah</option>
                            <option value='10'>10. Al-Yunus</option>
                            <option value='11'>11. Al-Hud</option>
                            <option value='12'>12. Al-Yusuf</option>
                            <option value='13'>13. Al-Ar-Ra’d</option>
                            <option value='14'>14. Al-Ibrahim</option>
                            <option value='15'>15. Al-Hijr</option>
                            <option value='16'>16. An-Nahl</option>
                            <option value='17'>17. Al-Isra’</option>
                            <option value='18'>18. Al-Kahf</option>
                            <option value='19'>19. Al-Maryam</option>
                            <option value='20'>20. Al-Ta-Ha</option>
                            <option value='21'>21. Al-Anbiya’</option>
                            <option value='22'>22. Al-Haj</option>
                            <option value='23'>23. Al-Mu’minun</option>
                            <option value='24'>24. An-Nur</option>
                            <option value='25'>25. Al-Furqan</option>
                            <option value='26'>26. Ash-Shu’ara’</option>
                            <option value='27'>27. An-Naml</option>
                            <option value='28'>28. Al-Qasas</option>
                            <option value='29'>29. Al-Ankabut</option>
                            <option value='30'>30. Ar-Rum</option>
                            <option value='31'>31. Luqman</option>
                            <option value='32'>32. As-Sajdah</option>
                            <option value='33'>33. Al-Ahzab</option>
                            <option value='34'>34. Al-Saba’</option>
                            <option value='35'>35. Al-Fatir</option>
                            <option value='36'>36. Al-Ya-Sin</option>
                            <option value='37'>37. As-Saffah</option>
                            <option value='38'>38. Al-Sad</option>
                            <option value='39'>39. Az-Zumar</option>
                            <option value='40'>40. Al-Ghafar</option>
                            <option value='41'>41. Al-Fusilat</option>
                            <option value='42'>42. Ash-Shura</option>
                            <option value='43'>43. Az-Zukhruf</option>
                            <option value='44'>44. Ad-Dukhan</option>
                            <option value='45'>45. Al-Jathiyah</option>
                            <option value='46'>46. Al-Ahqaf</option>
                            <option value='47'>47. Al-Muhammad</option>
                            <option value='48'>48. Al-Fat’h</option>
                            <option value='49'>49. Al-Hujurat</option>
                            <option value='50'>50. Al-Qaf</option>
                            <option value='51'>51. Adz-Dzariyah</option>
                            <option value='52'>52. At-Tur</option>
                            <option value='53'>53. An-Najm</option>
                            <option value='54'>54. Al-Qamar</option>
                            <option value='55'>55. Ar-Rahman</option>
                            <option value='56'>56. Al-Waqi’ah</option>
                            <option value='57'>57. Al-Hadid</option>
                            <option value='58'>58. Al-Mujadilah</option>
                            <option value='59'>59. Al-Hashr</option>
                            <option value='60'>60. Al-Mumtahanah</option>
                            <option value='61'>61. As-Saf</option>
                            <option value='62'>62. Al-Jum’ah</option>
                            <option value='63'>63. Al-Munafiqun</option>
                            <option value='64'>64. At-Taghabun</option>
                            <option value='65'>65. At-Talaq</option>
                            <option value='66'>66. At-Tahrim</option>
                            <option value='67'>67. Al-Mulk</option>
                            <option value='68'>68. Al-Qalam</option>
                            <option value='69'>69. Al-Haqqah</option>
                            <option value='70'>70. Al-Ma’arij</option>
                            <option value='71'>71. Al-Nuh</option>
                            <option value='72'>72. Al-Jinn</option>
                            <option value='73'>73. Al-Muzammil</option>
                            <option value='74'>74. Al-Mudaththir</option>
                            <option value='75'>75. Al-Qiyamah</option>
                            <option value='76'>76. Al-Insan</option>
                            <option value='77'>77. Al-Mursalat</option>
                            <option value='78'>78. An-Naba’</option>
                            <option value='79'>79. An-Nazi’at</option>
                            <option value='80'>80. Al-‘Abasa</option>
                            <option value='81'>81. At-Takwir</option>
                            <option value='82'>82. Al-Infitar</option>
                            <option value='83'>83. Al-Mutaffifin</option>
                            <option value='84'>84. Al-Inshiqaq</option>
                            <option value='85'>85. Al-Buruj</option>
                            <option value='86'>86. At-Tariq</option>
                            <option value='87'>87. Al-A’la</option>
                            <option value='88'>88. Al-Ghashiyah</option>
                            <option value='89'>89. Al-Fajr</option>
                            <option value='90'>90. Al-Balad</option>
                            <option value='91'>91. Ash-Shams</option>
                            <option value='92'>92. Al-Layl</option>
                            <option value='93'>93. Al-Adh-Dhuha</option>
                            <option value='94'>94. Al-Inshirah</option>
                            <option value='95'>95. At-Tin</option>
                            <option value='96'>96. Al-‘Alaq</option>
                            <option value='97'>97. Al-Qadar</option>
                            <option value='98'>98. Al-Bayinah</option>
                            <option value='99'>99. Az-Zalzalah</option>
                            <option value='100'>100. Al-‘Adiyah</option>
                            <option value='101'>101. Al-Qari’ah</option>
                            <option value='102'>102. At-Takathur</option>
                            <option value='103'>103. Al-‘Asr</option>
                            <option value='104'>104. Al-Humazah</option>
                            <option value='105'>105. Al-Fil</option>
                            <option value='106'>106. Quraish</option>
                            <option value='107'>107. Al-Ma’un</option>
                            <option value='108'>108. Al-Kauthar</option>
                            <option value='109'>109. Al-Kafirun</option>
                            <option value='110'>110. An-Nasr</option>
                            <option value='111'>111. Al-Masad</option>
                            <option value='112'>112. Al-Ikhlas</option>
                            <option value='113'>113. Al-Falaq</option>
                            <option value='114'>114. An-Nas</option>
                        </select>
                        <div className=' text-bg-dark p-sm-4 p-1 mt-5'>

                            <BookItems articles={articles} />

                        </div>

                    </div>
                    <div className="tab-pane text-white " id="profile" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <form className="form d-flex border-0 position-absolute float-end" role="search">
                            <input className="form-control border-0 text-bg-secondary w-100 me-2" placeholder='Search a word ...' value={searchWord} onChange={(event) => setSearchWord(event.target.value)} type="search" aria-label="Search" style={{ boxShadow: "none" }} />
                        </form>
                        <div className=' text-bg-dark p-3 mt-5  border-0'>
                            <h5 className='text-light text-opacity-75 mt-5'>{searchWord ? `Search Result : ${searchWord}` : ''}</h5>
                            <WordsItems articles2={articles2} />
                        </div>
                    </div>
                    <div className="tab-pane text-white" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabIndex="0">
                        <select id='form-select2' className='form-select border-0 position-absolute text-bg-secondary text-black float-start' onChange={(event) => setSearchVerse(event.target.value)} defaultValue={searchVerse} style={{ boxShadow: "none" }}>
                            <option value=''>Choose surah ...</option>
                            <option value='1'>1. al-fatima</option>
                            <option value='2'>2. Al-Baqarah</option>
                            <option value='3'>3. Al-Imran </option>
                            <option value='4'>4. Al-Nisa</option>
                            <option value='5'>5. Al-Maidah</option>
                            <option value='6'>6. Al-An'am</option>
                            <option value='7'>7. Al-A'raf</option>
                            <option value='8'>8. Al-Anfal</option>
                            <option value='9'>9. Al-Taubah</option>
                            <option value='10'>10. Al-Yunus</option>
                            <option value='11'>11. Al-Hud</option>
                            <option value='12'>12. Al-Yusuf</option>
                            <option value='13'>13. Al-Ar-Ra’d</option>
                            <option value='14'>14. Al-Ibrahim</option>
                            <option value='15'>15. Al-Hijr</option>
                            <option value='16'>16. An-Nahl</option>
                            <option value='17'>17. Al-Isra’</option>
                            <option value='18'>18. Al-Kahf</option>
                            <option value='19'>19. Al-Maryam</option>
                            <option value='20'>20. Al-Ta-Ha</option>
                            <option value='21'>21. Al-Anbiya’</option>
                            <option value='22'>22. Al-Haj</option>
                            <option value='23'>23. Al-Mu’minun</option>
                            <option value='24'>24. An-Nur</option>
                            <option value='25'>25. Al-Furqan</option>
                            <option value='26'>26. Ash-Shu’ara’</option>
                            <option value='27'>27. An-Naml</option>
                            <option value='28'>28. Al-Qasas</option>
                            <option value='29'>29. Al-Ankabut</option>
                            <option value='30'>30. Ar-Rum</option>
                            <option value='31'>31. Luqman</option>
                            <option value='32'>32. As-Sajdah</option>
                            <option value='33'>33. Al-Ahzab</option>
                            <option value='34'>34. Al-Saba’</option>
                            <option value='35'>35. Al-Fatir</option>
                            <option value='36'>36. Al-Ya-Sin</option>
                            <option value='37'>37. As-Saffah</option>
                            <option value='38'>38. Al-Sad</option>
                            <option value='39'>39. Az-Zumar</option>
                            <option value='40'>40. Al-Ghafar</option>
                            <option value='41'>41. Al-Fusilat</option>
                            <option value='42'>42. Ash-Shura</option>
                            <option value='43'>43. Az-Zukhruf</option>
                            <option value='44'>44. Ad-Dukhan</option>
                            <option value='45'>45. Al-Jathiyah</option>
                            <option value='46'>46. Al-Ahqaf</option>
                            <option value='47'>47. Al-Muhammad</option>
                            <option value='48'>48. Al-Fat’h</option>
                            <option value='49'>49. Al-Hujurat</option>
                            <option value='50'>50. Al-Qaf</option>
                            <option value='51'>51. Adz-Dzariyah</option>
                            <option value='52'>52. At-Tur</option>
                            <option value='53'>53. An-Najm</option>
                            <option value='54'>54. Al-Qamar</option>
                            <option value='55'>55. Ar-Rahman</option>
                            <option value='56'>56. Al-Waqi’ah</option>
                            <option value='57'>57. Al-Hadid</option>
                            <option value='58'>58. Al-Mujadilah</option>
                            <option value='59'>59. Al-Hashr</option>
                            <option value='60'>60. Al-Mumtahanah</option>
                            <option value='61'>61. As-Saf</option>
                            <option value='62'>62. Al-Jum’ah</option>
                            <option value='63'>63. Al-Munafiqun</option>
                            <option value='64'>64. At-Taghabun</option>
                            <option value='65'>65. At-Talaq</option>
                            <option value='66'>66. At-Tahrim</option>
                            <option value='67'>67. Al-Mulk</option>
                            <option value='68'>68. Al-Qalam</option>
                            <option value='69'>69. Al-Haqqah</option>
                            <option value='70'>70. Al-Ma’arij</option>
                            <option value='71'>71. Al-Nuh</option>
                            <option value='72'>72. Al-Jinn</option>
                            <option value='73'>73. Al-Muzammil</option>
                            <option value='74'>74. Al-Mudaththir</option>
                            <option value='75'>75. Al-Qiyamah</option>
                            <option value='76'>76. Al-Insan</option>
                            <option value='77'>77. Al-Mursalat</option>
                            <option value='78'>78. An-Naba’</option>
                            <option value='79'>79. An-Nazi’at</option>
                            <option value='80'>80. Al-‘Abasa</option>
                            <option value='81'>81. At-Takwir</option>
                            <option value='82'>82. Al-Infitar</option>
                            <option value='83'>83. Al-Mutaffifin</option>
                            <option value='84'>84. Al-Inshiqaq</option>
                            <option value='85'>85. Al-Buruj</option>
                            <option value='86'>86. At-Tariq</option>
                            <option value='87'>87. Al-A’la</option>
                            <option value='88'>88. Al-Ghashiyah</option>
                            <option value='89'>89. Al-Fajr</option>
                            <option value='90'>90. Al-Balad</option>
                            <option value='91'>91. Ash-Shams</option>
                            <option value='92'>92. Al-Layl</option>
                            <option value='93'>93. Al-Adh-Dhuha</option>
                            <option value='94'>94. Al-Inshirah</option>
                            <option value='95'>95. At-Tin</option>
                            <option value='96'>96. Al-‘Alaq</option>
                            <option value='97'>97. Al-Qadar</option>
                            <option value='98'>98. Al-Bayinah</option>
                            <option value='99'>99. Az-Zalzalah</option>
                            <option value='100'>100. Al-‘Adiyah</option>
                            <option value='101'>101. Al-Qari’ah</option>
                            <option value='102'>102. At-Takathur</option>
                            <option value='103'>103. Al-‘Asr</option>
                            <option value='104'>104. Al-Humazah</option>
                            <option value='105'>105. Al-Fil</option>
                            <option value='106'>106. Quraish</option>
                            <option value='107'>107. Al-Ma’un</option>
                            <option value='108'>108. Al-Kauthar</option>
                            <option value='109'>109. Al-Kafirun</option>
                            <option value='110'>110. An-Nasr</option>
                            <option value='111'>111. Al-Masad</option>
                            <option value='112'>112. Al-Ikhlas</option>
                            <option value='113'>113. Al-Falaq</option>
                            <option value='114'>114. An-Nas</option>
                        </select>
                        <form id='form2' className="form d-flex border-0 position-absolute float-end" role="search">
                            <input className="form-control border-0 text-bg-secondary w-100 me-2" placeholder='Search verse ...' value={searchVerse2} onChange={(event) => setSearchVerse2(event.target.value)} type="number" aria-label="Search" style={{ boxShadow: "none" }} />
                        </form>
                        <div className=' text-bg-dark p-sm-3 p-1 mt-5  border-0'>

                            <VerseItems articles3={articles3} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )


}

export default Books
