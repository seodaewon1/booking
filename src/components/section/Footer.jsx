import React from 'react'

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <div className="footer_container">
                <div className="footer1"><h1>BOOKING</h1></div>
                <div className="footer2">
                    <div className="footer2-1">
                        <p>이용약관</p>
                        <p>개인정보처리방침</p>
                        <p>FAQ</p>
                        <p>고객지원</p>
                    </div>
                    <div className="footer2-2">
                        <p>© 2024 Booking. All rights reserved.</p>
                    </div>
                </div>
                <div className="footer3">
                    <div className="footer3-1">
                        <p>서대원: <a href="mailto:sdw10195@gmail.com">sdw10195@gmail.com</a></p>
                        <p>김이현: <a href="mailto:wlsakf23@gmail.com">wlsakf23@gmail.com</a></p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer