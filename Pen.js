class Pen
{

    constructor(x, y, width, height)
    {

       var options =
       {

       } 

       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;

       World.add(world, this.body);
    }

    display()
    {
     
    }
}