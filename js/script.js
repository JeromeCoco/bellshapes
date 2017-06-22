function getScrollData()
{
	switch(screen.height)
	{
		case 414:
		if(document.body.scrollTop < 399)
		{
			document.getElementById('home').style.color = '#d35400';
			document.getElementById('home').style.borderBottom = '3px solid #d35400';
			document.getElementById('about').style.color = 'black';
			document.getElementById('about').style.borderBottom = 'none';
		}
		if(document.body.scrollTop >= 400)
		{
			document.getElementById('about').style.color = '#d35400';
			document.getElementById('about').style.borderBottom = '3px solid #d35400';
			document.getElementById('home').style.color = 'black';
			document.getElementById('home').style.borderBottom = 'none';
			document.getElementById('products').style.color = 'black';
			document.getElementById('products').style.borderBottom = 'none';
		}
		if(document.body.scrollTop >= 800)
		{
			document.getElementById('products').style.color = '#d35400';
			document.getElementById('products').style.borderBottom = '3px solid #d35400';
			document.getElementById('about').style.color = 'black';
			document.getElementById('about').style.borderBottom = 'none';
			document.getElementById('contact').style.color = 'black';
			document.getElementById('contact').style.borderBottom = 'none';
		}
		if(document.body.scrollTop >= 1200)
		{
			document.getElementById('contact').style.color = '#d35400';
			document.getElementById('contact').style.borderBottom = '3px solid #d35400';
			document.getElementById('products').style.color = 'black';
			document.getElementById('products').style.borderBottom = 'none';
		}
		break;
		case 1024:
		if(document.body.scrollTop <= 900)
		{
			document.getElementById('home').style.color = '#d35400';
			document.getElementById('home').style.borderBottom = '3px solid #d35400';
			document.getElementById('about').style.color = 'black';
			document.getElementById('about').style.borderBottom = 'none';
		}
		if(document.body.scrollTop >= 900)
		{
			document.getElementById('about').style.color = '#d35400';
			document.getElementById('about').style.borderBottom = '3px solid #d35400';
			document.getElementById('home').style.color = 'black';
			document.getElementById('home').style.borderBottom = 'none';
			document.getElementById('products').style.color = 'black';
			document.getElementById('products').style.borderBottom = 'none';
		}
		if(document.body.scrollTop >= 1900)
		{
			document.getElementById('products').style.color = '#d35400';
			document.getElementById('products').style.borderBottom = '3px solid #d35400';
			document.getElementById('about').style.color = 'black';
			document.getElementById('about').style.borderBottom = 'none';
			document.getElementById('contact').style.color = 'black';
			document.getElementById('contact').style.borderBottom = 'none';
		}
		if(document.body.scrollTop >= 3100)
		{
			document.getElementById('contact').style.color = '#d35400';
			document.getElementById('contact').style.borderBottom = '3px solid #d35400';
			document.getElementById('products').style.color = 'black';
			document.getElementById('products').style.borderBottom = 'none';
		}
		break;
		case 768:
		if (screen.width == 1024)
		{
			if(document.body.scrollTop <= 700)
			{
				document.getElementById('home').style.color = '#d35400';
				document.getElementById('home').style.borderBottom = '3px solid #d35400';
				document.getElementById('about').style.color = 'black';
				document.getElementById('about').style.borderBottom = 'none';
			}
			if(document.body.scrollTop >= 701)
			{
				document.getElementById('about').style.color = '#d35400';
				document.getElementById('about').style.borderBottom = '3px solid #d35400';
				document.getElementById('home').style.color = 'black';
				document.getElementById('home').style.borderBottom = 'none';
				document.getElementById('products').style.color = 'black';
				document.getElementById('products').style.borderBottom = 'none';
			}
			if(document.body.scrollTop >= 1500)
			{
				document.getElementById('products').style.color = '#d35400';
				document.getElementById('products').style.borderBottom = '3px solid #d35400';
				document.getElementById('about').style.color = 'black';
				document.getElementById('about').style.borderBottom = 'none';
				document.getElementById('contact').style.color = 'black';
				document.getElementById('contact').style.borderBottom = 'none';
			}
			if(document.body.scrollTop >= 2300)
			{
				document.getElementById('contact').style.color = '#d35400';
				document.getElementById('contact').style.borderBottom = '3px solid #d35400';
				document.getElementById('products').style.color = 'black';
				document.getElementById('products').style.borderBottom = 'none';
			}
		}
		else
		{
			if(document.body.scrollTop <= 600)
			{
				document.getElementById('home').style.color = '#d35400';
				document.getElementById('home').style.borderBottom = '3px solid #d35400';
				document.getElementById('about').style.color = 'black';
				document.getElementById('about').style.borderBottom = 'none';
			}
			if(document.body.scrollTop >= 600)
			{
				document.getElementById('about').style.color = '#d35400';
				document.getElementById('about').style.borderBottom = '3px solid #d35400';
				document.getElementById('home').style.color = 'black';
				document.getElementById('home').style.borderBottom = 'none';
				document.getElementById('products').style.color = 'black';
				document.getElementById('products').style.borderBottom = 'none';
			}
			if(document.body.scrollTop >= 1200)
			{
				document.getElementById('products').style.color = '#d35400';
				document.getElementById('products').style.borderBottom = '3px solid #d35400';
				document.getElementById('about').style.color = 'black';
				document.getElementById('about').style.borderBottom = 'none';
				document.getElementById('contact').style.color = 'black';
				document.getElementById('contact').style.borderBottom = 'none';
			}
			if(document.body.scrollTop >= 1800)
			{
				document.getElementById('contact').style.color = '#d35400';
				document.getElementById('contact').style.borderBottom = '3px solid #d35400';
				document.getElementById('products').style.color = 'black';
				document.getElementById('products').style.borderBottom = 'none';
			}
		}
		break;
	}
}