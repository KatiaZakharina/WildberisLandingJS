const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

//cart

const buttonCart=document.querySelector('.button-cart'),
	  modalCart=document.querySelector('#modal-cart'),
	  modalClose=document.querySelector('.modal-close');
const openModal=function(){
	modalCart.classList.add('show');
};
const closeModal=function(){
	modalCart.classList.remove('show');
};
buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalCart.addEventListener('click', event=>{
	if (event.target===modalCart){
		closeModal();
	}
});
// scroll smooth

(function(){
	const scrollLink=document.querySelectorAll('a.scroll-link');
	for(let i=0; i<scrollLink.length; i++){
		scrollLink[i].addEventListener('click', event=>{
			event.preventDefault();
			const id = scrollLink[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}
})()

const more =document.querySelector('.more'),
	  navigationItem=document.querySelectorAll('.navigation-item'),
	  longGoodsList=document.querySelector('long-goods-list');

const getGoods=async function(){
	const result= await fetch('db/db.json');
	if(!result.ok){
		throw 'Error!!!';
	}
	return await result.json();
}
getGoods().then((data)=>{
	console.log(data);
});

const createCard=objCard=>{
	const card=document.createElement('div');
	card.className='col-lg-3 col-sm-6'; //отличается тем, что перезаписывает старые классы
}