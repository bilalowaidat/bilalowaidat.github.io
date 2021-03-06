function ShowAllPOS() {
	var CategoriesAndItemsLength = CategoriesAndItems.length;
	var t = '<table>';
	for (var CategoryID = 0; CategoryID < CategoriesAndItemsLength; CategoryID++){
		var Items = CategoriesAndItems[CategoryID].Items;
		var ItemsLength = Items.length;
			t = t + "<tr><td colspan=2><p style='font-size:24px;font-weight:bold;color:Red;margin-left:10px;margin-top:40px;margin-bottom:10px;'>" + CategoriesAndItems[CategoryID].Category + "</p></td></tr>";
		for (var i = 0; i < ItemsLength; i++)
					t = t + "<tr><td style='width:100%;text-align:left;'><p style='margin-left:10px;'><span style='font-size:14px;color:Blue;'>" + Items[i].Barcode + "</span><span style='font-size:18px;font-weight:bold;'>" + Items[i].Item + "</span></p></td><td style='width:100%;text-align:left;padding-right:10px;'><p><span style='font-size:18px;font-weight:bold;'>" + Items[i].Price + "</span><span style='font-size:18px;font-weight:bold;padding-left:5px;'>LBP</span></p></td></tr>";
	}
	t = t + '</table>';
	document.getElementById('tblCategoriesAndItems').innerHTML=t;
};

function ShowFilteredDescription(e,Search_Value) {
	var CategoriesAndItemsLength = CategoriesAndItems.length;
	var t = '<table>';
	for (var CategoryID = 0; CategoryID < CategoriesAndItemsLength; CategoryID++){
		var Items = CategoriesAndItems[CategoryID].Items;
		var ItemsLength = Items.length;
		if (CategoriesAndItems[CategoryID].Category.toUpperCase().includes(Search_Value.toUpperCase())){
			t = t + "<tr><td colspan=2><p style='font-size:24px;font-weight:bold;color:Red;margin-left:10px;margin-top:40px;margin-bottom:10px;'>" + CategoriesAndItems[CategoryID].Category + "</p></td></tr>";
			for (var i = 0; i < ItemsLength; i++)
					t = t + "<tr><td style='width:100%;text-align:left;'><p style='margin-left:10px;'><span style='font-size:14px;color:Blue;'>" + Items[i].Barcode + "</span><span style='font-size:18px;font-weight:bold;'>" + Items[i].Item + "</span></p></td><td style='width:100%;text-align:left;padding-right:10px;'><p><span style='font-size:18px;font-weight:bold;'>" + Items[i].Price + "</span><span style='font-size:18px;font-weight:bold;padding-left:5px;'>LBP</span></p></td></tr>";
		}
		else{
			var found_Search_Value = false;
			for (var i = 0; i < ItemsLength; i++)
				if (Items[i].Barcode.toUpperCase().includes(Search_Value.toUpperCase()) || Items[i].Item.toUpperCase().includes(Search_Value.toUpperCase())){
					found_Search_Value = true;
					break;
				}
			if (found_Search_Value){
				t = t + "<tr><td colspan=2><p style='font-size:24px;font-weight:bold;color:Red;margin-left:10px;margin-top:40px;margin-bottom:10px;'>" + CategoriesAndItems[CategoryID].Category + "</p></td></tr>";
				for (var i = 0; i < ItemsLength; i++)
					if (Items[i].Barcode.toUpperCase().includes(Search_Value.toUpperCase()) || Items[i].Item.toUpperCase().includes(Search_Value.toUpperCase()))
					t = t + "<tr><td style='width:100%;text-align:left;'><p style='margin-left:10px;'><span style='font-size:14px;color:Blue;'>" + Items[i].Barcode + "</span><span style='font-size:18px;font-weight:bold;'>" + Items[i].Item + "</span></p></td><td style='width:100%;text-align:left;padding-right:10px;'><p><span style='font-size:18px;font-weight:bold;'>" + Items[i].Price + "</span><span style='font-size:18px;font-weight:bold;padding-left:5px;'>LBP</span></p></td></tr>";
			}
		}
	}
	t = t + '</table>';
	document.getElementById('tblCategoriesAndItems').innerHTML=t;
	if (e.keyCode == 13){
		document.getElementById('txtSearchDescription').value='';
		document.getElementById('txtSearchBarcode').value='';
	};
};

