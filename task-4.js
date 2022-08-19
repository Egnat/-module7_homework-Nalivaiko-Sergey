//родительская функция с методами
function Device(device) {  
  this.name = device,             
  this.model = 'new',              //свойства род.функции
  this.year = 2022,
  this.electrical = 'network',
  this.signal = 'plm',
  this.switch = 'on/off or a hammer',
  this.color = 'black',
  this.price = 30000              //свойства род.функции 
}                      
    //создал прототип для быстродействия
Device.prototype.showWatts = function(electricity) { 
  console.log(`The device consumes ${electricity} watts of electricity`);  
}
 
function ElectricDevice(device) { //подкласс Device(абстрактно)
  this.name = device,         
  this.wired = 'cocket',      //собственнве свойства 
  this.light = 'bright',
  this.color = 'white',
  this.price = 20000          //собственнве свойства 
}

ElectricDevice.prototype = new Device() //создал прототип и новый экземпляр 
         //для пердачи свойств Device дочернему классу(абстр)ElectricDevice
const lamp = new ElectricDevice('lamp', 'light'); //создал новый экземпляр //для доступа
const comp = new ElectricDevice('comp', 'wired'); //создал новый экземпляр //приборов к свойствам
const tv = new Device('tv', 'remote controller'); //создал новый экземпляр //и методам

lamp.showWatts(40)
comp.showWatts(60)
tv.showWatts(100)

console.log(lamp);
console.log(comp);
console.log(tv);

/*Реализуйте следующее консольное приложение подобно примеру, 
 который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку.
 Посчитайте потребляемую мощность (передайте аргумент). 

Таких приборов должно быть как минимум два 
(например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определите родительскую функцию с методами, 
которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства
и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы,
можете гордиться собой :)*/