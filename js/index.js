//All add goes
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.removeEventListener('deviceready', onDeviceReady, false);

    function checkConnection() {
        var networkState = navigator.connection.type;
    
        var states = {};
        states[Connection.UNKNOWN]  = 'yes';
        states[Connection.ETHERNET] = 'yes';
        states[Connection.WIFI]     = 'yes';
        states[Connection.CELL_2G]  = 'yes';
        states[Connection.CELL_3G]  = 'yes';
        states[Connection.CELL_4G]  = 'yes';
        states[Connection.CELL]     = 'yes';
        states[Connection.NONE]     = 'no';

        if(states[networkState] == "yes"){
            sessionStorage.setItem("net","yes");
        }
        else{
            sessionStorage.setItem("net","no");
        }
    }
    
    //call the function
    checkConnection();

    // Set AdMobAds options:
    admob.banner.config({
    id: 'ca-app-pub-8652940814169251/3398309054',
    })
    
    // Create banner
    admob.banner.prepare()
    
    // Show the banner
    admob.banner.show()
       
    
    var show_one_ins = sessionStorage.getItem("show_one_ins");

    if(show_one_ins == null){
        // Request interstitial ad (will present automatically when autoShowInterstitial is set to true)
        admob.interstitial.config({
        id: 'ca-app-pub-8652940814169251/1098081791',
        AD_SIZE: SMART_BANNER
        })
        
        admob.interstitial.prepare()
        
        admob.interstitial.show()

        sessionStorage.setItem("show_one_ins","1");
    }

    // Request rewarded ad (will present automatically when autoShowRewarded is set to true)
    admob.requestRewardedAd();
  }
  
  document.addEventListener("deviceready", onDeviceReady, false);

  function certificate(){
    var net = sessionStorage.getItem("net");

    if(net == "yes"){
        var main_web = "https://apps.zeropreface.com/certificate/learnhtml/download.html";
        cordova.InAppBrowser.open(main_web, '_self', 'location=no,zoom=no');
    }
    else if(net = "no"){
        swal.fire({
            title: "দূঃখিত",
            text: "কোনো ইন্টারনেট সংযোগ নেই ।",
            type: "error",
        }).then(function(){
            window.location.reload(true);
        })
    }
}

    const splashsc = document.querySelector(".splashScreen");
    var loader_ss = sessionStorage.getItem("loader");

    if(loader_ss == null){
        setInterval(function(){
            splashsc.style.display = "none";
            sessionStorage.setItem("loader","1");
        },2000)
    }
    else{
        splashsc.style.display = "none";
    }



    //Progress bar System
    //Collect all quiz status
    var progress_value = 0;
    var intro_quiz = parseInt(localStorage.getItem("intro quiz"));
    var editor_quiz = parseInt(localStorage.getItem("editor quiz"));
    var element_quiz = parseInt(localStorage.getItem("element quiz"));
    var attribute_quiz = parseInt(localStorage.getItem("attribute quiz"));
    var heading_quiz = parseInt(localStorage.getItem("heading quiz"));
    var paragraph_quiz = parseInt(localStorage.getItem("paragraph quiz"));
    var quotation_quiz = parseInt(localStorage.getItem("quotation quiz"));
    var comment_quiz = parseInt(localStorage.getItem("comment quiz"));
    var color_quiz = parseInt(localStorage.getItem("color quiz"));
    var css_quiz = parseInt(localStorage.getItem("css quiz"));
    var image_quiz = parseInt(localStorage.getItem("image quiz"));
    var link_quiz = parseInt(localStorage.getItem("link quiz"));
    var table_quiz = parseInt(localStorage.getItem("table quiz"));
    var list_quiz = parseInt(localStorage.getItem("list quiz"));
    var class_quiz = parseInt(localStorage.getItem("class quiz"));
    var id_quiz = parseInt(localStorage.getItem("id quiz"));
    var iframe_quiz = parseInt(localStorage.getItem("iframe quiz"));
    var javascript_quiz = parseInt(localStorage.getItem("javascript quiz"));
    var symbol_quiz = parseInt(localStorage.getItem("symbol quiz"));
    var form_quiz = parseInt(localStorage.getItem("form quiz"));
    var form_input_types_quiz = parseInt(localStorage.getItem("form_input_types quiz"));
    var video_quiz = parseInt(localStorage.getItem("video quiz"));
    var audio_quiz = parseInt(localStorage.getItem("audio quiz"));
    var youtube_quiz = parseInt(localStorage.getItem("youtube quiz"));
    var favicon_quiz = parseInt(localStorage.getItem("favicon quiz"));

    if(intro_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(editor_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(element_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(attribute_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(heading_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(paragraph_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(quotation_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(comment_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(color_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(css_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(image_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(link_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(table_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(list_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(class_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(id_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(iframe_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(javascript_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(symbol_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(form_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(form_input_types_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(video_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(audio_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(youtube_quiz == 4){
        progress_value = progress_value + 4;
    }
    if(favicon_quiz == 4){
        progress_value = progress_value + 4;
    }
    //Loader Goes Here
    var progress = document.querySelector(".progress-bar");
    var progress_value_con = document.querySelector(".show-progress-value");

    progress.style.width = progress_value+"%";
    progress_value_con.innerHTML = progress_value+"%";

    if(progress_value == 100){
        document.getElementById("certificate").style.display = "block";
    }

//get grid and work with grid
    var learn_step_grid = document.querySelector(".learning-steps");
    var quiz_grid = document.querySelector(".start-quiz");
    var code_editor_grid = document.querySelector(".start-code");
    var report_grid = document.querySelector(".report-bug");
    var rating_grid = document.querySelector(".rate-us");

    const whereYouRead = parseInt(localStorage.getItem("whereYouRead"));

    var last_read = document.querySelector(".where-last-read");
    var continue_learn = document.querySelector(".continue-learn");
    //show continue leaning when strat learning

    last_read.onclick = function(){
        console.log("hello");
        //Continue Learning
        if(whereYouRead == 1){
            window.location.href = "learning/intro.html";
        }
        else if(whereYouRead == 2){
            window.location.href = "learning/editor.html";
        }
        else if(whereYouRead == 3){
            window.location.href = "learning/element.html";
        }
        else if(whereYouRead == 4){
            window.location.href = "learning/attribute.html";
        }
        else if(whereYouRead == 5){
            window.location.href = "learning/heading.html";
        }
        else if(whereYouRead == 6){
            window.location.href = "learning/paragraph.html";
        }
        else if(whereYouRead == 7){
            window.location.href = "learning/quotation.html";
        }
        else if(whereYouRead == 8){
            window.location.href = "learning/comment.html";
        }
        else if(whereYouRead == 9){
            window.location.href = "learning/color.html";
        }
        else if(whereYouRead == 10){
            window.location.href = "learning/css.html";
        }
        else if(whereYouRead == 11){
            window.location.href = "learning/image.html";
        }
        else if(whereYouRead == 12){
            window.location.href = "learning/link.html";
        }
        else if(whereYouRead == 13){
            window.location.href = "learning/table.html";
        }
        else if(whereYouRead == 14){
            window.location.href = "learning/list.html";
        }
        else if(whereYouRead == 15){
            window.location.href = "learning/class.html";
        }
        else if(whereYouRead == 16){
            window.location.href = "learning/id.html";
        }
        else if(whereYouRead == 17){
            window.location.href = "learning/iframe.html";
        }
        else if(whereYouRead == 18){
            window.location.href = "learning/javascript.html";
        }
        else if(whereYouRead == 19){
            window.location.href = "learning/symbol.html";
        }
        else if(whereYouRead == 20){
            window.location.href = "learning/form.html";
        }
        else if(whereYouRead == 21){
            window.location.href = "learning/form_input_types.html";
        }
        else if(whereYouRead == 22){
            window.location.href = "learning/video.html";
        }
        else if(whereYouRead == 23){
            window.location.href = "learning/audio.html";
        }
        else if(whereYouRead == 24){
            window.location.href = "learning/youtube.html";
        }
        else if(whereYouRead == 25){
            window.location.href = "learning/favicon.html";
        }
        else{
            document.getElementById("alert-fo-no-read").style.display = "block";
            setInterval(() => {
                document.getElementById("alert-fo-no-read").style.display = "none";
            }, 2000);
        }
    }
    
    learn_step_grid.onclick = ()=>{
        window.location.href = "learning_step_for_home.html";
    }
    quiz_grid.onclick = ()=>{
        window.location.href = "quiz.html";
    }
    code_editor_grid.onclick = ()=>{
        window.location.href = "editor.html";
    }
    report_grid.onclick = ()=>{
        var model = device.model;
        var devicePlatform = device.platform;
        var deviceID = device.uuid;
        var deviceVersion = device.version;
        var deviceManufacturer = device.manufacturer;
        cordova.plugins.email.open({
            to:      'zeropreface@gmail.com',
            subject: 'Report Bug Or Issue - Learn HTML',
            body:    'Device Platform : '+devicePlatform+'<br/>Device model : '+model+'<br/>Device ID  :'+deviceID+'<br/>Device Android Version : '+deviceVersion+'<br/>Device Manufacturer : '+deviceManufacturer+'<br/><br/> Please do not delete anything.<br/><br/>',
            isHtml:    true
        });
    }
    rating_grid.onclick = ()=>{
        window.location.href = "https://play.google.com/store/apps/details?id=com.zeropreface.learnhtmlbd";
    }
    
    function onBackKeyDown(e){
        e.preventDefault();   
        Swal.fire({
            title: '<h1 style="font-size : 18px;">আপনি কি অ্যাপটি ক্লোজ করতে চান ?</h1>',
            showDenyButton: true,
            confirmButtonText: 'হ্যাঁ',
            denyButtonText: `না`,
        }).then((result) => {
            if (result.isConfirmed) {
                navigator.app.exitApp();
            } else{
                
            }
        });
    }
