class InfoList {
	constructor(id, w, h){
		this.canvas = d3.select("#"+id)
			.attr("class", "container")
			.attr("width",w-75)
			.attr("height",h)
			.attr("transform","translate(50,60)");
		this.id = id;
		this.w = w;
		this.h = h;
	}
	
	setData(data){

	}
}