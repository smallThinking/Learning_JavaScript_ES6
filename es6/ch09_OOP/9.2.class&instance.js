//9.2.1 클래스와 인스턴스 생성
class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        if(this.userGears.indexOf(gear) < 0)
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;
    }
}
//클래스의 생성, new 연산자
const car1 = new Car('Tesla', 'Model S');
const car2 = new Car('Mazda', '3i');

//객체가 클래스의 인스턴스인지 확인
car1.shift('D');
car2.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);
