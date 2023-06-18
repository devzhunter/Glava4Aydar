import React, {useState, useContext} from 'react';

const ClickCountContext = React.createContext();

const Button = () => {
  const {setCount} = useContext(ClickCountContext);
  const onButtonClick = () => {
    setCount(c => c + 1);
  };

  return (
    <button onClick={onButtonClick}>Добавить +1</button>
  );
};

const FifthComponent = () => {
  return (

    <ClickCountContext.Consumer>
      {({count}) => <p>Кнопка нажата {count} раз</p>}
    </ClickCountContext.Consumer>
  );
};



const FourthComponent = () => {
  return (
    <div>
      <h3>По книге(Четвёртый компонент)</h3>
      <FifthComponent />
    </div>
  );
};

const ThirdComponent = () => {
  return (
    <div>
      <h3>Задание(Третий компонент)</h3>
      <FourthComponent />
    </div>
  );
};

const SecondComponent = () => {
  return (
    <div>
      <h3>Последнее(Второй компонент)</h3>
      <ThirdComponent />
    </div>
  );
};

const ParentComponent = () => {

  const [count, setCount] = useState(0);

  return (
    <ClickCountContext.Provider value={{count, setCount}}>
      <div>
        <h3>Родительский компонент</h3>
        <p>Кнопка нажата {count} раз</p>
        <SecondComponent />
        <Button />
      </div>
    </ClickCountContext.Provider>
  );
};

export default ParentComponent;