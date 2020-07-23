'use strict'
console.log('--------------------------------------------')
console.log('The second question of the assignment')
var heathAvg =  (89 + 120 + 103) / 3;
var zaneAvg =  (116 + 94 + 123) / 3;
 console.log('Average score of Heath team is :'+heathAvg)
 console.log('Average score of Zane team is :'+zaneAvg)

if (heathAvg > zaneAvg){
    console.log('Heath team won the match with average score as:'+heathAvg)
}
else {
    console.log('Zane team won the match with average score as:'+zaneAvg)
}

var mariahAvg=(97 + 134 + 105) / 3;

console.log('--------------------------------------------')
console.log('Mariah\'s team is also added')
if (heathAvg > zaneAvg  && heathAvg > mariahAvg) {   console.log('Heath team is winning'); }
else if (zaneAvg > heathAvg && zaneAvg > mariahAvg) { console.log('Zane team is winning'); }
else if(mariahAvg> heathAvg && mariahAvg> zaneAvg) { console.log('Mariah team is winning'); }
else if(heathAvg === zaneAvg && heathAvg > mariahAvg){ console.log('Heath and zane has a tie');}
else if(mariahAvg === zaneAvg && mariahAvg> heathAvg){ console.log('Mariah and Zane has a tie');}
else { console.log('Mariah and Heath has a tie');}


