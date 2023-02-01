import React from 'react'

const WordsItems = ({ articles2 }) => {

    if (articles2) {
        return (
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4 mt-1  border-0">
                {Object.keys(articles2).map((keys, idx) => (
                    articles2[keys].surah_no ?
                        <div key={idx} className="col">
                            <div className="card text-bg-dark" style={{ border: '2px solid darkslategray' }}>
                                <div className="card-body overflow-y-auto" style={{ height: '370px' }}>
                                    <h5 className="card-title mb-3">Surah No : {articles2[keys].surah_no}</h5>
                                    <h6 className="card-subtitle mb-3 text-light text-opacity-75">Verse No : {articles2[keys].verse_no}</h6>
                                    <p className="card-text text-info">{articles2[keys].content}</p>
                                </div>
                            </div>
                        </div> : null
                ))}

            </div>
        )
    }

}

export default WordsItems
