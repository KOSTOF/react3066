import React, { useState } from 'react';

const Item = () => {
  const [answers, setAnswers] = useState(new Array(6).fill(null)); // Стейт для хранения ответов пользователя
  const [score, setScore] = useState(0); // Стейт для хранения количества правильных ответов

  const riddles = [
    {
      id: 1,
      description: "Что можно сломать, нажав на него, но невозможно починить, нажав на него снова?",
      options: ["Яйцо", "Сердце", "Стакан", "Зеркало"],
      correct: 1
    },
    {
      id: 2,
      description: "Что можно увидеть с закрытыми глазами?",
      options: ["Мечту", "Сон", "Свет", "Внутренний мир"],
      correct: 2
    },
    {
      id: 3,
      description: "Что идет, но никогда не приходит?",
      options: ["Время", "Дождь", "Птицы", "Тень"],
      correct: 1
    },
    {
      id: 4,
      description: "Что не имеет начала, конца, либо середины?",
      options: ["Горизонт", "Круг", "Вселенная", "Время"],
      correct: 2
    },
    {
      id: 5,
      description: "Висит, но не качается. Наступает, но не шагает. Что это?",
      options: ["Море", "Луна", "Часы", "Картина"],
      correct: 2
    },
    {
      id: 6,
      description: "Какое слово становится короче, когда к нему прибавляется одна буква?",
      options: ["Короткое", "Тишина", "Сон", "Пустота"],
      correct: 1
    }
  ];

  // Функция для обработки выбора ответа пользователя
  const handleAnswer = (riddleId, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[riddleId - 1] = selectedOption; // Индексация массива начинается с нуля, поэтому вычитаем 1
    setAnswers(updatedAnswers);

    // Проверяем правильность ответа и обновляем счет
    if (selectedOption === riddles[riddleId - 1].correct) {
      setScore(score + 1);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', background: '#f9f9f9', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Русские загадки</h2>
      {riddles.map(riddle => (
        <div key={riddle.id} style={{ marginBottom: '20px', padding: '15px', background: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '20px', color: '#333' }}>Загадка {riddle.id}</h3>
          <p style={{ marginBottom: '10px', fontSize: '16px', color: '#666' }}>{riddle.description}</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '10px 0' }}>
            {riddle.options.map((option, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                <button 
                  onClick={() => handleAnswer(riddle.id, index + 1)} 
                  style={{ 
                    padding: '8px 15px', 
                    background: '#4CAF50', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '3px', 
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                    marginRight: '10px'
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {answers[riddle.id - 1] !== null && (
            <p style={{ marginBottom: '0', fontSize: '16px', color: answers[riddle.id - 1] === riddle.correct ? '#4CAF50' : '#F44336' }}>
              {answers[riddle.id - 1] === riddle.correct ? "Верно!" : `Неверно. Правильный ответ: ${riddle.options[riddle.correct - 1]}`}
            </p>
          )}
        </div>
      ))}
      <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '20px' }}>Правильных ответов: {score}</p>
    </div>
  );
};

export default Item;
