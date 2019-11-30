// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(work="go to the office"){
  return `This Monday, I will ${work}.`;
}


const wrapAdjective = function(char="*"){
  return function(adj="special"){
    return `You are ${char}${adj}${char}!`;
  }
}

const Calculator = {
  add : function(a,b){
    return a+b;
  },
  subtract : function(a,b){
    return a-b;
  },
  multiply : function(a,b){
    return a*b;
  },
  divide : function(a,b){
    return a/b;
  }
}

function actionApplyer(a,arr){
arr.forEach(item=>{a=item(a)})
return a;
}
