---
layout: post
title:  "How to mock all ECMA6/Typescript class methods in one go"
date:   2016-03-09 23:03:50 +0000
categories: testing angular2 jasmine ecma6 typescript
---

Stubs are particularly useful to avoid database connections, ajax/web sockets connection resources, timing events - or in general asynchronous events.

They could also be useful in situations where different branches/paths of code have to be tested e.g. based on arguments passed - return different results or exhibit different behaviour to satisfy the different conditions.

The getMock() function facilitates all class methods to be spied on, asserting what arguments a method is called with, how many times the function is called and also to stub its behaviour entirely.


Currently Jasmine does not offer a shortcut to spy on all class methods, including inherited once and to maintain the instance type (e.g. satisfies instanceof operator).

In order to define the function, we need the following:

First we need to define a method which iterates over all classes and their parents and return a list of all methods

```javascript

    function getClassMethods(className) {
       //todo - add a check if it is an object or not
        let ret = new Set();
    
        function methods(obj) {
            if (obj) {
                let ps = Object.getOwnPropertyNames(obj);
    
                ps.forEach(p => {
                    if (obj[p] instanceof Function) {
                        ret.add(p);
                    } else {
                        //can add properties if needed
                    }
                });
    
                methods(Object.getPrototypeOf(obj));
            }
        }
    
        methods(className.prototype);
    
        return Array.from(ret);
    }

```

Then the actual getMock() definition assumed it is inside jasmine specs

```javascript

    function getMock(mockedClass) {
        getClassMethods(mockedClass).forEach(m => spyOn(mockedClass.prototype, m));

        return new mockedClass();
    }


```


And its usage

```javascript

class Vehicle {
    constructor() {
        console.log("Vehicle constructor");
    }

    start() {
        return "start";
    }

    stop() {
        return "stop";
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car constructor");
    }

    activateHorn() {
        return "beep";
    }
}

class RacingCar extends Car {
    constructor() {
        console.log("RacingCar constructor");
        super();
    }

    activateHorn() {
        return "racing car beep";
    }
}

function getClassMethods(className) {
    let ret = new Set();

    function methods(obj) {
        if (obj) {
            let ps = Object.getOwnPropertyNames(obj);

            ps.forEach(p => {
                if (obj[p] instanceof Function) {
                    ret.add(p);
                } else {
                    //can add properties if needed
                }
            });

            methods(Object.getPrototypeOf(obj));
        }
    }

    methods(className.prototype);

    return Array.from(ret);
}

function getMock(mockedClass) {
    getClassMethods(mockedClass).forEach(m => spyOn(mockedClass.prototype, m));

    return new mockedClass();
}

describe("RacingCar mocking", () => {
    let mock;
    let jasmineSpyObj;

    beforeEach(() => {
        mock = getMock(RacingCar);
        jasmineSpyObj = jasmine.createSpyObj(RacingCar, ['activateHorn']);
    });

    it("should show that a method of a class via getMock can be chained with and.anything before calling", () => {
        mock.activateHorn.and.returnValue("horn stubbed");
        expect(mock.activateHorn()).toEqual("horn stubbed");
    });

    it('should prove that the mock via getMock() is instanceof RacingCar', () => {
        expect(mock instanceof RacingCar).toEqual(true);
    });

    it("should show that the jasmine created spy object is not related to the class itself", () => {
        expect(jasmineSpyObj instanceof RacingCar).toEqual(false);
        expect(jasmineSpyObj.start).toEqual(undefined);
    });
});


```
