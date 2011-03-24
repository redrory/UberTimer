$(document).ready(function(){
	console.log('eee');
	var seconds = 1;
	var count = 1;
	
	/*setInterval( 
			function(){
	          document.getElementById('seconds').innerHTML = --seconds;
			//	}, 10);
	});
	
	
	$('a#add').click(function(){
				$('<li>'+ "List "+i + '</li>').appendTo('ul');
					i++;
			});
			
			$('<div></div>').appendTo("#id_name").hide().append(html).fadeIn('slow');
			
			WORK: '<input id="time" name="time" size="9" type="text" value="30 minutes">' +
	*/
	
	$("a.add").click(function(){	
		if (count <= 4)
		{
			$('<br>'+'<label for="text">I only have</label> '+
				'<input id="time" name="time" size="9" type="text" value="30 minutes">' +
				'<label for="projText">to focus on</label>' +
				 '<input id="project" name="project" size="50" type="text" value= "Web Development on Startup 2"/>').appendTo('ul');
				count++;
			//	$('<div></div>').appendTo("a.add").hide().append(html).fadeIn('slow');
			
		}
		else
		{
			alert('Slow down buddy, handle those tasks first '+count);
		}
		
	//	$('<li>'+ "List "+'Mic Test' + '</li>').appendTo('ul');
		console.log('In but'+count);		
	
		});
console.log('eee2');
});

