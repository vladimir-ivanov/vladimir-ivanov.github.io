---
title: get-mock-jasmine-ecma6-class
date: 2016-02-28 13:03:18
tags: jasmine, getMock, js, angular2 mock, stub ecma6 class, stub es6 class
---

#Mockito style getMock() function to stub all methods of a ecma6 class with jasmine 2.

Very useful for more complex inheritance chain objects - e.e. angular2 objects relying on Http etc, or plain ECMA6/Typescript classes.

##First we need to define a method which iterates over all classes and their parents and return a list of all methods

```javascript

    function getClassMethods(className) {
        if (!className instanceof Object) {
            throw new Error("Not a class");
        }
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

##Then the actual getMock() definition

```javascript

    function getMock(mockedClass) {
        getClassMethods(mockedClass).forEach(m => spyOn(mockedClass.prototype, m));

        return new mockedClass();
    }


```

And its usage

```javascript

```