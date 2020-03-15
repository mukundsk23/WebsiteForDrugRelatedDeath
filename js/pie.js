$(document).ready(function () {

	var ctx1 = $("#pie-chartcanvas-1");
	var ctx2 = $("#pie-chartcanvas-2");

	var data1 = {
		labels : ["Asians", "Hispanic", "Black", "White", "Unknown"],
		datasets : [
			{
				label : "pie-for-ethnicity",
				data : [251, 785, 657, 2709, 700],
				backgroundColor : [
                    "#DEB887",
                    "#A9A9A9",
                    "#DC143C",
                    "#F4A460",
                    "#2E8B57"
                ],
                borderColor : [
                    "#CDA776",
                    "#989898",
                    "#CB252B",
                    "#E39371",
                    "#1D7A46"
                ],
                borderWidth : [1, 1, 1, 1, 1]
			}
		]
	};

	var data2 = {
		labels : ["Home", "Hospital", "Convalescent Home", "Nursing Home", "Other"],
		datasets : [
			{
				label : "pie-for-place-of-death",
				data : [2477, 1427, 110, 111, 225],
				backgroundColor : [
                    "#FAEBD7",
                    "#DCDCDC",
                    "#E9967A",
                    "#ccff33",
                    "#9ACD32"
                ],
                borderColor : [
                    "#E9DAC6",
                    "#CBCBCB",
                    "#D88569",
                    "#E4CDA2",
                    "#89BC21"
                ],
                borderWidth : [1, 1, 1, 1, 1]
			}
		]
	};

	var options_one = {
		title : {
			display : true,
			position : "top",
			text : "Stats by Ethnicity",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		}
	};

var options_two = {
        title : {
            display : true,
            position : "top",
            text : "Stats by Locations",
            fontSize : 18,
            fontColor : "#111"
        },
        legend : {
            display : true,
            position : "bottom"
        }
    };


	var chart1 = new Chart( ctx1, {
		type : "pie",
		data : data1,
		options : options_one
	});

	var chart2 = new Chart( ctx2, {
		type : "pie",
		data : data2,
		options : options_two
	});

});
