
import { useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LedtPanel/LeftPanel';
import JournalList from './components/JournalList/JournalList'
import Body from './layouts/Body/Body'
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

// Начальные данные для отображения в списке
const INITIAL_DATA = [
  {
    id: 1,
    title: 'Подготовка к обновлению курсов',
    text: 'Горные походы открывают удивительные природные ландшафты',
    date: new Date(),
    tag: 'Подготовка'
  },
  // {
  //   id: 2,
  //   title: 'Поход в годы',
  //   text: 'Большое значение в горном туризме придается бытовому обустройству',
  //   date: new Date(),
  //   tag: 'Горы'
  // }
];

function App() {
  // Состояние для хранения списка элементов
  const [items, setItems] = useState(INITIAL_DATA);

  // Функция для добавления нового элемента в список
  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      text: item.text, // Текст из данных формы
      title: item.title, // Заголовок из данных формы
      date: new Date(item.date), // Преобразуем строку даты в объект Date
      tag: item.tag,
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1 // Генерируем новый id, увеличивая максимальный существующий id на 1
    }]); // Добавляем новый элемент в конец списка
  }

  // выводим переменную сортировки
  const sortItems = (a, b) => {
    if (a.date > b.date) { // Сравниваем даты, если дата a меньше даты b, то a должно быть раньше в списке
      return 1; // Возвращаем -1, чтобы указать, что a должно быть раньше b
    } else {
      return -1; // Возвращаем 1, чтобы указать, что a должно быть позже b
    }
  }

  let list = <p>Нет элементов для отображения</p>;
  if (items.length > 0) {
    list = items.sort(sortItems).map(el => (
      <CardButton key={el.id}>
        <JournalItem 
          title={el.title}
          text={el.text}
          date={el.date}
          tag={el.tag}
        />
      </CardButton>
    ));
  }

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton/>
        <JournalList >          
          {list}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
