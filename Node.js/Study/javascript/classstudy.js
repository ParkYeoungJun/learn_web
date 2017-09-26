

// can't hoisting
var hoist = new hoisting();
class hoisting{}

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

class extendstest{}

// named
var polygon = class Ploygon extends extendstest{

    // only one constructor
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }
}
