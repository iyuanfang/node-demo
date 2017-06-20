class Shape{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    getArea(){
        return this.width*this.height;
    }

}
module.exports=Shape;