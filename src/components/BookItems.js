import React from 'react'

const BookItems = ({ articles: { id, surah_name_ar, translation, type, description, total_verses, verses, total_surahs, total_meccan_surahs, total_medinan_surahs, number_of_words, number_of_unique_words, number_of_stems, number_of_lemmas, number_of_roots } }) => {

    if (surah_name_ar) {
        return (
            <div className='mb-5 mt-5'>
                <div className="card text-bg-dark m-auto p-2 pb-0 rounded border-top-0 mt-0" >
                    <div key={id} className="card-body">
                        <h5 className="card-title mb-3 bg-black bg-opacity-25 rounded p-2 pe-3 pb-sm-2 pb-3 text-center" style={{ width: '110px' }}>{surah_name_ar}</h5>
                        <h6 className="card-subtitle mb-2 text-danger">{translation}</h6>
                        <p className="card-text">{description}</p>
                        <a href="/" className="card-link text-decoration-none fw-semibold lead fs-6 text-info">Surah No : {id}</a>
                        <a href="/" className="card-link text-decoration-none fw-semibold lead fs-6 text-info">Type : {type}</a>
                        <a href="/" className="card-link text-decoration-none fw-semibold lead fs-6 text-info">Total verses : {total_verses}</a>
                    </div>

                    <div className="card m-auto mt-2 border-0 text-bg-dark bg-opacity-50 mb-4 w-100 p-sm-2 p-0" id='card2'>
                        <div className="card-body">
                            {Object.keys(verses || {}).map(keys => (
                                <div className='p-1 py-2 bg-dark bg-opacity-10 border border-info border-top-0 border-start-0 border-end-0' key={keys}>
                                    <p className="card-text text-end lead" style={{ fontSize: '1.2rem' }}>&#9900; {verses[keys].content}<span className="badge bg-secondary  bg-opacity-25 py-2 px-1 rounded-5 text-white-50 fw-semibold ms-2" style={{ fontSize: '12px' }}>{verses[keys].id}</span></p>
                                    <p className="card-text text-start" style={{ fontSize: '1.1rem' }}>&diams; {verses[keys].translation_eng.charAt(0).toUpperCase() + verses[keys].translation_eng.slice(1)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div key={total_surahs} className='mt-5'>

            <div className="card text-bg-dark mx-auto border-0 w-75">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cX6PuH0xyjy1XWTfNImkyOLwPFbhrzOZxw&usqp=CAU" height={380} className="card-img-top object-fit-cover"  alt="..." /> */}
                <div className="card-body p-0 pt-2">
                    <h5 className="card-title">Al-Quran</h5>
                    <p className="card-text">Qurʾān, (Arabic: “Recitation”) also spelled Quran and Koran, the sacred scripture of Islam. According to conventional Islamic belief, the Qurʾān was revealed by the angel Gabriel to the Prophet Muhammad in the West Arabian towns Mecca and Medina beginning in 610 and ending with Muhammad’s death in 632 CE. The word qurʾān, which occurs already within the Islamic scripture itself (e.g., 9:111 and 75:17–18), is derived from the verb qaraʾa—“to read,” “to recite”—but there is probably also some connection with the Syriac qeryānā, “reading,” used for the recitation of scriptural readings during church services. The Qurʾānic corpus, composed in an early form of Classical Arabic, is traditionally believed to be a literal transcript of God’s speech and to constitute the earthly reproduction of an uncreated and eternal heavenly original, according to the general view referred to in the Qurʾān itself as “the well-preserved tablet” (al-lawḥ al-mahfūẓ; Qurʾān 85:22)</p>
                </div>
                <ul className="list-group list-group-flush border-0">
                    <li className="list-group-item text-bg-dark  p-0 pt-3 border-0">Total Surah : 1{total_surahs} , Makki : {total_meccan_surahs} , Madani : {total_medinan_surahs}</li>
                    <li className="list-group-item text-bg-dark p-0 pt-3  border-0">Total verses : {total_verses}</li>
                    <li className="list-group-item text-bg-dark p-0 pt-3  border-0">Total Words : {number_of_words} , Unique Words: {number_of_unique_words}</li>
                    <li className="list-group-item text-bg-dark p-0 pt-3  border-0">Stems : {number_of_stems} , lemmas : {number_of_lemmas} , Roots : {number_of_roots}</li>
                </ul>
            </div>
        </div>
    )
}

export default BookItems
