console.log('ONE- FINAL')

// use ONLY arrays or ONLY objects

 var train = [
     {
         line: 'Alamein',
         station: 'Flinders Street',
         stopNum: 0
     },
     {
         line: 'Alamein',
         station: 'Richmond',
         stopNum: 1,
     },
     {
         line: 'Alamein',
         station: 'East Richmond',
         stopNum: 2
     },
     {
         line: 'Alamein',
         station: 'Burnley',
         stopNum: 3
     },
     {
         line: 'Alamein',
         station: 'Hawthorn',
         stopNum: 4
     },
     {
         line: 'Alamein',
         station: 'Glenferrie',
         stopNum: 5
     },
     {
         line: 'Glen Waverly',
         station: 'Flagstaff',
         stopNum: 0
     },
     {
         line: 'Glen Waverly',
         station: 'Melbourne Central',
         stopNum: 1
     },
     {
         line: 'Glen Waverly',
         station: 'Parliament',
         stopNum: 2
     },
     {
         line: 'Glen Waverly',
         station: 'Richmond',
         stopNum: 3
     },
     {
         line: 'Glen Waverly',
         station: 'Kooyong',
         stopNum: 4
     },
     {
         line: 'Glen Waverly',
         station: 'Tooronga',
         stopNum: 5
     },
     {
         line: 'Sandringham',
         station: 'Southern Cross',
         stopNum: 0
     },
     {
         line: 'Sandringham',
         station: 'Richmond',
         stopNum: 1
     },
     {
         line: 'Sandringham',
         station: 'South Yarra',
         stopNum: 2
     },
     {
         line: 'Sandringham',
         station: 'Prahran',
         stopNum: 3
     },
     {
         line: 'Sandringham',
         station: 'Windsor',
         stopNum: 4
     }
]


var Sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var Alamein = [ 'Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];

var GlenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];



function tramPlan(origin,dest) {


    for (var i = 0; i < train.length; i ++){
        if (origin ===  train[i].station){
            var origin = train[i].station;
            var originLine = train[i].line;
            var originIndex = train[i].stopNum;
        }
        if (dest === train[i].station){
            var dest = train[i].station;
            var destLine = train[i].line;
            var destIndex = train[i].stopNum;
        }
    }

    //---------------- IF STOPS ARE ON THE SAME LINE

    if (originLine === destLine) {
        var yourLine = originLine;

        console.log( "These stops are on the " + yourLine + " line, you will not have to change lines.");


        if (yourLine === 'Sandringham'){
            var planForward = Sandringham.slice(originIndex, destIndex + 1);
            var planBackward= Sandringham.slice(destIndex, originIndex + 1).reverse();
            if (originIndex < destIndex) {
                var sameLinePlan = planForward;
            } else if (originIndex > destIndex) {
                var sameLinePlan = planBackward;
            } else {
                var sameLinePlan = origin;
            }
        }
        else if (yourLine === 'Glen Waverly'){
            var planForward = GlenWaverly.slice(originIndex, destIndex + 1);
            var planBackward= GlenWaverly.slice(destIndex, originIndex + 1).reverse();
            if (originIndex < destIndex) {
                var sameLinePlan = planForward;
            } else if (originIndex > destIndex) {
                var sameLinePlan = planBackward;
            } else {
                var sameLinePlan = origin;
            }
        }
        else if (yourLine === 'Alamein'){
            var planForward = Alamein.slice(originIndex, destIndex + 1);
            var planBackward= Alamein.slice(destIndex, originIndex + 1).reverse();
            if (originIndex < destIndex) {
                var sameLinePlan = planForward;
            } else if (originIndex > destIndex) {
                var sameLinePlan = planBackward;
            } else {
                var sameLinePlan = origin;
            }
;
        }
        var sameLinePlan = sameLinePlan.join();
        console.log("ROUTE PLAN: " + sameLinePlan);

    };



// -------------------   IF NOT ON THE SAME LINE


if (originLine !== destLine) {
    console.log("You will need to change lines to reach your destination.");
    var richSandIndex = Sandringham.indexOf('Richmond'); //1
    var richGlenIndex = GlenWaverly.indexOf('Richmond'); //3
    var richAlaIndex = Alamein.indexOf('Richmond'); //1

    //TO RICHMOND

    if (originLine === 'Sandringham'){
        var planForward= Sandringham.slice(originIndex,richSandIndex + 1);
        var planBackward= Sandringham.slice(richSandIndex,originIndex +1).reverse();
        if (originIndex < richSandIndex) {
            var originPlan = planForward;
        } else if (originIndex > richSandIndex){
            var originPlan = planBackward;
        } else {
            var originPlan = origin;
        }
    }
    else if (originLine === 'Alamein'){
        var planForward= Alamein.slice(originIndex, richAlaIndex + 1);
        var planBackward= Alamein.slice(richAlaIndex, originIndex + 1).reverse();
        if (originIndex < richAlaIndex) {
            var originPlan = planForward;
        } else if (originIndex > richAlaIndex){
            var originPlan = planBackward;
        } else {
            var originPlan = origin;
        }
    }
    else if (originLine === 'Glen Waverly'){
        var planForward= GlenWaverly.slice(originIndex, richGlenIndex + 1);
        var planBackward= GlenWaverly.slice(richGlenIndex, originIndex + 1).reverse();
        if (originIndex < richGlenIndex) {
            var originPlan = planForward;
        } else if (originIndex > richGlenIndex){
            var originPlan = planBackward;
        } else {
            var originPlan = origin;
        }
    }

    // FROM RICHMOND
    if (destLine === 'Sandringham'){
        var planForward= Sandringham.slice(richSandIndex + 1, destIndex + 1);
        var planBackward= Sandringham.slice(destIndex + 1, richSandIndex + 1).reverse();
        if (richSandIndex < destIndex) {
            var destPlan = planForward;
        } else if (richSandIndex > destIndex){
            var destPlan = planBackward;
        } else {
            var destPlan = dest;
        }
    }

    else if (destLine === 'Alamein'){
        var planForward= Alamein.slice(richAlaIndex +1, destIndex +1);
        var planBackward= Alamein.slice(destIndex +1, richAlaIndex +1).reverse();
        if (richAlaIndex < destIndex) {
            var destPlan = planForward;
        } else if (richAlaIndex > destIndex){
            var destPlan = planBackward;
        } else {
            var destPlan = planBackward;
        }
    }

    else if (destLine === 'Glen Waverly'){
        var planForward= GlenWaverly.slice(richGlenIndex +1, destIndex + 1);
        var planBackward= GlenWaverly.slice(destIndex +1, richGlenIndex +1).reverse();
        if (richGlenIndex < destIndex) {
            var destPlan = planForward;
        } else if (richGlenIndex > destIndex){
            var destPlan = planBackward;
        } else {
            var destPlan = dest;
        }
    }

    var changeLinePlan = originPlan + ", " + destPlan;
    console.log("Route plan: " + changeLinePlan);
}

}



// //TESTING ____________________
//SAME LINES
console.log(tramPlan('Flinders Street','Hawthorn'));
console.log(tramPlan('Glenferrie','East Richmond'));

//SWITCH LINES
console.log(tramPlan('Flagstaff','South Yarra'));
console.log(tramPlan('Hawthorn','Prahran'));
