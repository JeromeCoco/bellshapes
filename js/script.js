function home()
{
	document.getElementById('home').style.color = '#d35400';
	document.getElementById('home').style.borderBottom = '3px solid #d35400';
	document.getElementById('about').style.color = 'black';
	document.getElementById('about').style.borderBottom = 'none';
	document.getElementById('products').style.color = 'black';
	document.getElementById('products').style.borderBottom = 'none';
	document.getElementById('contact').style.color = 'black';
	document.getElementById('contact').style.borderBottom = 'none';
}

function about()
{
	document.getElementById('about').style.color = '#d35400';
	document.getElementById('about').style.borderBottom = '3px solid #d35400';
	document.getElementById('home').style.color = 'black';
	document.getElementById('home').style.borderBottom = 'none';
	document.getElementById('products').style.color = 'black';
	document.getElementById('products').style.borderBottom = 'none';
	document.getElementById('contact').style.color = 'black';
	document.getElementById('contact').style.borderBottom = 'none';
}

function products()
{
	document.getElementById('products').style.color = '#d35400';
	document.getElementById('products').style.borderBottom = '3px solid #d35400';
	document.getElementById('about').style.color = 'black';
	document.getElementById('about').style.borderBottom = 'none';
	document.getElementById('contact').style.color = 'black';
	document.getElementById('contact').style.borderBottom = 'none';
	document.getElementById('home').style.color = 'black';
	document.getElementById('home').style.borderBottom = 'none';
}

function contact()
{
	document.getElementById('contact').style.color = '#d35400';
	document.getElementById('contact').style.borderBottom = '3px solid #d35400';
	document.getElementById('products').style.color = 'black';
	document.getElementById('products').style.borderBottom = 'none';
	document.getElementById('home').style.color = 'black';
	document.getElementById('home').style.borderBottom = 'none';
	document.getElementById('about').style.color = 'black';
	document.getElementById('about').style.borderBottom = 'none';
}

function getScrollData()
{
	switch(screen.height)
	{
		case 320:
			if(document.body.scrollTop < 200) { home() }
			if(document.body.scrollTop >= 201) { about() }
			if(document.body.scrollTop >= 600) { products() }
			if(document.body.scrollTop >= 950) { contact() }
		break;
		case 375:
			if(document.body.scrollTop < 320) { home() }
			if(document.body.scrollTop >= 321) { about() }
			if(document.body.scrollTop >= 700) { products() }
			if(document.body.scrollTop >= 1100) { contact() }
		break;
		case 414:
			if(document.body.scrollTop < 399) { home() }
			if(document.body.scrollTop >= 400) { about() }
			if(document.body.scrollTop >= 800) { products() }
			if(document.body.scrollTop >= 1200) { contact() }
		break;
		case 568:
			if(document.body.scrollTop < 399) { home() }
			if(document.body.scrollTop >= 400) { about() }
			if(document.body.scrollTop >= 1000) { products() }
			if(document.body.scrollTop >= 1600) { contact() }
		break;
		case 667:
			if(document.body.scrollTop < 599) { home() }
			if(document.body.scrollTop >= 600) { about() }
			if(document.body.scrollTop >= 1300) { products() }
			if(document.body.scrollTop >= 2000) { contact() }
		break;
		case 736:
			if(document.body.scrollTop < 599) { home() }
			if(document.body.scrollTop >= 600) { about() }
			if(document.body.scrollTop >= 1500) { products() }
			if(document.body.scrollTop >= 2000) { contact() }
		break;
		case 1024:
			if(document.body.scrollTop <= 900) { home() }
			if(document.body.scrollTop >= 900) { about() }
			if(document.body.scrollTop >= 1900) { products() }
			if(document.body.scrollTop >= 3100) { contact() }
		break;
		case 768:
		if (screen.width == 1024)
		{
			if(document.body.scrollTop <= 700) { home() }
			if(document.body.scrollTop >= 701) { about() }
			if(document.body.scrollTop >= 1500) { products() }
			if(document.body.scrollTop >= 2300) { contact() }
		}
		else
		{
			if(document.body.scrollTop <= 600) { home() }
			if(document.body.scrollTop >= 600) { about() }
			if(document.body.scrollTop >= 1200) { products() }
			if(document.body.scrollTop >= 1800) { contact() }
		}
		break;
	}
}