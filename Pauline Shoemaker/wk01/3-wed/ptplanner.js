console.log('working?')


 var train = [
     {
         line: 'Alamein',
         station: 'Flinders Street'
     },
     {
         line: 'Alamein',
         station: 'Richmond'
     },
     {
         line: 'Alamein',
         station: 'East Richmond'
     },
     {
         line: 'Alamein',
         station: 'Burnley'
     },
     {
         line: 'Alamein',
         station: 'Hawthorn'
     },
     {
         line: 'Alamein',
         station: 'Glenferrie'
     },
     {
         line: 'Glen Waverly',
         station: 'Flagstaff'
     },
     {
         line: 'Glen Waverly',
         station: 'Melbourne Central'
     },
     {
         line: 'Glen Waverly',
         station: 'Parliament'
     },
     {
         line: 'Glen Waverly',
         station: 'Richmond'
     },
     {
         line: 'Glen Waverly',
         station: 'Kooyong'
     },
     {
         line: 'Glen Waverly',
         station: 'Tooronga'
     },
     {
         line: 'Sandringham',
         station: 'Southern Cross'
     },
     {
         line: 'Sandringham',
         station: 'Richmond'
     },
     {
         line: 'Sandringham',
         station: 'South Yarra'
     },
     {
         line: 'Sandringham',
         station: 'Prahran'
     },
     {
         line: 'Sandringham',
         station: 'Windsor'
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
    }
    if (dest === train[i].station){
        var dest = train[i].station;
        var destLine = train[i].line;
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
