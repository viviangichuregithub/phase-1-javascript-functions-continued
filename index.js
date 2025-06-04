// code your solution here
function saturdayFun(){
  console.log( "This Saturday, I want to ....!");
}
saturdayFun();

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
mondayWork("work from home");
mondayWork();                 

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun(); 
saturdayFun("go hiking"); 

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
mondayWork(); 
mondayWork("work from home");
wrapAdjective("!!!")("a hard worker");
wrapAdjective("%")("a dedicated programmer");
wrapAdjective()(); 

