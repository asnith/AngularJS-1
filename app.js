angular.module('app',[])
.controller('abc',abc)
function abc($scope){
$scope.texts=""
$scope.funct = function(abc){
count=0
if(abc==undefined || abc==""){
  $scope.texts="Please Enter Data First"
}else{
for(var i=0;i<abc.length;i++){
  if(abc[i]==","){
    count+=1
  }
  if(count<=2){
    $scope.texts="Enjoy!"
  }
  else{
   $scope.texts="Too Much!" 
  }
}
}
}
}
      