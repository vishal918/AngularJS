function SampleController($scope)
				{
					$scope.fruits= [
						{title: 'Engineering', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/7.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Technology', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/2.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Games', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/9.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Engineering', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/2.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Technology', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/7.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Games', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/9.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Engineering', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/9.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Technology', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/2.jpg', imageSource1: 'images/9.jpg',comment1: 'Hi'},
						{title: 'Games', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/7.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Engineering', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/7.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Technology', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/2.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
						{title: 'Games', data: 'Tan felt + velcro = bandaids for stuffed animals, etc', imageSource: 'images/9.jpg', imageSource1: 'images/9.jpg', comment1: 'Hi'},
					];
					
					$scope.remove =function(index){
						$scope.fruits.splice(index,1);
					}
				}