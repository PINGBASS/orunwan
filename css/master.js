$('.moreInfos2').click(function(e){
    e.preventDefault();
});

function plzwork(){


    const float6_button=document.getElementsByClassName('float6button');
    const float6_button2=document.getElementsByClassName('numba2');
    const ohrunwan_gesipan=document.getElementsByClassName('ohrunwangesipan');
    const ohrunwan_gesipan2=document.getElementsByClassName('ohrunwangesipan2');
    
    
    float6_button[0].addEventListener('click', function(){
        ohrunwan_gesipan[0].style.position='static';
        ohrunwan_gesipan[0].style.opacity='1';
        ohrunwan_gesipan[0].style.visibility='visible';
        ohrunwan_gesipan[0].style.transition='visibility 0s, opacity 0.7s ease';
        ohrunwan_gesipan2[0].style.position='absolute';
        ohrunwan_gesipan2[0].style.opacity='0';
        ohrunwan_gesipan2[0].style.visibility='hidden';
        float6_button[0].style.background='#808080';
        float6_button[0].style.color='whitesmoke';
        float6_button2[0].style.color='black';
        float6_button2[0].style.background='#f2f2f2';
        

    });
    
    float6_button2[0].addEventListener('click', function(){
        ohrunwan_gesipan2[0].style.position='static';
        ohrunwan_gesipan2[0].style.opacity='1';
        ohrunwan_gesipan2[0].style.visibility='visible';
        ohrunwan_gesipan2[0].style.transition='visibility 0s, opacity 0.7s ease';
        ohrunwan_gesipan[0].style.position='absolute';
        ohrunwan_gesipan[0].style.opacity='0';
        ohrunwan_gesipan[0].style.visibility='hidden';
        float6_button2[0].style.background='#808080';
        float6_button2[0].style.color='whitesmoke';  
        float6_button[0].style.color='black';
        float6_button[0].style.background='#f2f2f2';
    
    });
    };



/* float6_button[0].addEventListener('mouseover', function(){
    float6_button[0].style.background='#c9c8c8';
});
float6_button[0].addEventListener('mouseout', function(){
    float6_button[0].style.background='#f2f2f2';
    float6_button[0].style.color='black';
}); */


/*html의 button태그에 있는 id명 submit에 적용.


문법
btn.addEventListener('click', function(){ });
---------------------------------------------

var btn = document.getElementById('submit');

btn.addEventListener('click', function(){
	btn.style.color = 'red';
	console.log('버튼 동작함');
});


작동
웹화면에 클릭버튼을 누르면 빨간색으로 바뀌고 콘솔로그에 '버튼 동작함'도 출력됨*/





    //if(조건식){참일때 실행할 문장;} else{실행할문장;}
    //classList 검색(add,remove,both),class의 차이점



function plzwork1(){
    const more_info=document.getElementsByClassName('moreInfos');
    const info_ul=document.getElementsByClassName('infoUl2');
    const more_infoo=document.getElementsByClassName('moreInfos2');
    const mission_impossible=document.getElementsByClassName('unvisible');
    
    more_info[0].addEventListener('click', function(){
        info_ul[0].style.opacity='1';
        info_ul[0].style.visibility='visible';
        info_ul[0].style.position='static'
        more_info[0].style.display='none';
        mission_impossible[0].style.display='none';
        info_ul[0].style.transition='visibility 0s, opacity 0.7s ease';
    });
    
    more_infoo[0].addEventListener('click', function(){
        info_ul[0].style.opacity='0';
        info_ul[0].style.visibility='hidden';
        info_ul[0].style.position='absolute';
        info_ul[0].style.bottom='12%'; 
        more_info[0].style.display='block';
        mission_impossible[0].style.display='block';
    });

};



function plzwork3(){

    const join_form1=document.getElementsByClassName('joinForm1');
    const join_form2=document.getElementsByClassName('joinForm2');
    const button1=document.getElementsByClassName('button1');
    const button2=document.getElementsByClassName('button2');

    button1[0].addEventListener('click', function(){
        join_form1[0].style.position='static';
        join_form1[0].style.opacity='1';
        join_form1[0].style.visibility='visible';
        join_form1[0].style.transition='visibility 0s, opacity 0.7s ease';
        join_form2[0].style.opacity='0';
        join_form2[0].style.position='absolute';
        join_form2[0].style.visibility='hidden';
        button1[0].style.background='rgb(71 71 71)';
        button1[0].style.color='whitesmoke';
        button2[0].style.color='rgb(85, 85, 85)';
        button2[0].style.background='#f2f2f2';
        
    });

    button2[0].addEventListener('click', function(){
        join_form2[0].style.position='static';
        join_form2[0].style.opacity='1';
        join_form2[0].style.visibility='visible';
        join_form2[0].style.transition='visibility 0s, opacity 0.7s ease';
        join_form1[0].style.opacity='0';
        join_form1[0].style.position='absolute';
        join_form1[0].style.visibility='hidden';
        button2[0].style.background='rgb(71 71 71)';
        button2[0].style.color='whitesmoke';
        button1[0].style.color='rgb(85, 85, 85)';
        button1[0].style.background='#f2f2f2';
    });

};

