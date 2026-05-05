import './JournalForm.css';
import { useState } from 'react';
import Button from '../Button/Button';

function JournalForm({ onSubmit }) {
  // Функция для обработки отправки формы
  const addJournalItem = (e) => {
    e.preventDefault();
    const formData= new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps); // Вызываем функцию onSubmit, передавая данные формы в виде объекта
  };


  return  (
      <>
        <form className='journal-form' onSubmit={addJournalItem}>
            <input type='text' name='title'/>
            <input type='date' name='date' />
            <input type='text' name='tag' />
            <textarea name='text' cols='30' rows='10'/>
            <Button text='Сохранить' onClick={() => console.log('Нажали')}/>
        </form>
        
      </>
    );
}

export default JournalForm;