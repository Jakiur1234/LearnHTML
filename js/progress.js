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
        document.getElementById("intro-con").style.background = "#0076FF";
        document.getElementById("intro-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("intro-quiz-link").style.color = "#bcf817";
        document.getElementById("intro-take").style.color = 'white';
        document.getElementById("intro-quiz-num").style.color = "white";
    }
    if(intro_quiz == 0){
        document.getElementById("intro-con").classList.add("bg-danger");
        document.getElementById("intro-take").innerHTML = 'Failed 80%';
        document.getElementById("intro-quiz-link").style.color = "#bcf817";
        document.getElementById("intro-take").style.color = 'white';
        document.getElementById("intro-quiz-num").style.color = "white";
    }
    if(editor_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("editor-con").style.background = "#0076FF";
        document.getElementById("editor-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("editor-quiz-link").style.color = "#bcf817";
        document.getElementById("editor-take").style.color = 'white';
        document.getElementById("editor-quiz-num").style.color = "white";
    }
    if(editor_quiz == 0){
        document.getElementById("editor-con").classList.add("bg-danger");
        document.getElementById("editor-take").innerHTML = 'Failed 80%';
        document.getElementById("editor-quiz-link").style.color = "#bcf817";
        document.getElementById("editor-take").style.color = 'white';
        document.getElementById("editor-quiz-num").style.color = "white";
    }
    if(element_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("element-con").style.background = "#0076FF";
        document.getElementById("element-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("element-quiz-link").style.color = "#bcf817";
        document.getElementById("element-take").style.color = 'white';
        document.getElementById("element-quiz-num").style.color = "white";
    }
    if(element_quiz == 0){
        document.getElementById("element-con").classList.add("bg-danger");
        document.getElementById("element-take").innerHTML = 'Failed 80%';
        document.getElementById("element-quiz-link").style.color = "#bcf817";
        document.getElementById("element-take").style.color = 'white';
        document.getElementById("element-quiz-num").style.color = "white";
    }
    if(attribute_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("attribute-con").style.background = "#0076FF";
        document.getElementById("attribute-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("attribute-quiz-link").style.color = "#bcf817";
        document.getElementById("attribute-take").style.color = 'white';
        document.getElementById("attribute-quiz-num").style.color = "white";
    }
    if(attribute_quiz == 0){
        document.getElementById("attribute-con").classList.add("bg-danger");
        document.getElementById("attribute-take").innerHTML = 'Failed 80%';
        document.getElementById("attribute-quiz-link").style.color = "#bcf817";
        document.getElementById("attribute-take").style.color = 'white';
        document.getElementById("attribute-quiz-num").style.color = "white";
    }
    if(heading_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("heading-con").style.background = "#0076FF";
        document.getElementById("heading-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("heading-quiz-link").style.color = "#bcf817";
        document.getElementById("heading-take").style.color = 'white';
        document.getElementById("heading-quiz-num").style.color = "white";
    }
    if(heading_quiz == 0){
        document.getElementById("heading-con").classList.add("bg-danger");
        document.getElementById("heading-take").innerHTML = 'Failed 80%';
        document.getElementById("heading-quiz-link").style.color = "#bcf817";
        document.getElementById("heading-take").style.color = 'white';
        document.getElementById("heading-quiz-num").style.color = "white";
    }
    if(paragraph_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("paragraph-con").style.background = "#0076FF";
        document.getElementById("paragraph-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("paragraph-quiz-link").style.color = "#bcf817";
        document.getElementById("paragraph-take").style.color = 'white';
        document.getElementById("paragraph-quiz-num").style.color = "white";
    }
    if(paragraph_quiz == 0){
        document.getElementById("paragraph-con").classList.add("bg-danger");
        document.getElementById("paragraph-take").innerHTML = 'Failed 80%';
        document.getElementById("paragraph-quiz-link").style.color = "#bcf817";
        document.getElementById("paragraph-take").style.color = 'white';
        document.getElementById("paragraph-quiz-num").style.color = "white";
    }
    if(quotation_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("quotation-con").style.background = "#0076FF";
        document.getElementById("quotation-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("quotation-quiz-link").style.color = "#bcf817";
        document.getElementById("quotation-take").style.color = 'white';
        document.getElementById("quotation-quiz-num").style.color = "white";
    }
    if(quotation_quiz == 0){
        document.getElementById("quotation-con").classList.add("bg-danger");
        document.getElementById("quotation-take").innerHTML = 'Failed 80%';
        document.getElementById("quotation-quiz-link").style.color = "#bcf817";
        document.getElementById("quotation-take").style.color = 'white';
        document.getElementById("quotation-quiz-num").style.color = "white";
    }
    if(comment_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("comment-con").style.background = "#0076FF";
        document.getElementById("comment-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("comment-quiz-link").style.color = "#bcf817";
        document.getElementById("comment-take").style.color = 'white';
        document.getElementById("comment-quiz-num").style.color = "white";
    }
    if(comment_quiz == 0){
        document.getElementById("comment-con").classList.add("bg-danger");
        document.getElementById("comment-take").innerHTML = 'Failed 80%';
        document.getElementById("comment-quiz-link").style.color = "#bcf817";
        document.getElementById("comment-take").style.color = 'white';
        document.getElementById("comment-quiz-num").style.color = "white";
    }
    if(color_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("color-con").style.background = "#0076FF";
        document.getElementById("color-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("color-quiz-link").style.color = "#bcf817";
        document.getElementById("color-take").style.color = 'white';
        document.getElementById("color-quiz-num").style.color = "white";
    }
    if(color_quiz == 0){
        document.getElementById("color-con").classList.add("bg-danger");
        document.getElementById("color-take").innerHTML = 'Failed 80%';
        document.getElementById("color-quiz-link").style.color = "#bcf817";
        document.getElementById("color-take").style.color = 'white';
        document.getElementById("color-quiz-num").style.color = "white";
    }
    if(css_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("css-con").style.background = "#0076FF";
        document.getElementById("css-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("css-quiz-link").style.color = "#bcf817";
        document.getElementById("css-take").style.color = 'white';
        document.getElementById("css-quiz-num").style.color = "white";
    }
    if(css_quiz == 0){
        document.getElementById("css-con").classList.add("bg-danger");
        document.getElementById("css-take").innerHTML = 'Failed 80%';
        document.getElementById("css-quiz-link").style.color = "#bcf817";
        document.getElementById("css-take").style.color = 'white';
        document.getElementById("css-quiz-num").style.color = "white";
    }
    if(image_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("image-con").style.background = "#0076FF";
        document.getElementById("image-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("image-quiz-link").style.color = "#bcf817";
        document.getElementById("image-take").style.color = 'white';
        document.getElementById("image-quiz-num").style.color = "white";
    }
    if(image_quiz == 0){
        document.getElementById("image-con").classList.add("bg-danger");
        document.getElementById("image-take").innerHTML = 'Failed 80%';
        document.getElementById("image-quiz-link").style.color = "#bcf817";
        document.getElementById("image-take").style.color = 'white';
        document.getElementById("image-quiz-num").style.color = "white";
    }
    if(link_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("link-con").style.background = "#0076FF";
        document.getElementById("link-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("link-quiz-link").style.color = "#bcf817";
        document.getElementById("link-take").style.color = 'white';
        document.getElementById("link-quiz-num").style.color = "white";
    }
    if(link_quiz == 0){
        document.getElementById("link-con").classList.add("bg-danger");
        document.getElementById("link-take").innerHTML = 'Failed 80%';
        document.getElementById("link-quiz-link").style.color = "#bcf817";
        document.getElementById("link-take").style.color = 'white';
        document.getElementById("link-quiz-num").style.color = "white";
    }
    if(table_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("table-con").style.background = "#0076FF";
        document.getElementById("table-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("table-quiz-link").style.color = "#bcf817";
        document.getElementById("table-take").style.color = 'white';
        document.getElementById("table-quiz-num").style.color = "white";
    }
    if(table_quiz == 0){
        document.getElementById("table-con").classList.add("bg-danger");
        document.getElementById("table-take").innerHTML = 'Failed 80%';
        document.getElementById("table-quiz-link").style.color = "#bcf817";
        document.getElementById("table-take").style.color = 'white';
        document.getElementById("table-quiz-num").style.color = "white";
    }
    if(list_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("list-con").style.background = "#0076FF";
        document.getElementById("list-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("list-quiz-link").style.color = "#bcf817";
        document.getElementById("list-take").style.color = 'white';
        document.getElementById("list-quiz-num").style.color = "white";
    }
    if(list_quiz == 0){
        document.getElementById("list-con").classList.add("bg-danger");
        document.getElementById("list-take").innerHTML = 'Failed 80%';
        document.getElementById("list-quiz-link").style.color = "#bcf817";
        document.getElementById("list-take").style.color = 'white';
        document.getElementById("list-quiz-num").style.color = "white";
    }
    if(class_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("class-con").style.background = "#0076FF";
        document.getElementById("class-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("class-quiz-link").style.color = "#bcf817";
        document.getElementById("class-take").style.color = 'white';
        document.getElementById("class-quiz-num").style.color = "white";
    }
    if(class_quiz == 0){
        document.getElementById("class-con").classList.add("bg-danger");
        document.getElementById("class-take").innerHTML = 'Failed 80%';
        document.getElementById("class-quiz-link").style.color = "#bcf817";
        document.getElementById("class-take").style.color = 'white';
        document.getElementById("class-quiz-num").style.color = "white";
    }
    if(id_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("id-con").style.background = "#0076FF";
        document.getElementById("id-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("id-quiz-link").style.color = "#bcf817";
        document.getElementById("id-take").style.color = 'white';
        document.getElementById("id-quiz-num").style.color = "white";
    }
    if(id_quiz == 0){
        document.getElementById("id-con").classList.add("bg-danger");
        document.getElementById("id-take").innerHTML = 'Failed 80%';
        document.getElementById("id-quiz-link").style.color = "#bcf817";
        document.getElementById("id-take").style.color = 'white';
        document.getElementById("id-quiz-num").style.color = "white";
    }
    if(iframe_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("iframe-con").style.background = "#0076FF";
        document.getElementById("iframe-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("iframe-quiz-link").style.color = "#bcf817";
        document.getElementById("iframe-take").style.color = 'white';
        document.getElementById("iframe-quiz-num").style.color = "white";
    }
    if(iframe_quiz == 0){
        document.getElementById("iframe-con").classList.add("bg-danger");
        document.getElementById("iframe-take").innerHTML = 'Failed 80%';
        document.getElementById("iframe-quiz-link").style.color = "#bcf817";
        document.getElementById("iframe-take").style.color = 'white';
        document.getElementById("iframe-quiz-num").style.color = "white";
    }
    if(javascript_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("javascript-con").style.background = "#0076FF";
        document.getElementById("javascript-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("javascript-quiz-link").style.color = "#bcf817";
        document.getElementById("javascript-take").style.color = 'white';
        document.getElementById("javascript-quiz-num").style.color = "white";
    }
    if(javascript_quiz == 0){
        document.getElementById("javascript-con").classList.add("bg-danger");
        document.getElementById("javascript-take").innerHTML = 'Failed 80%';
        document.getElementById("javascript-quiz-link").style.color = "#bcf817";
        document.getElementById("javascript-take").style.color = 'white';
        document.getElementById("javascript-quiz-num").style.color = "white";
    }
    if(symbol_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("symbol-con").style.background = "#0076FF";
        document.getElementById("symbol-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("symbol-quiz-link").style.color = "#bcf817";
        document.getElementById("symbol-take").style.color = 'white';
        document.getElementById("symbol-quiz-num").style.color = "white";
    }
    if(symbol_quiz == 0){
        document.getElementById("symbol-con").classList.add("bg-danger");
        document.getElementById("symbol-take").innerHTML = 'Failed 80%';
        document.getElementById("symbol-quiz-link").style.color = "#bcf817";
        document.getElementById("symbol-take").style.color = 'white';
        document.getElementById("symbol-quiz-num").style.color = "white";
    }
    if(form_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("form-con").style.background = "#0076FF";
        document.getElementById("form-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("form-quiz-link").style.color = "#bcf817";
        document.getElementById("form-take").style.color = 'white';
        document.getElementById("form-quiz-num").style.color = "white";
    }
    if(form_quiz == 0){
        document.getElementById("form-con").classList.add("bg-danger");
        document.getElementById("form-take").innerHTML = 'Failed 80%';
        document.getElementById("form-quiz-link").style.color = "#bcf817";
        document.getElementById("form-take").style.color = 'white';
        document.getElementById("form-quiz-num").style.color = "white";
    }
    if(form_input_types_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("form_input_types-con").style.background = "#0076FF";
        document.getElementById("form_input_types-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("form_input_types-quiz-link").style.color = "#bcf817";
        document.getElementById("form_input_types-take").style.color = 'white';
        document.getElementById("form_input_types-quiz-num").style.color = "white";
    }
    if(form_input_types_quiz == 0){
        document.getElementById("form_input_types-con").classList.add("bg-danger");
        document.getElementById("form_input_types-take").innerHTML = 'Failed 80%';
        document.getElementById("form_input_types-quiz-link").style.color = "#bcf817";
        document.getElementById("form_input_types-take").style.color = 'white';
        document.getElementById("form_input_types-quiz-num").style.color = "white";
    }
    if(video_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("video-con").style.background = "#0076FF";
        document.getElementById("video-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("video-quiz-link").style.color = "#bcf817";
        document.getElementById("video-take").style.color = 'white';
        document.getElementById("video-quiz-num").style.color = "white";
    }
    if(video_quiz == 0){
        document.getElementById("video-con").classList.add("bg-danger");
        document.getElementById("video-take").innerHTML = 'Failed 80%';
        document.getElementById("video-quiz-link").style.color = "#bcf817";
        document.getElementById("video-take").style.color = 'white';
        document.getElementById("video-quiz-num").style.color = "white";
    }
    if(audio_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("audio-con").style.background = "#0076FF";
        document.getElementById("audio-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("audio-quiz-link").style.color = "#bcf817";
        document.getElementById("audio-take").style.color = 'white';
        document.getElementById("audio-quiz-num").style.color = "white";
    }
    if(audio_quiz == 0){
        document.getElementById("audio-con").classList.add("bg-danger");
        document.getElementById("audio-take").innerHTML = 'Failed 80%';
        document.getElementById("audio-quiz-link").style.color = "#bcf817";
        document.getElementById("audio-take").style.color = 'white';
        document.getElementById("audio-quiz-num").style.color = "white";
    }
    if(youtube_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("youtube-con").style.background = "#0076FF";
        document.getElementById("youtube-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("youtube-quiz-link").style.color = "#bcf817";
        document.getElementById("youtube-take").style.color = 'white';
        document.getElementById("youtube-quiz-num").style.color = "white";
    }
    if(youtube_quiz == 0){
        document.getElementById("youtube-con").classList.add("bg-danger");
        document.getElementById("youtube-take").innerHTML = 'Failed 80%';
        document.getElementById("youtube-quiz-link").style.color = "#bcf817";
        document.getElementById("youtube-take").style.color = 'white';
        document.getElementById("youtube-quiz-num").style.color = "white";
    }
    if(favicon_quiz == 4){
        progress_value = progress_value + 4;
        document.getElementById("favicon-con").style.background = "#0076FF";
        document.getElementById("favicon-take").innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById("favicon-quiz-link").style.color = "#bcf817";
        document.getElementById("favicon-take").style.color = 'white';
        document.getElementById("favicon-quiz-num").style.color = "white";
    }
    if(favicon_quiz == 0){
        document.getElementById("favicon-con").classList.add("bg-danger");
        document.getElementById("favicon-take").innerHTML = 'Failed 80%';
        document.getElementById("favicon-quiz-link").style.color = "#bcf817";
        document.getElementById("favicon-take").style.color = 'white';
        document.getElementById("favicon-quiz-num").style.color = "white";
    }
    //Loader Goes Here
    var progress = document.querySelector(".progress-bar");
    var progress_value_con = document.querySelector(".show-progress-value");

    progress.style.width = progress_value+"%";
    progress_value_con.innerHTML = progress_value+"%";