function plzwork4(){

    const float2_button=document.getElementsByClassName('float2button');
    const float2_button2=document.getElementsByClassName('float2button2');
    const tab1=document.getElementsByClassName('tab1');
    const tab1_2=document.getElementsByClassName('tab1_2');
    
    float2_button[0].addEventListener('click', function(){
        tab1[0].style.position='static';
        tab1[0].style.opacity='1';
        tab1[0].style.visibility='visible';
        tab1[0].style.transition='visibility 0s, opacity 0.7s ease';
        tab1_2[0].style.position='absolute';
        tab1_2[0].style.opacity='0';
        tab1_2[0].style.visibility='hidden';
        float2_button[0].style.background='#808080';
        float2_button[0].style.color='whitesmoke';
        float2_button2[0].style.color='black';
        float2_button2[0].style.background='#f2f2f2';
    });
    
    float2_button2[0].addEventListener('click', function(){
        tab1_2[0].style.position='static';
        tab1_2[0].style.opacity='1';
        tab1_2[0].style.visibility='visible';
        tab1_2[0].style.transition='visibility 0s, opacity 0.7s ease';
        tab1[0].style.position='absolute';
        tab1[0].style.opacity='0';
        tab1[0].style.visibility='hidden';
        float2_button2[0].style.background='#808080';
        float2_button2[0].style.color='whitesmoke';
        float2_button[0].style.color='black';
        float2_button[0].style.background='#f2f2f2';
    });
};

function plzwork5(){

    const runge_button1=document.getElementsByClassName('jage');
    const runge_button2=document.getElementsByClassName('jage2');
    const runge_tab1=document.getElementsByClassName('MemColContentsWrapper1');
    const runge_tab2=document.getElementsByClassName('MemColContentsWrapper2');
    
    runge_button1[0].addEventListener('click', function(){
        runge_tab1[0].style.position='static';
        runge_tab1[0].style.opacity='1';
        runge_tab1[0].style.visibility='visible';
        runge_tab1[0].style.transition='visibility 0s, opacity 0.7s ease';
        runge_tab2[0].style.position='absolute';
        runge_tab2[0].style.opacity='0';
        runge_tab2[0].style.visibility='hidden';
        runge_button1[0].style.background='rgb(71 71 71)';
        runge_button1[0].style.color='whitesmoke';
        runge_button2[0].style.color='black';
        runge_button2[0].style.background='#f2f2f2';
    });
    
    runge_button2[0].addEventListener('click', function(){
        runge_tab2[0].style.position='static';
        runge_tab2[0].style.opacity='1';
        runge_tab2[0].style.visibility='visible';
        runge_tab2[0].style.transition='visibility 0s, opacity 0.7s ease';
        runge_tab1[0].style.position='absolute';
        runge_tab1[0].style.opacity='0';
        runge_tab1[0].style.visibility='hidden'; 
        runge_button2[0].style.background='rgb(71 71 71)';
        runge_button2[0].style.color='whitesmoke';
        runge_button1[0].style.color='black';
        runge_button1[0].style.background='#f2f2f2';
        
    });
};

function plzwork6(){
    const issue_button1=document.getElementsByClassName('someMo');
    const cut_in=document.getElementsByClassName('cutin');
    const more_bogi=document.getElementsByClassName('morebogi');
    const more_bro=document.getElementsByClassName('morebogibro');

    issue_button1[0].addEventListener('click', function(){
        more_bogi[0].style.display='block';
        more_bro[0].style.overflow='auto';
        issue_button1[0].style.display='none';
    });

    cut_in[0].addEventListener('click', function(){
        more_bogi[0].style.display='none';
        more_bro[0].style.overflow='hidden';
        issue_button1[0].style.display='block';
    });
};
function plzwork7(){
    const issue_button1=document.getElementsByClassName('someMo2');
    const cut_in=document.getElementsByClassName('cutin2');
    const more_bogi=document.getElementsByClassName('morebogi2');
    const more_bro=document.getElementsByClassName('morebogibro2');

    issue_button1[0].addEventListener('click', function(){
        more_bogi[0].style.display='block';
        more_bro[0].style.overflow='auto';
        issue_button1[0].style.display='none';
    });

    cut_in[0].addEventListener('click', function(){
        more_bogi[0].style.display='none';
        more_bro[0].style.overflow='hidden';
        issue_button1[0].style.display='block';
    });
};
function plzwork8(){
    const issue_button1=document.getElementsByClassName('someMo3');
    const cut_in=document.getElementsByClassName('cutin3');
    const more_bogi=document.getElementsByClassName('morebogi3');
    const more_bro=document.getElementsByClassName('morebogibro3');

    issue_button1[0].addEventListener('click', function(){
        more_bogi[0].style.display='block';
        more_bro[0].style.overflow='auto';
        issue_button1[0].style.display='none';
    });

    cut_in[0].addEventListener('click', function(){
        more_bogi[0].style.display='none';
        more_bro[0].style.overflow='hidden';
        issue_button1[0].style.display='block';
    });
};
function plzwork9(){
    const issue_button1=document.getElementsByClassName('someMo4');
    const cut_in=document.getElementsByClassName('cutin4');
    const more_bogi=document.getElementsByClassName('morebogi4');
    const more_bro=document.getElementsByClassName('morebogibro4');

    issue_button1[0].addEventListener('click', function(){
        more_bogi[0].style.display='block';
        more_bro[0].style.overflow='auto';
        issue_button1[0].style.display='none';
    });

    cut_in[0].addEventListener('click', function(){
        more_bogi[0].style.display='none';
        more_bro[0].style.overflow='hidden';
        issue_button1[0].style.display='block';
    });
};