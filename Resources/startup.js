// initialize services

function StartUpServices(){
	services = [];
	count = 0;
	
	register = function(callback, priority)
	{
		services[count] = callback;
		count++;
	}
	
	run = function()
	{
		for(i = 0; i < count; i++)
		{
			services[i];
		}
	}
}
