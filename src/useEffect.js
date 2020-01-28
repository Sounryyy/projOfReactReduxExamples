import React, { useState, Component, useEffect } from 'react';
import ReactDOM from 'react-dom';


// useEffect регистрирует функции, которые могу имеьт побочные эффекты - таймауты, запросы к серверу
// Это комбинация didMount и didUpdate при каждом методе запускается функция
// Чтобы предотвратить вызов 1го параметра useEffect (вызывать только если поменялся проп) - нужно сделать проверку. 2м аргументом в useEffect вписать этот проп внутри массива.
// если хотябы одно значение изменится - нужно вызывать данную функцию.
// Если в качестве 2 аргумента передать пустой массив - то функция вызовется только 1 раз при mount'e компонента
// Как отчищать useEffect - нужно возвращать из функции стрелочную функцию. Чистит предыдущий эффект и запускает следующий. Вызывается при каждом следующем вызове useEffect


const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button
                    onClick={() => setValue((value) => value + 1)}> +1 </button>
                <button
                    onClick={() => setVisible(false)}> Hide </button>
                <ClassCounter value={value} />
                <HookCounter value={value} />
                <Notification />
            </div>
        )
    } else {
        return <button onClick={() => setVisible(true)}> Show </button>
    }
};

class ClassCounter extends Component {

    componentDidMount() {
        console.log('class: mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('class: update')
    }

    componentWillUnmount() {
        console.log('class: unmount')
    }

    render() {
        const { value } = this.props;

        return <p> {value} </p>
    }
}

const HookCounter = ({ value }) => {

    useEffect(() => console.log('mount'), []);

    useEffect(() => console.log('mount + update'));

    useEffect(() => () => console.log('unmount'), []);


    useEffect(() => {
        console.log('  useEffect()');

        return () => console.log('  clear')
    }, [ value ]);

    return <p> {value} </p>
};

const Notification = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
           const timeout = setTimeout(() => setVisible(false), 2500);

           return () => clearTimeout(timeout);
    }, []);


    return visible ? <div><p>Hello</p></div> : null;
};

ReactDOM.render(<App />, document.getElementById('root'));
