const observer = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting){
				entry.target.src = entry.target.dataset.src;
				entry.target.style.transform = 'translateY(0)';
				entry.target.style.opacity = '1';
				observer.unobserve(entry.target);
			}
			else{
				entry.target.style.transform = 'translateY(100px)';
				entry.target.style.opacity = '0.2';
			}
		})
	},
	{
		threshold: 0.1
	}
)// entries, observer
document.querySelectorAll('.image-observer')
.forEach((image=> {
   observer.observe(image)
  }));