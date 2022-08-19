/*Функция, которая принимает в качестве аргументов строку и объект и 
проверяет есть ли у переданного объекта свойство с данным именем.
Функция возвращат true или false.*/

//Функция принимает в качестве аргументов строку и объект
function checkPropInObj(str, obj) {
  console.log('str' in obj); //проверяет свойство с данным именем, in возвращает true если свойство есть
  console.log(str, obj);   
  return (str in obj);  
}

let str = 'hello';
const obj = {str: 'world'};
                            
checkPropInObj(str, obj);   

//Функция возвращает значение