---
layout: post
title:  "getMock() for ECMA6/Typescript class"
date:   2016-03-09 23:03:50 +0000
categories: testing angular2 jasmine ecma6 typescript
---


# Mockito style mock() function to mock/stub all methods of a ECMA6/Typescript class with jasmine 2.

Very useful for more complex inheritance chain objects - e.e. angular2 objects relying on Http etc, or plain ECMA6/Typescript classes.

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

Useful thing of doing it this way is that the type of returned object from getMock() is consistent. So suitable for Typescript for instance.

And its usage

```javascript

```
