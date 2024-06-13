import React from 'react'
import BookSlide from '../BookSlide'
const Main = (props) => {
    return (
        <div id='Main'>
            <div className="text">
                <h2>Welcome BookList</h2>
                <p>당신의 자격증을 위한 완벽한 안내서!<br />
                    우리의 사이트는 최신 자격증 정보와 독자적인 평가에 기반한 책 순위를 제공합니다.<br />
                 </p>
            </div>
            <BookSlide />
        </div>
    )
}

export default Main
