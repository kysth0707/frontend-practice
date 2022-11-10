window.onload = function()
{
	let Observer = new IntersectionObserver((e)=>{
		e.forEach((박스)=>{
			if(박스.isIntersecting)
			{
				박스.target.style.opacity = 1;
			}
			else
			{
				박스.target.style.opacity = 0;
			}
		});
	});
	
	
	// let Contents = document.querySelectorAll('.home-animation-content');
	let Contents = document.getElementsByClassName('home-animation-content');
	// Contents.array.forEach(element => {
	// 	Observer.observe(element);
	// });
	for(let i = 0; i < Contents.length; i++)
	{
		Observer.observe(Contents[i]);
	}
}