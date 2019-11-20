import React from 'react';


function Catsdiv (props) {
    const ca  =() => {
        props.onClick()
    }
    return (
        <div onClick={() => ca()}className="cats-div">
            <svg className="svg-1 p" viewBox="0 0 89 43" xmlns="http://www.w3.org/2000/svg" id="fish">
                <g fill="none" fillRule="evenodd">
                    <path d="M86.67 2.54c.392 8.715-1.205 15.089-4.821 19.088 3.616 3.997 5.213 10.371 4.82 19.083-22.387.305-22.388-38.47 0-38.17"
                        fill="#FFF"></path>
                    <path d="M86.67 2.54c.392 8.715-1.205 15.089-4.821 19.088 3.616 3.997 5.213 10.371 4.82 19.083-22.387.305-22.388-38.47 0-38.17z"
                        stroke="#FFF" strokeWidth="3.643" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M69.877 21.523c-11.055 26.528-43.397 26.528-54.454 0 11.057-26.53 43.399-26.53 54.454 0" fill="#FFF"></path>
                    <path d="M69.877 21.523c-11.055 26.528-43.397 26.528-54.454 0 11.057-26.53 43.399-26.53 54.454 0z"
                        stroke="#FFF" strokeWidth="3.643" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M75.834 2.54c.408 8.715-1.255 15.089-5.022 19.088 3.767 3.997 5.43 10.371 5.022 19.083-23.32.305-23.321-38.47 0-38.17"
                        fill="#FFF"></path>
                    <path d="M75.834 2.54c.408 8.715-1.255 15.089-5.022 19.088 3.767 3.997 5.43 10.371 5.022 19.083-23.32.305-23.321-38.47 0-38.17z"
                        stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M58.342 21.523c-11.517 26.528-45.207 26.528-56.723 0 11.516-26.53 45.206-26.53 56.723 0zm-33.98 3.845l13.382-14.794m-13.382 7.102l13.382 14.793m-6.692.029l13.381-14.795m-13.381-7.157l13.381 14.795"
                        stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M11.85 18.04c0-2.058 1.564-3.728 3.49-3.728 1.93 0 3.492 1.67 3.492 3.727 0 2.06-1.562 3.73-3.491 3.73-1.927 0-3.49-1.67-3.49-3.73"
                        fill="#000"></path>
                </g>
            </svg>
            <p className="cats">Cats</p>

        </div>
            
    )
}

export default Catsdiv;