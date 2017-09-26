

// can't hoisting
// var hoist = new hoisting();
// class hoisting{}

function extendfunc(){}

class ex extends extendfunc{}   // function도 extends 가능

// unnamed
var polygon = class {

    // only one constructor
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }
}

class extendstest{
    constructor(height)
    {
        this.height = height;
    }
}

// named
var polygon = class Ploygon extends extendstest{

    // only one constructor
    constructor(height, width)
    {
        super(height);              // 상속하면 super로 부모 생성자를 무조건 불러와야함. 안그러면 error
        this.width = width;
    }
}

var po = new polygon(123,123);

console.log(po.height);
