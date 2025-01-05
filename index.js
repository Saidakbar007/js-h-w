// Задача 1: Удвоение чисел в массиве
const numbers1 = [2, 4, 6, 8];
const doubled = numbers1.map(num => num * 2);
console.log(doubled); 

// Задача 2: Вытащить определённые значения из массива объектов
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];
const names = users.map(user => user.name);
console.log(names); 

// Задача 3: Фильтрация положительных чисел
const numbers2 = [-10, 15, 0, -7, 30, 5, -3];
const filterPositiveNumbersArray = (arr) => arr.filter(num => num > 0);
console.log(filterPositiveNumbersArray(numbers2)); 

// Задача 4: Фильтрация слов по длине
const words1 = ["apple", "banana", "cherry", "kiwi", "grape"];
const filterLongWords = (arr) => arr.filter(word => word.length > 5);
console.log(filterLongWords(words1)); 

// Задача 5: Фильтрация строк с определённым символом
const words2 = ["cat", "dog", "elephant", "tiger", "lion"];
const filterWordsByCharacter = (arr) => arr.filter(word => word.includes('a'));
console.log(filterWordsByCharacter(words2)); // ["cat", "elephant", "tiger"]

// Задача 6: Сумма чисел массива
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); 

// Задача 7: Найти самое длинное слово в массиве
const words3 = ["apple", "banana", "cherry", "watermelon"];
const longestWord = words3.reduce((longest, word) => word.length > longest.length ? word : longest, "");
console.log(longestWord); 

// Задача 8: Разделение массива на части
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
const chunkedArray = [];
for (let i = 0; i < array1.length; i += chunkSize) {
    chunkedArray.push(array1.slice(i, i + chunkSize));
}
console.log(chunkedArray); 

// Задача 9: Подсчет частоты элементов
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequency = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log(frequency); 
// Задача 10: Удаление дубликатов
const array2 = [1, 2, 3, 2, 4, 1, 5, 3];
const uniqueArray = array2.reduce((acc, num) => {
    if (!acc.includes(num)) acc.push(num);
    return acc;
}, []);
console.log(uniqueArray); 






// Задача 1: Создание объекта с методом
const person1 = { 
    name: "Иван", 
    age: 30, 
    greet() {
      return `Привет, меня зовут ${this.name}, мне ${this.age} лет`;
    }
  };
  console.log(person1.greet()); 
  
  // Задача 2: Изменение значения в объекте
  const book = { 
    title: "Война и мир", 
    author: "Лев Толстой",
    updateTitle(newTitle) {
      this.title = newTitle;
    }
  };
  book.updateTitle("Анна Каренина");
  console.log(book.title); 
  
  // Задача 3: Добавление свойства в объект
  const student1 = { 
    name: "Анна", 
    age: 22, 
    grades: [4, 5, 3], 
    addGrade(grade) {
      this.grades.push(grade);
    }
  };
  student1.addGrade(5);
  console.log(student1.grades); 
  
  // Задача 4: Удаление свойства объекта
  const car1 = { 
    brand: "Toyota", 
    model: "Corolla", 
    removeModel() {
      delete this.model;
    }
  };
  car1.removeModel();
  console.log(car1.model); 
  // Задача 5: Метод для получения полной информации
  const movie = { 
    title: "Интерстеллар", 
    director: "Кристофер Нолан", 
    releaseYear: 2014, 
    getFullInfo() {
      return `Фильм: ${this.title}, Режиссер: ${this.director}, Год выпуска: ${this.releaseYear}`;
    }
  };
  console.log(movie.getFullInfo()); 
  
  // Задача 6: Изменение значения по ключу
  const person2 = { 
    name: "Максим", 
    age: 28, 
    updateAge(newAge) {
      this.age = newAge;
    }
  };
  person2.updateAge(29);
  console.log(person2.age); 
  
  // Задача 7: Проверка наличия свойства в объекте
  const product = { 
    name: "Laptop", 
    price: 1500, 
    hasProperty(prop) {
      return this.hasOwnProperty(prop);
    }
  };
  console.log(product.hasProperty("price")); 
  
  // Задача 8: Итерация по ключам объекта
  const person3 = { 
    name: "Елена", 
    age: 25, 
    city: "Москва", 
    showKeys() {
      return Object.keys(this);
    }
  };
  console.log(person3.showKeys()); 
  
  // Задача 9: Вывод значений объекта
  const car2 = { 
    brand: "BMW", 
    model: "X5", 
    showValues() {
      return Object.values(this);
    }
  };
  console.log(car2.showValues()); 
  
  // Задача 10: Проверка типа значения
  const data = { 
    name: "Сергей", 
    age: 30, 
    isNameString() {
      return typeof this.name === 'string';
    }
  };
  console.log(data.isNameString()); 
  
  // Задача 11: Модификация массива в объекте
  const student2 = { 
    name: "Ирина", 
    grades: [4, 5, 3], 
    addGrade(newGrade) {
      this.grades.push(newGrade);
    }
  };
  student2.addGrade(4);
  console.log(student2.grades); 
  
  // Задача 12: Вычисление суммы всех значений в объекте
  const expenses = { 
    food: 200, 
    transport: 50, 
    entertainment: 100, 
    getTotalExpenses() {
      return Object.values(this).reduce((acc, value) => acc + value, 0);
    }
  };
  console.log(expenses.getTotalExpenses()); 
  
  // Задача 13: Проверка всех значений
  const user = { 
    isActive: true, 
    hasPermission: true, 
    hasValidStatus() {
      return this.isActive && this.hasPermission;
    }
  };
  console.log(user.hasValidStatus()); 
  
  // Задача 14: Копирование объекта
  const original = { 
    name: "Кирилл", 
    age: 32, 
    clone() {
      return { ...this };
    }
  };
  console.log(original.clone()); 
  
  // Задача 15: Преобразование объекта в строку
  const person4 = { 
    name: "Ольга", 
    age: 26, 
    city: "Санкт-Петербург", 
    toString() {
      return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }
  };
  console.log(person4.toString()); 
  