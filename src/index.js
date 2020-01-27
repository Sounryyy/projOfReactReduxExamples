import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    return (
        <div>
            <HookSwitcher />
        </div>
    )
};

const HookSwitcher = () => {

    const [ color, setColor ] = useState('black');
    const [ fontSize, setFontSize ] = useState(14);
    // Хук useState устанавливает state у функционального компонента. Функция возвращает массив с 2 аргументами
    // 1й - поле в стейте, которое можно заиспользовать
    // 2й - функция, которой поле стейта можно редактировать
    // Хук можно использовать несколько раз, чтобы задать несколько частей стейта
    // Если в качестве состояния использовать объект, то функция сеттер не будет заменять части объекта, она заменит все поля на новые
    // Если нужно поменять состояние основываясь на предыдущем, нужно обернуть вызов в функцию, которая будет принимать 1 параметр - поле стейта / стейт, если задавать его объектом
    // 1е отличие от setState - можно разделить state
    // 2е отличие от setState - при вызове функции объект полностью перезаписывается

    return (
        <div style={{ padding: '10px', backgroundColor: color, fontSize: fontSize + 'px' }}>
            Check my size ;)
            <button onClick={() => setColor('black')}> Dark </button>
            <button onClick={() => setColor('white')}> Light </button>
            <button onClick={() => setFontSize((stateOfFontSize) => stateOfFontSize + 2)}> +2 </button>
            <button onClick={() => setFontSize((stateOfFontSize) => stateOfFontSize - 2)}> -2 </button>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
