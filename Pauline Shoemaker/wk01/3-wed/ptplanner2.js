console.log('TWO')


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



function tramPlan(origin,dest){


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

//IF ON THE SAME LINE
if (originLine === destLine){
    var yourLine = originLine;
    console.log( "These stops are on the SAME " + yourLine + " line, you will not have to change lines.");
    if (yourLine === 'Sandringham'){
        var planForward = Sandringham.slice(originIndex, destIndex + 1);
        var planBackward= Sandringham.slice(destIndex, originIndex + 1).reverse();
        if (originIndex < destIndex) {
            console.log(planForward);
        } else if (originIndex > destIndex) {
            console.log(planBackward);
        } else {
            console.log(origin);
        }

    }
    else if (yourLine === 'Glen Waverly'){
        var planForward = GlenWaverly.slice(originIndex, destIndex + 1);
        var planBackward= GlenWaverly.slice(destIndex, originIndex + 1).reverse();
        if (originIndex < destIndex) {
            console.log(planForward);
        } else if (originIndex > destIndex) {
            console.log(planBackward);
        } else {
            console.log(origin);
        }
    }
    else if (yourLine === 'Alamein'){
        var planForward = Alamein.slice(originIndex, destIndex + 1);
        var planBackward= Alamein.slice(destIndex, originIndex + 1).reverse();
        if (originIndex < destIndex) {
            console.log(planForward);
        } else if (originIndex > destIndex) {
            console.log(planBackward);
        } else {
            console.log(origin);
        }

    }
};





//IF NOT ON THE SAME LINE
if (originLine !== destLine) {
    console.log("You will need to CHANGE lines at Richmond to reach your destination.");
    var richSandIndex = Sandringham.indexOf('Richmond');
    var richGlenIndex = GlenWaverly.indexOf('Richmond');
    var richAlaIndex = Alamein.indexOf('Richmond');

    if (originLine === 'Sandringham'){
        var planForward = Sandringham.slice(originIndex, richSandIndex + 1);
        var planBackward= Sandringham.slice(richSandIndex, originIndex + 1).reverse();
        if (originIndex < richSandIndex) {
            var planToRich = planForward;
        } else if (originIndex > destIndex) {
            var planToRich = planBackward;
        } else {
            var planToRich = origin;
        }
    }
    else if (originLine === 'Alamein'){
        var planForward = Alamein.slice(originIndex, richAlaIndex + 1);
        var planBackward= Alamein.slice(richAlaIndex, originIndex + 1).reverse();
        if (originIndex > richAlaIndex) {
            var planToRich = planForward;
        } else if (originIndex < destIndex) {
            var planToRich = planBackward;
        } else {
            var planToRich = origin;
        }
    }
    else if (originLine === 'Glen Waverly'){
        var planForward = GlenWaverly.slice(originIndex, richGlenIndex + 1);
        var planBackward= GlenWaverly.slice(richGlenIndex, originIndex + 1).reverse();
        if (originIndex > richGlenIndex) {
            var planToRich = planForward;
        } else if (originIndex < destIndex) {
            var planToRich = planBackward;
        } else {
            var planToRich = origin;
        }
    }

    if (destLine === 'Sandringham'){
        var planForward = Sandringham.slice(destIndex, richSandIndex + 1);
        var planBackward= Sandringham.slice(richSandIndex, destIndex + 1).reverse();
        if (originIndex < richSandIndex) {
            var planFromRich = planForward;
        } else if (originIndex > destIndex) {
            var planFromRich = planBackward;
        } else {
            var planFromRich = origin;
        }
    }
    else if (destLine === 'Alamein'){
        var planForward = Alamein.slice(destIndex, richAlaIndex + 1);
        var planBackward= Alamein.slice(richAlaIndex, destIndex + 1).reverse();
        if (originIndex > richAlaIndex) {
            var planFromRich = planForward;
        } else if (originIndex < destIndex) {
            var planFromRich = planBackward;
        } else {
            var planFromRich = origin;
        }

    }
    else if (destLine === 'Glen Waverly'){
        var planForward = GlenWaverly.slice(destIndex, richGlenIndex + 1);
        var planBackward= GlenWaverly.slice(richGlenIndex, destIndex + 1).reverse();
        if (originIndex < richGlenIndex) {
            var planForwardromRich = planForward;
        } else if (originIndex > destIndex) {
            var planFromRich = planBackward;
        } else {
            var planFromRich = origin;
        }
    }

    console.log(planToRich);
    console.log(planFromRich);
    var fullPlan = planToRich.concat(planFromRich);
    console.log(fullPlan);
    return fullPlan;

}}



// //SAME LINES
// console.log("SAME LINE- FORWARD --> Flinders Street, Richmond, East Richmond, Burnley, Hawthorn");
// console.log(tramPlan('Flinders Street','Hawthorn'));
//
// console.log("SAME LINE REVERSE --> Glenferrie, Hawthorn, Burnley, East Richmond")
// console.log(tramPlan('Glenferrie','East Richmond'));

//SWITCH LINES
console.log("DIFFERENT LINES- FORWARD --> Flagstaff, Melbourne Central, Parliament, RICHMOND, South Yarra");
console.log(tramPlan('Flagstaff','South Yarra'));

console.log("DIFFERENT LINES - REVERSE--> Hawthorn, Burnley, East Richmond, (GLEN WAVERLY) RICHMOND, Kooyong");
console.log(tramPlan('Hawthorn','Kooyong'));
