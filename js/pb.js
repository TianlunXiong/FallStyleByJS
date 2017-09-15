window.onload=function () {
	waterfall('main','box');
}

function waterfall(parent,box) {
	var oParent = document.getElementById(parent);
	var result  = getClassOfParent(oParent,box);
	var oBoxW = result[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
	console.log(cols);
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto';

	var hArr = [];
	for (var i = 0; i < result.length; i++) {
		if(i<cols){
			hArr.push(result[i].offsetHeight);
		}
		else{
			var minH = Math.min.apply(null, hArr);
			var minIndex = getMinH(hArr,minH);
			result[i].style.position='absolute';
			result[i].style.top=minH+'px';
			result[i].style.left=minIndex*oBoxW+'px';
			hArr[minIndex] += result[i].offsetHeight;
		}
	}

	console.log(hArr);
}
function getMinH(Arr,min){
	for(var i in Arr)
	{
		if(Arr[i]==min){
			return i;
		}
	}

}
function getClassOfParent(parent,clsname) {
	var all = parent.getElementsByTagName('*');
	var get = [];
	for (var i = 0; i < all.length; i++) {
		if(all[i].className==clsname)
			{get.push(all[i]);}
	}
	return get;
}