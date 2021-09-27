window.onload = function(){
    var univOption = document.getElementById('University');
    var courseOption = document.getElementById('Course');
    univOption.onclick = handler;
    courseOption.onclick = handler;
}
function handler(){
    var univOption = document.getElementsByName('unicour'); 
    var univdiv = document.getElementById('univdiv');
    var coursediv = document.getElementById('courdiv');
    var i;
    for(i = 0; i < univOption.length; i++) { 
        if(univOption[i].checked) {
            if(univOption[i].value == 'Univeristy'){
               univdiv.style.display='block';
                coursediv.style.display='none';

                var data = univData.universities;
                var list1 = document.getElementById('firstList');
                var i;
                list1.options[0] = new Option('--Select--', '');
                list1.options[0].setAttribute("class","red");
                for(i=0;i<data.length;i++){
                    list1.options[i+1] = new Option(data[i], data[i]);
                    list1.options[i+1].setAttribute("class","red");
                }
            }else{
                univdiv.style.display='none';
                coursediv.style.display='block';

                var coursedata = courseData.courses;
                var courseList = document.getElementById('courseList');
                var i;
                courseList.options[0] = new Option('--Select--', '');
                courseList.options[0].setAttribute("class","red");
                for(i=0;i<coursedata.length;i++){
                    courseList.options[i+1] = new Option(coursedata[i], coursedata[i].replace(/\s+/g, ''));
                    courseList.options[i+1].setAttribute("class","red");
                }    
            }
        }
    }
}
function getUniversitydetails(){
    var courseList = document.getElementById('courseList');
    var universityList = document.getElementById("universityList");
    var courseListSelectedValue = courseList.options[courseList.selectedIndex].value;
    if(courseListSelectedValue!= ""){
        var universities = univData["universities"];
        
        var i;
        universityList.options[0] = new Option('--Select--', '');
        universityList.options[0].setAttribute("class","red");
        for(i=0;i<universities.length;i++){
            universityList.options[i+1] = new Option(universities[i], universities[i]+courseListSelectedValue);
            universityList.options[i+1].setAttribute("class","red");
    }
    var univListSelValue = universityList.options[universityList.selectedIndex].value;
    console.log(courseListSelectedValue);
    console.log(univListSelValue);
}
}
function getCoursedetails(){
    var courseList = document.getElementById('courseList');
    var universityList = document.getElementById("universityList");
    var univlink=document.getElementById("hyperlink1");
    var courseListSelectedText = courseList.options[courseList.selectedIndex].text;
    var courseListSelectedValue = courseList.options[courseList.selectedIndex].value;
    var universityListSelectedValue = universityList.options[universityList.selectedIndex].value;  
    var universitySelectedText = universityList.options[universityList.selectedIndex].text;  
    
    var allLinkItems = Object.keys(links);
    var univLinks = allLinkItems.filter(element => element.includes(universitySelectedText));
    var univSearchLinks = univLinks.filter(ele=>ele.includes(courseListSelectedValue));
    console.log(univSearchLinks);
    var lk;
    if(univSearchLinks.length>0){
        univlink.innerHTML = "";
        for(i=0;i<univSearchLinks.length;i++){
            var lnk = links[univSearchLinks[i]];
            var params = "'width=600,height=400'";
            var displayText = courseListSelectedText + "- (" + univSearchLinks[i] + ")";
            link = '<a href="' + lnk +'" style="display:block" target="popup" onclick="window.open(' + lnk +',' + displayText + ',' + params + ')">'+displayText+'</a>';
            univlink.innerHTML += link;
        
        }
    }
    else{
        univlink.innerHTML = "No data found";
    }
}
function getCourses(){
 
    var list1 = document.getElementById('firstList');
    var list2 = document.getElementById("secondList");
    var list1SelectedValue = list1.options[list1.selectedIndex].value;
    if(list1SelectedValue!=""){
        var programs = univData[list1SelectedValue];

        var i;
        list2.options[0] = new Option('--Select--', '');
        list2.options[0].setAttribute("class","red");
        for(i=0;i<programs.length;i++){
            list2.options[i+1] = new Option(programs[i], list1SelectedValue+programs[i].replace(/\s+/g, ''));
            list2.options[i+1].setAttribute("class","red");
        }
    }
} 
function getDetails(){
    var list2 = document.getElementById("secondList");     
    var univlink=document.getElementById("hyperlink");
    var list2SelectedValue = list2.options[list2.selectedIndex].value;
    var list2SelectedText = list2.options[list2.selectedIndex].text;
        if(list2SelectedValue!=""){
            var link = links[list2SelectedValue];
            var params = "'width=600,height=400'";
            univlink.innerHTML='<a href="' + link +'" style="display:block" target="popup" onclick="window.open(' + link +',' + list2SelectedText + ',' + params + ')">'+list2SelectedText+'</a>';
        }
    
    /*switch(list2SelectedValue){
        case 'WaterlooComputerScience' :
            var link = waterloolinks.computerScience;
            var name = "Computer Science";
            var params = "'width=600,height=400'";
            univlink.innerHTML='<a href="' + link +'" style="display:block" target="popup" onclick="window.open(' + link +',' + name + ',' + params + ')">Computer Science</a>';
                    break;
    }*/
}
            