var postResults = function(){
	//Change this URL to point to your server side script	
	var url = 'https://ifm-solutions.com/echo/echo.php?' +
		'PassFail=$$cpQuizInfoPassFail$$&' +
		'Percent=$$cpInfoPercentage$$';
	
	var win = openURLWithParameters(url, '_blank');
}



/*
var onButtonClick = function(){
    
    var studentFirstName=getCpVariable('vFirstName');
    var studentLastName=getCpVariable('vLastName');

        
    if(studentFirstName!='' && studentLastName!=''){
        SetCpVariable('vMessage','Thank you '+studentFirstName);
        SetCpVariable('cpCmndResume',1);
        
    }else{
          SetCpVariable('vMessage','Please complete fill the form');
    }

};
*/

//var SetCpVariable=function(cpVariableName,valuetoSet){
//    
/*    var objCp=window.document.getElementById('Captivate');
    objCp.cpEISetValue('m_VarHandle.'+cpVariableName,valuetoSet);*/
//    
//    window[cpVariableName]=valuetoSet;
//}

//var getCpVariable=function(CpVariableName){

/*        var objCp=window.document.getElementById('Captivate');
        return objCp.cpEIGetValue('m_VarHandle.'+CpVariableName);*/
//        return window[CpVariableName];
//}

