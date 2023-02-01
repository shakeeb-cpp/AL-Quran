import React from 'react'

const VerseItems = ({ articles3 }) => {

    if (articles3.id) {
        return (
            <div className='mb-5 mt-5'>
                <div className="card text-bg-dark m-auto p-sm-2 p-1 pb-0 rounded border-top-0 mt-0" >
                    <div className="card m-sm-auto m-0 mt-2 border-0 text-bg-dark bg-opacity-50 mb-4 w-100 p-sm-2 p-0" id='card2'>
                        <div className="card-body">

                            <div className='p-sm-1 p-0 py-2 bg-dark bg-opacity-10 border border-info border-top-0 border-start-0 border-end-0'>
                                <p className="card-text text-end lead mb-1" style={{ fontSize: '1.2rem' }}>&#9900; {articles3.content}<span className="badge bg-secondary  bg-opacity-25 py-2 px-1 rounded-5 text-white-50 fw-semibold ms-2" style={{ fontSize: '12px' }}>{articles3.id}</span></p>
                                <p className="card-text text-end text-light text-opacity-50" style={{ fontSize: '1.1rem' }}>( {articles3.transliteration} )</p>
                                <p className="card-text text-start" style={{ fontSize: '1.1rem' }}>&diams; {articles3.translation_eng}</p>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        )
    }

}

export default VerseItems
