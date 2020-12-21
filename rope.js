class rope{
    constructor(x,y,h,w)
    
    {
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
        this.h=h
        this.w=w
		this.body=Bodies.circle(this.x, this.y, this.h,this.w)

	}
	display()
	{
			
			var ropepos=this.body.position;		

			push()
			translate(ropepos.x, ropepos.y);
			rectMode(CENTER)
			strokeWeight(2);
			fill("black")
			ellipse(this.x,this.y,this.h,this.w)
			pop()
			
	}

}

