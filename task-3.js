//Функция создает пустой объект 

function withoutProp() {
  const emptyObj = Object.create(null); // без прототипа
  console.log(emptyObj);
}

withoutProp();