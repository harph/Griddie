/*
 *	Griddie 0.1 - JavaScript Grid Helper
 *	Author: Harrington Joseph
 *	Date: February 27, 2010
 *	Blog: http://blog.hjoseph.com
 *
 */


/*
 *	Custom Values
 */
var griddieHorizontalMargin = 40;
var griddieVerticalMargin = 40;

var horizontalGridColor = '#567499';
var verticalGridColor = '#567499';

var griddieHorizontalGuides = true;
var griddieVerticalGuides = true;

var griddieHorizontalGuidesColor = 'pink';
var griddieVerticalGuidesColor = 'pink';

/*	End of Custom Values */

window.addEventListener('load', function(event){
	var gridWidth = window.screen.availWidth;
	var gridHeight = window.screen.availHeight;
	var griddieArea = document.createElement('div');
	griddieArea.setAttribute('id', getGriddieId());
	griddieArea.setAttribute('style', 'position:absolute; left:0px; top:0px;');
	var paper = Raphael(griddieArea, gridWidth, gridHeight);
	for(i = griddieHorizontalMargin; i < gridWidth; i+=griddieHorizontalMargin){
		paper.path("M" + i + " 0L" + i + " " + gridHeight).attr({stroke: verticalGridColor});
		if(griddieVerticalGuides){
			paper.text(i, 10, i).attr({fill: griddieVerticalGuidesColor});
		}
	}
	
	for(j = griddieVerticalMargin; j < gridHeight; j+=griddieVerticalMargin){
		paper.path("M0 " + j + "L" + gridWidth + " " + j).attr({stroke: horizontalGridColor});
		if(griddieHorizontalGuides){
			paper.text(10, j, j).attr({fill: griddieHorizontalGuidesColor});
		}
	}
	document.body.appendChild(griddieArea);
}, false);

function getGriddieId(){
	var griddieAreaSub = "griddieArea";
	var griddieAreaId = "griddieArea";
	var index = 1;
	while(document.getElementById(griddieAreaId)!=null){
		griddieAreaId = griddieAreaSub + index;
		index++;
	}
	return griddieAreaId;
}