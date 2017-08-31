console.log('This thing working?')


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
        console.log(originIndex);
    }
    if (dest === train[i].station){
        var dest = train[i].station;
        var destLine = train[i].line;
        var destIndex = train[i].stopNum;
        console.log(destIndex);

    }
}

//IF ON THE SAME LINE
if (originLine === destLine){
    var yourLine = originLine;
    console.log( "These stops are on the same " + yourLine + " line, you will not have to change lines.");
    if (yourLine === 'Sandringham'){
        var origIndex = Sandringham.indexOf(origin); // 1
        var destIndex = Sandringham.indexOf(dest); // 4
        var plan = Sandringham.slice(origIndex, destIndex + 1);
        return plan;
    }
    else if (yourLine === 'Glen Waverly'){
        var origIndex = GlenWaverly.indexOf(origin); // 1
        var destIndex = GlenWaverly.indexOf(dest); // 4
        var plan = GlenWaverly.slice(origIndex, destIndex + 1);
        return plan;
    }
    else if (yourLine === 'Alamein'){
        var origIndex = Alamein.indexOf(origin); // 1
        if (originLine === destLine) // 4
        var plan = Alamein.slice(origIndex, destIndex + 1);
        return plan;
    }
};

//IF NOT ON THE SAME LINE
if (originLine !== destLine) {
    console.log("You will need to change lines to reach your destination.");
    var richSandIndex = Sandringham.indexOf('Richmond');
    var richGlenIndex = GlenWaverly.indexOf('Richmond');
    var richAlaIndex = Alamein.indexOf('Richmond');

    if (originLine === 'Sandringham'){
        var origIndex = Sandringham.indexOf(origin);
        var planToRich = Sandringham.slice(origIndex,richSandIndex);
    }
    else if (originLine === 'Alamein'){
        var origIndex = Alamein.indexOf(origin);
        var planToRich = Alamein.slice(origIndex,richAlaIndex);
    }
    else if (originLine === 'Glen Waverly'){
        var origIndex = GlenWaverly.indexOf(origin);
        var planToRich = GlenWaverly.slice(origIndex,richGlenIndex);

    }

    if (destLine === 'Sandringham'){
        var destIndex = Sandringham.indexOf(dest);
        var planFromRich = Sandringham.slice(richSandIndex, destIndex + 1);
    }
    else if (destLine === 'Alamein'){
        var destIndex = Alamein.indexOf(dest);
        var planFromRich = Alamein.slice(richAlaIndex, destIndex + 1);

    }
    else if (destLine === 'Glen Waverly'){
        var destIndex = GlenWaverly.indexOf(dest);
        var planFromRich = GlenWaverly.slice(richAlaIndex, destIndex + 1);
    }

    var fullPlan = planToRich.concat(planFromRich);
    return fullPlan;

}}
