import { useState } from "react"

const Paragraph = () => {
    const [idOfActiveTheme, setIdOfActiveTheme] = useState('0');
    const [idOfActiveParagraph, setidOfActiveParagraph] = useState('')
    let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З' , 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я' ];   // ждем метод возвращающий все темы или что-то подобное
    
    const themes = arr_RU.map((text, index) => {
		if (index === idOfActiveTheme) {
            return (
                <>
                    <button 
                        className="accordionH1 active" 
                        key={index}
                        onClick={ () => setIdOfActiveTheme(index) }>
                            Тема буква {text}
                            <div className="accordionBody">
                                <a href="#" className="accordionLinks"> Пример слова на букву {text}</a>
                                <a href="#" className="accordionLinks"> Пример слова на букву {text} </a>
                                <a href="#" className="accordionLinks"> Пример слова на букву {text} </a>
                            </div>
                    </button>
                </>
            )}
        else {
            return (
                <>
                    <button 
                    className="accordionH1 dark:bg-gray-700" 
                    key={index}
                    onClick={() => setIdOfActiveTheme(index) }>
                        Тема буква {text}
                        <div className="accordionBody">
                            <a href="#" className="accordionLinks"> Пример слова на букву {text}</a>
                            <a href="#" className="accordionLinks"> Пример слова на букву {text} </a>
                            <a href="#" className="accordionLinks"> Пример слова на букву {text} </a>
                        </div>    
                    </button>
                </>

            )
        }
       
	});
   

    return (
        <>
            <section className="course">
                <div className="courseContainer flex flex-wrap justify-between">

                    <div 
                    className="accordion-wrapper flex w-full lg:w-1/3 custom-scrollbar_dark overflow-y-scroll dark:bg-gray-400">
                        <div className="accordion">
                            {themes}
                            <div className="accordionBody">
                            <a href="#" className="accordionLinks">Пример слова на букву Б</a>
                            <a href="#" className="accordionLinks">Пример слова на букву Б</a>
                            </div>
                        </div>
                    </div>

                    <div className="courseThemeWrapper flex w-full lg:w-2/3">
                        <div className="courseTheme w-full dark:bg-gray-400">
                            <div className="courseH1">Какая-то буква</div>
                            <div className="courseVideo">
                                <div className="alt-video bg-slate-100" width="560" height="315"></div>
                                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/wMK_fJjdTpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                            </div>
                            <div className="courseText">
                                <p>текст урока на букву</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export {Paragraph}