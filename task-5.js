//Переписываю консольное приложение из предыдущего юнита на классы.

//слово class идентифицирует блок, содержимое которого определяет члены прототипа функции

class Parent { 
//определяет сигнатуру функции и ее тело, что записывалось через this.PROPERTY для функции-конструктора
  constructor(ownDevice, ownDevices) { 
    this.ownDevice = ownDevice || 'on average 50 wt'
    this.ownDevices = ownDevices || 'on average 50 wt'
    this.fasFlat = true;
  } 
   //выводит данные об объекте, используемых в классах     
  getInfo() {
    return 'Table lamp consumes ' + this.ownDevice;
  }

  getInf() {
    return 'Personal comp consumes ' + this.ownDevices; 
  } 
}
//расширил class Parent, делегирующая связь [[Prototype]] между двумя прототипами функции
class Child extends Parent { 
              //собсвенные св-ва и родительское
  constructor(isElectrical, light, ownDevice) {
    super(ownDevice); // указывает на Parent и имеет доступ свойства родителя (ownDevice, ownDevices)
    this.isElectrical = isElectrical;
    this.light = isElectrical ? light : ownDevice;
  }
  //для понимания работы собственных и родит-х методов класса
  getInfo() {
    if (this.isElectrical) {
      return 'The table lamp consumes ' + this.light
    } else {
      return super.getInfo()
    }
  }  
} 
//расширил class Parent, делегирующая связь [[Prototype]] между двумя прототипами функции
class Child1 extends Parent { 
               //собсвенные св-ва и родительское
  constructor(isElectric, network, ownDevices) {
    super(ownDevices); // обращаюсь к методам и св-ам classa Parent(ownDevice, ownDevices)
    this.isElectric = isElectric;
    this.network = isElectric ? network : ownDevices;  
  } 

  getInf() {
    if (this.isElectric) {
      return 'The personal comp consumes ' + this.network
    } else {
      return super.getInf() 
    }
  }
}

const electrical = new Child(true, 'at least 40 wt'); //проверяем какого класса устр-во
console.log(electrical.getInfo());

const gas = new Child(false, 'max of 90 wt');
console.log(gas.getInfo(), gas.getInf());

const electric = new Child1(true, 'a max of 60 wt'); //проверяем какого класса устр-во
console.log(electric.getInf());

console.log(electrical instanceof Child);  //проверка на принадлежность к классу
console.log(electrical instanceof Parent);

console.log(electric instanceof Child1);
console.log(electric instanceof Parent);

class Car {   
}
console.log(electrical instanceof Car);
console.log(electric instanceof Car);     //проверка на принадлежность к классу