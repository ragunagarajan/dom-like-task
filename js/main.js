//function to handle like click event
	 
	function handLike(event){

	event.preventDefault();		 
	//find the i element
		
		let iEle=this.getElementsByClassName("fa-heart-o");	
		 iEle=iEle[0];
		 
	//find the span element
		let spaEle=this.parentNode.getElementsByTagName("span");
		spaEle=spaEle[0];
		
	//find current like count
		let curreLike=spaEle.innerText;
		
		let likecount=parseInt(curreLike);
		
	//chech if it is a active class name
		
	if(iEle.className.includes("active")){
		//if yes
		
			//reduce the like count
			likecount=likecount-1;
			
			console.log(likecount);
			//remove the active class
			iEle.classList.remove("active");
		
	}
	else{
		//if no
		
			//increase the like count
			likecount=likecount+1;
			
			//add the active class
			iEle.classList.add("active");
		
	}
	//update the span text
	spaEle.innerText=likecount+" "+"Likes";	
}	
// find a.like all element
	
	let likeEle=document.getElementsByClassName("like");


//iterate the html collection
	for(let i=0;i < likeEle.length;i++ ){

	likeEle[i].addEventListener("click",handLike)
	
	}		
   //add event listener for each a.like
	
