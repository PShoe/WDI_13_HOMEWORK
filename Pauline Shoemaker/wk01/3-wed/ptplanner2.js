//console.log('This thing working?')


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
        var planBackward= Sandringham.slice(destIndex, originIndex + 1);
        planBackward.reverse();
        if (planForward || planBackward !== null){

        }
        console.log("forward: " + planForward);
        console.log("backward: " + planBackward);
    }
    else if (yourLine === 'Glen Waverly'){
        var planForward = GlenWaverly.slice(originIndex, destIndex + 1);
        var planBackward= GlenWaverly.slice(destIndex, originIndex + 1);
        planBackward.reverse();
        console.log("forward: " + planForward);
        console.log("backward: " + planBackward);
    }
    else if (yourLine === 'Alamein'){
        var planForward = Alamein.slice(originIndex, destIndex + 1);
        var planBackward= Alamein.slice(destIndex, originIndex + 1);
        planBackward.reverse();
        console.log("forward: " + planForward);
        console.log("backward: " + planBackward);
    }
};









//IF NOT ON THE SAME LINE
if (originLine !== destLine) {
    console.log("You will need to CHANGE lines at Richmond to reach your destination.");
    var richSandIndex = Sandringham.indexOf('Richmond');
    var richGlenIndex = GlenWaverly.indexOf('Richmond');
    var richAlaIndex = Alamein.indexOf('Richmond');

    if (originLine === 'Sandringham'){
        //var originIndex = Sandringham.indexOf(origin);
        var planToRich = Sandringham.slice(originIndex,richSandIndex);
    }
    else if (originLine === 'Alamein'){
        //var originIndex = Alamein.indexOf(origin);
        var planToRich = Alamein.slice(originIndex,richAlaIndex);
    }
    else if (originLine === 'Glen Waverly'){
        //var originIndex = GlenWaverly.indexOf(origin);
        var planToRich = GlenWaverly.slice(originIndex,richGlenIndex);

    }

    if (destLine === 'Sandringham'){
        //var destIndex = Sandringham.indexOf(dest);
        var planFromRich = Sandringham.slice(richSandIndex, destIndex + 1);
    }
    else if (destLine === 'Alamein'){
        //var destIndex = Alamein.indexOf(dest);
        var planFromRich = Alamein.slice(richAlaIndex, destIndex + 1);

    }
    else if (destLine === 'Glen Waverly'){
        //var destIndex = GlenWaverly.indexOf(dest);
        var planFromRich = GlenWaverly.slice(richAlaIndex, destIndex + 1);
    }

    var fullPlan = planToRich.concat(planFromRich);
    return fullPlan;

}}




console.log("SAME LINE- FORWARD --> Flinders Street, Richmond, East Richmond, Burnley, Hawthorn");
console.log(tramPlan('Flinders Street','Hawthorn'));
console.log("SAME LINE REVERSE --> Glenferrie, Hawthorn, Burnley, East Richmond")
console.log(tramPlan('Glenferrie','East Richmond'));
console.log("DIFFERENT LINES- FORWARD --> Flagstaff, Melbourne Central, Parliament, Richmond, South Yarra");
console.log(tramPlan('Flagstaff','South Yarra'));
console.log("DIFFERENT LINES - REVERSE--> Hawthorn, Burnley, East Richmond, Richmond, Kooyong");
console.log(tramPlan('Hawthorn','Kooyong'));