function ShowFilteredBarcode(e,Search_Value) {
	if (e.keyCode != 13)
		return;
	var CategoriesAndItemsLength = CategoriesAndItems.length;
	var t = '<table>';
	for (var CategoryID = 0; CategoryID < CategoriesAndItemsLength; CategoryID++){
		var Items = CategoriesAndItems[CategoryID].Items;
		var ItemsLength = Items.length;
		var found_Search_Value = false;
		for (var i = 0; i < ItemsLength; i++)
			if (Items[i].Barcode.toUpperCase().includes(Search_Value.toUpperCase())){
				found_Search_Value = true;
				break;
			}
		if (found_Search_Value){
			t = t + "<tr><td colspan=2><p style='font-size:24px;font-weight:bold;color:Red;margin-left:10px;margin-top:40px;margin-bottom:10px;'>" + CategoriesAndItems[CategoryID].Category + "</p></td></tr>";
			for (var i = 0; i < ItemsLength; i++)
				if (Items[i].Barcode.toUpperCase().includes(Search_Value.toUpperCase()))
					t = t + "<tr><td style='width:100%;text-align:left;'><p style='margin-left:10px;'><span style='font-size:14px;color:Blue;'>" + Items[i].Barcode + "</span><span style='font-size:18px;font-weight:bold;'>" + Items[i].Item + "</span></p></td><td style='width:100%;text-align:left;padding-right:10px;'><p><span style='font-size:18px;font-weight:bold;'>" + Items[i].Price + "</span><span style='font-size:18px;font-weight:bold;padding-left:5px;'>LBP</span></p></td></tr>";
		}
	}
	t = t + '</table>';
	document.getElementById('tblCategoriesAndItems').innerHTML=t;
	if (e.keyCode == 13){
		document.getElementById('txtSearchDescription').value='';
		document.getElementById('txtSearchBarcode').value='';
	};
};

function ShowAllRestaurant() {
	var CategoriesAndItemsLength = CategoriesAndItems.length;
	var t = '<table>';
	for (var i = 0; i < CategoriesAndItemsLength; i=i+2)
		if (i+1 < CategoriesAndItemsLength){
			t = t + "<tr><td style='width:45%;text-align:center;'><img id=" + i + " src='" + CategoriesAndItems[i].CategoryPictureOnline + "' width=100% height=100% onclick='ShowItems(this.id)'></td><td style='width:10%;'>&nbsp;</td><td style='width:45%;text-align:center;'><img id=" + (i+1) + " src='" + CategoriesAndItems[i+1].CategoryPictureOnline + "' width=100% height=100% onclick='ShowItems(this.id)'></td></tr>";
			t = t + "<tr><td style='width:45%;text-align:center;'><p id=" + i + " style='font-size:20px;font-weight:bold;' onclick='ShowItems(this.id)'>" + CategoriesAndItems[i].Category + "</p></td><td style='width:10%;'>&nbsp;</td><td style='width:45%;text-align:center;'><p id=" + (i+1) + " style='font-size:20px;font-weight:bold;' onclick='ShowItems(this.id)'>" + CategoriesAndItems[i+1].Category + "</p></td></tr>";
			t = t + "<tr><td>&nbsp</td></tr>";
		}
		else{
			t = t + "<tr><td style='width:45%;text-align:center;'><img id=" + i + " src='" + CategoriesAndItems[i].CategoryPictureOnline + "' width=100% height=100% onclick='ShowItems(this.id)'></td></tr>";
			t = t + "<tr><td style='width:45%;text-align:center;'><p id=" + i + " style='font-size:20px;font-weight:bold;' onclick='ShowItems(this.id)'>" + CategoriesAndItems[i].Category + "</p></td></tr>";
			t = t + "<tr><td>&nbsp</td></tr>";
		}
	t = t + '</table>';
	document.getElementById('tblCategoriesAndItems').innerHTML=t;
};

function ShowItems(CategoryID) {
	var Items = CategoriesAndItems[CategoryID].Items;
	var ItemsLength = Items.length;
	t = "<table style='width:100%;margin-top:20px;margin-bottom:40px;'><tr><td style='width:100%;text-align:left;'><p style='font-size:24px;font-weight:bold;color:Red;'>" + CategoriesAndItems[CategoryID].Category + "</p></td><td style='width:100%;text-align:right;'><img src='Others/back.png' width='40' height='40' onclick='window.close()'></td></tr></table>";
	for (var i = 0; i < ItemsLength; i++){
		t = t + "<table style='width:100%;margin-bottom:40px;'>";
			t = t + "<tr><td style='width:40%;text-align:center;border:solid;'><img src='" + Items[i].ItemPictureOnline + "' width=100% height=100%></td><td style='width:60%;text-align:center;border:solid;padding:10px 10px 10px 10px;'><p><span style='font-size:14px;color:Blue;'>" + Items[i].Barcode + "</span><span style='font-size:18px;font-weight:bold;'>" + Items[i].Item + "</span></p><p><span style='color:gray;font-size:16px;'>" + Items[i].Description + "</span></p><p><span style='color:green;font-size:18px;font-weight:bold;'>" + Items[i].Price + "</span><span style='color:green;font-size:18px;font-weight:bold;padding-left:5px'>LBP</span></p></td></tr>";
	};
	var opened = window.open('');
	opened.document.write("<!DOCTYPE html5><html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>" + CategoriesAndItems[CategoryID].Category + "</title></head><body>" + t + "</body></html>");
};