/*Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/

function showPropArg(obj = {a: "Hello", b:"Bye"}) {

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) console.log(key);
  }  // выводим все названия свойств

  for (let key in obj) {
    console.log(obj[key]);
  } // выводим все значения свойств
  console.log(obj);
}
showPropArg(); 