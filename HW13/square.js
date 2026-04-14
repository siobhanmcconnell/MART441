class Square{

    constructor(xCoord,yCoord,objectHeight,objectWidth, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.color = color;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
    get mainColor()
    {
        return this.color;
    }
}


class Circle {
  constructor(xCircle, yCircle, radiusCircle, colorCircle) {
    this.xCircle = xCircle;
    this.yCircle= yCircle;
    this.radiusCircle = radiusCircle;
    this.colorCircle = colorCircle;
  }
 get x()
    {
        return this.xCircle;
    }

     set x(value)
    {
        this.xCircle = value;
    }
    get y()
    {
        return this.yCircle;
    }
    set y(value)
    {
        this.yCircle = value;
    }

    get r()
    {
        return this.radiusCircle;
    }
    set r(value)
    {
        this.radius = value;
    }


    get mainColor()
    {
        return this.colorCircle;
    }
  
}