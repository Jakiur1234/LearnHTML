var intro_quiz = parseInt(localStorage.getItem("intro quiz"));
var intro_quiz_score = parseInt(localStorage.getItem("intro quiz score"));
var intro_quiz_percentage = parseInt(localStorage.getItem("intro quiz percentage"));
var editor_quiz = parseInt(localStorage.getItem("editor quiz"));
var editor_quiz_score = parseInt(localStorage.getItem("editor quiz score"));
var editor_quiz_percentage = parseInt(localStorage.getItem("editor quiz percentage"));
var element_quiz = parseInt(localStorage.getItem("element quiz"));
var element_quiz_score = parseInt(localStorage.getItem("element quiz score"));
var element_quiz_percentage = parseInt(localStorage.getItem("element quiz percentage"));
var attribute_quiz = parseInt(localStorage.getItem("attribute quiz"));
var attribute_quiz_score = parseInt(localStorage.getItem("attribute quiz score"));
var attribute_quiz_percentage = parseInt(localStorage.getItem("attribute quiz percentage"));
var heading_quiz = parseInt(localStorage.getItem("heading quiz"));
var heading_quiz_score = parseInt(localStorage.getItem("heading quiz score"));
var heading_quiz_percentage = parseInt(localStorage.getItem("heading quiz percentage"));
var paragraph_quiz = parseInt(localStorage.getItem("paragraph quiz"));
var paragraph_quiz_score = parseInt(localStorage.getItem("paragraph quiz score"));
var paragraph_quiz_percentage = parseInt(localStorage.getItem("paragraph quiz percentage"));
var quotation_quiz = parseInt(localStorage.getItem("quotation quiz"));
var quotation_quiz_score = parseInt(localStorage.getItem("quotation quiz score"));
var quotation_quiz_percentage = parseInt(localStorage.getItem("quotation quiz percentage"));
var comment_quiz = parseInt(localStorage.getItem("comment quiz"));
var comment_quiz_score = parseInt(localStorage.getItem("comment quiz score"));
var comment_quiz_percentage = parseInt(localStorage.getItem("comment quiz percentage"));
var color_quiz = parseInt(localStorage.getItem("color quiz"));
var color_quiz_score = parseInt(localStorage.getItem("color quiz score"));
var color_quiz_percentage = parseInt(localStorage.getItem("color quiz percentage"));
var css_quiz = parseInt(localStorage.getItem("css quiz"));
var css_quiz_score = parseInt(localStorage.getItem("css quiz score"));
var css_quiz_percentage = parseInt(localStorage.getItem("css quiz percentage"));
var image_quiz = parseInt(localStorage.getItem("image quiz"));
var image_quiz_score = parseInt(localStorage.getItem("image quiz score"));
var image_quiz_percentage = parseInt(localStorage.getItem("image quiz percentage"));
var link_quiz = parseInt(localStorage.getItem("link quiz"));
var link_quiz_score = parseInt(localStorage.getItem("link quiz score"));
var link_quiz_percentage = parseInt(localStorage.getItem("link quiz percentage"));
var table_quiz = parseInt(localStorage.getItem("table quiz"));
var table_quiz_score = parseInt(localStorage.getItem("table quiz score"));
var table_quiz_percentage = parseInt(localStorage.getItem("table quiz percentage"));
var list_quiz = parseInt(localStorage.getItem("list quiz"));
var list_quiz_score = parseInt(localStorage.getItem("list quiz score"));
var list_quiz_percentage = parseInt(localStorage.getItem("list quiz percentage"));
var class_quiz = parseInt(localStorage.getItem("class quiz"));
var class_quiz_score = parseInt(localStorage.getItem("class quiz score"));
var class_quiz_percentage = parseInt(localStorage.getItem("class quiz percentage"));
var id_quiz = parseInt(localStorage.getItem("id quiz"));
var id_quiz_score = parseInt(localStorage.getItem("id quiz score"));
var id_quiz_percentage = parseInt(localStorage.getItem("id quiz percentage"));
var iframe_quiz = parseInt(localStorage.getItem("iframe quiz"));
var iframe_quiz_score = parseInt(localStorage.getItem("iframe quiz score"));
var iframe_quiz_percentage = parseInt(localStorage.getItem("iframe quiz percentage"));
var javascript_quiz = parseInt(localStorage.getItem("javascript quiz"));
var javascript_quiz_score = parseInt(localStorage.getItem("javascript quiz score"));
var javascript_quiz_percentage = parseInt(localStorage.getItem("javascript quiz percentage"));
var symbol_quiz = parseInt(localStorage.getItem("symbol quiz"));
var symbol_quiz_score = parseInt(localStorage.getItem("symbol quiz score"));
var symbol_quiz_percentage = parseInt(localStorage.getItem("symbol quiz percentage"));
var form_quiz = parseInt(localStorage.getItem("form quiz"));
var form_quiz_score = parseInt(localStorage.getItem("form quiz score"));
var form_quiz_percentage = parseInt(localStorage.getItem("form quiz percentage"));
var form_input_types_quiz = parseInt(localStorage.getItem("form_input_types quiz"));
var form_input_types_quiz_score = parseInt(localStorage.getItem("form_input_types quiz score"));
var form_input_types_quiz_percentage = parseInt(localStorage.getItem("form_input_types quiz percentage"));
var video_quiz = parseInt(localStorage.getItem("video quiz"));
var video_quiz_score = parseInt(localStorage.getItem("video quiz score"));
var video_quiz_percentage = parseInt(localStorage.getItem("video quiz percentage"));
var audio_quiz = parseInt(localStorage.getItem("audio quiz"));
var audio_quiz_score = parseInt(localStorage.getItem("audio quiz score"));
var audio_quiz_percentage = parseInt(localStorage.getItem("audio quiz percentage"));
var youtube_quiz = parseInt(localStorage.getItem("youtube quiz"));
var youtube_quiz_score = parseInt(localStorage.getItem("youtube quiz score"));
var youtube_quiz_percentage = parseInt(localStorage.getItem("youtube quiz percentage"));
var favicon_quiz = parseInt(localStorage.getItem("favicon quiz"));
var favicon_quiz_score = parseInt(localStorage.getItem("favicon quiz score"));
var favicon_quiz_percentage = parseInt(localStorage.getItem("favicon quiz percentage"));

if(intro_quiz == 0 || intro_quiz == 4){
    document.getElementById("intro").innerHTML = intro_quiz_score;
    document.getElementById("intro-per").innerHTML = intro_quiz_percentage;
    if(intro_quiz == 4){
        document.getElementById("intro-res").innerHTML = "Yes";
        document.getElementById("intro-res").style.background = "#007BFF";
        document.getElementById("intro-res").style.color = "white";
        document.getElementById("intro-per").style.background = "#007BFF";
        document.getElementById("intro-per").style.color = "white";
        document.getElementById("intro").style.background = "#007BFF";
        document.getElementById("intro").style.color = "white";
    }
    else if(intro_quiz == 0){
        document.getElementById("intro-res").innerHTML = 'No/<br><a href="learning/intro.html">কুইজ </a>';
        document.getElementById("intro-res").style.background = "#DC3545";
        document.getElementById("intro-res").style.color = "white";
        document.getElementById("intro-per").style.background = "#DC3545";
        document.getElementById("intro-per").style.color = "white";
        document.getElementById("intro").style.background = "#DC3545";
        document.getElementById("intro").style.color = "white";
    }
}
if(editor_quiz == 0 || editor_quiz == 4){
    document.getElementById("editor").innerHTML = editor_quiz_score;
    document.getElementById("editor-per").innerHTML = editor_quiz_percentage;
    if(editor_quiz == 4){
        document.getElementById("editor-res").innerHTML = "Yes";
        document.getElementById("editor-res").style.background = "#007BFF";
        document.getElementById("editor-res").style.color = "white";
        document.getElementById("editor-per").style.background = "#007BFF";
        document.getElementById("editor-per").style.color = "white";
        document.getElementById("editor").style.background = "#007BFF";
        document.getElementById("editor").style.color = "white";
    }
    else if(editor_quiz == 0){
        document.getElementById("editor-res").innerHTML = 'No/<br><a href="learning/editor.html">কুইজ </a>';
        document.getElementById("editor-res").style.background = "#DC3545";
        document.getElementById("editor-res").style.color = "white";
        document.getElementById("editor-per").style.background = "#DC3545";
        document.getElementById("editor-per").style.color = "white";
        document.getElementById("editor").style.background = "#DC3545";
        document.getElementById("editor").style.color = "white";
    }
}
if(element_quiz == 0 || element_quiz == 4){
    document.getElementById("element").innerHTML = element_quiz_score;
    document.getElementById("element-per").innerHTML = element_quiz_percentage;
    if(element_quiz == 4){
        document.getElementById("element-res").innerHTML = "Yes";
        document.getElementById("element-res").style.background = "#007BFF";
        document.getElementById("element-res").style.color = "white";
        document.getElementById("element-per").style.background = "#007BFF";
        document.getElementById("element-per").style.color = "white";
        document.getElementById("element").style.background = "#007BFF";
        document.getElementById("element").style.color = "white";
    }
    else if(element_quiz == 0){
        document.getElementById("element-res").innerHTML = 'No/<br><a href="learning/element.html">কুইজ </a>';
        document.getElementById("element-res").style.background = "#DC3545";
        document.getElementById("element-res").style.color = "white";
        document.getElementById("element-per").style.background = "#DC3545";
        document.getElementById("element-per").style.color = "white";
        document.getElementById("element").style.background = "#DC3545";
        document.getElementById("element").style.color = "white";
    }
}
if(attribute_quiz == 0 || attribute_quiz == 4){
    document.getElementById("attribute").innerHTML = attribute_quiz_score;
    document.getElementById("attribute-per").innerHTML = attribute_quiz_percentage;
    if(attribute_quiz == 4){
        document.getElementById("attribute-res").innerHTML = "Yes";
        document.getElementById("attribute-res").style.background = "#007BFF";
        document.getElementById("attribute-res").style.color = "white";
        document.getElementById("attribute-per").style.background = "#007BFF";
        document.getElementById("attribute-per").style.color = "white";
        document.getElementById("attribute").style.background = "#007BFF";
        document.getElementById("attribute").style.color = "white";
    }
    else if(attribute_quiz == 0){
        document.getElementById("attribute-res").innerHTML = 'No/<br><a href="learning/attribute.html">কুইজ </a>';
        document.getElementById("attribute-res").style.background = "#DC3545";
        document.getElementById("attribute-res").style.color = "white";
        document.getElementById("attribute-per").style.background = "#DC3545";
        document.getElementById("attribute-per").style.color = "white";
        document.getElementById("attribute").style.background = "#DC3545";
        document.getElementById("attribute").style.color = "white";
    }
}
if(heading_quiz == 0 || heading_quiz == 4){
    document.getElementById("heading").innerHTML = heading_quiz_score;
    document.getElementById("heading-per").innerHTML = heading_quiz_percentage;
    if(heading_quiz == 4){
        document.getElementById("heading-res").innerHTML = "Yes";
        document.getElementById("heading-res").style.background = "#007BFF";
        document.getElementById("heading-res").style.color = "white";
        document.getElementById("heading-per").style.background = "#007BFF";
        document.getElementById("heading-per").style.color = "white";
        document.getElementById("heading").style.background = "#007BFF";
        document.getElementById("heading").style.color = "white";
    }
    else if(heading_quiz == 0){
        document.getElementById("heading-res").innerHTML = 'No/<br><a href="learning/heading.html">কুইজ </a>';
        document.getElementById("heading-res").style.background = "#DC3545";
        document.getElementById("heading-res").style.color = "white";
        document.getElementById("heading-per").style.background = "#DC3545";
        document.getElementById("heading-per").style.color = "white";
        document.getElementById("heading").style.background = "#DC3545";
        document.getElementById("heading").style.color = "white";
    }
}
if(paragraph_quiz == 0 || paragraph_quiz == 4){
    document.getElementById("paragraph").innerHTML = paragraph_quiz_score;
    document.getElementById("paragraph-per").innerHTML = paragraph_quiz_percentage;
    if(paragraph_quiz == 4){
        document.getElementById("paragraph-res").innerHTML = "Yes";
        document.getElementById("paragraph-res").style.background = "#007BFF";
        document.getElementById("paragraph-res").style.color = "white";
        document.getElementById("paragraph-per").style.background = "#007BFF";
        document.getElementById("paragraph-per").style.color = "white";
        document.getElementById("paragraph").style.background = "#007BFF";
        document.getElementById("paragraph").style.color = "white";
    }
    else if(paragraph_quiz == 0){
        document.getElementById("paragraph-res").innerHTML = 'No/<br><a href="learning/paragraph.html">কুইজ </a>';
        document.getElementById("paragraph-res").style.background = "#DC3545";
        document.getElementById("paragraph-res").style.color = "white";
        document.getElementById("paragraph-per").style.background = "#DC3545";
        document.getElementById("paragraph-per").style.color = "white";
        document.getElementById("paragraph").style.background = "#DC3545";
        document.getElementById("paragraph").style.color = "white";
    }
}
if(quotation_quiz == 0 || quotation_quiz == 4){
    document.getElementById("quotation").innerHTML = quotation_quiz_score;
    document.getElementById("quotation-per").innerHTML = quotation_quiz_percentage;
    if(quotation_quiz == 4){
        document.getElementById("quotation-res").innerHTML = "Yes";
        document.getElementById("quotation-res").style.background = "#007BFF";
        document.getElementById("quotation-res").style.color = "white";
        document.getElementById("quotation-per").style.background = "#007BFF";
        document.getElementById("quotation-per").style.color = "white";
        document.getElementById("quotation").style.background = "#007BFF";
        document.getElementById("quotation").style.color = "white";
    }
    else if(quotation_quiz == 0){
        document.getElementById("quotation-res").innerHTML = 'No/<br><a href="learning/quotation.html">কুইজ </a>';
        document.getElementById("quotation-res").style.background = "#DC3545";
        document.getElementById("quotation-res").style.color = "white";
        document.getElementById("quotation-per").style.background = "#DC3545";
        document.getElementById("quotation-per").style.color = "white";
        document.getElementById("quotation").style.background = "#DC3545";
        document.getElementById("quotation").style.color = "white";
    }
}
if(comment_quiz == 0 || comment_quiz == 4){
    document.getElementById("comment").innerHTML = comment_quiz_score;
    document.getElementById("comment-per").innerHTML = comment_quiz_percentage;
    if(comment_quiz == 4){
        document.getElementById("comment-res").innerHTML = "Yes";
        document.getElementById("comment-res").style.background = "#007BFF";
        document.getElementById("comment-res").style.color = "white";
        document.getElementById("comment-per").style.background = "#007BFF";
        document.getElementById("comment-per").style.color = "white";
        document.getElementById("comment").style.background = "#007BFF";
        document.getElementById("comment").style.color = "white";
    }
    else if(comment_quiz == 0){
        document.getElementById("comment-res").innerHTML = 'No/<br><a href="learning/comment.html">কুইজ </a>';
        document.getElementById("comment-res").style.background = "#DC3545";
        document.getElementById("comment-res").style.color = "white";
        document.getElementById("comment-per").style.background = "#DC3545";
        document.getElementById("comment-per").style.color = "white";
        document.getElementById("comment").style.background = "#DC3545";
        document.getElementById("comment").style.color = "white";
    }
}
if(color_quiz == 0 || color_quiz == 4){
    document.getElementById("color").innerHTML = color_quiz_score;
    document.getElementById("color-per").innerHTML = color_quiz_percentage;
    if(color_quiz == 4){
        document.getElementById("color-res").innerHTML = "Yes";
        document.getElementById("color-res").style.background = "#007BFF";
        document.getElementById("color-res").style.color = "white";
        document.getElementById("color-per").style.background = "#007BFF";
        document.getElementById("color-per").style.color = "white";
        document.getElementById("color").style.background = "#007BFF";
        document.getElementById("color").style.color = "white";
    }
    else if(color_quiz == 0){
        document.getElementById("color-res").innerHTML = 'No/<br><a href="learning/color.html">কুইজ </a>';
        document.getElementById("color-res").style.background = "#DC3545";
        document.getElementById("color-res").style.color = "white";
        document.getElementById("color-per").style.background = "#DC3545";
        document.getElementById("color-per").style.color = "white";
        document.getElementById("color").style.background = "#DC3545";
        document.getElementById("color").style.color = "white";
    }
}
if(css_quiz == 0 || css_quiz == 4){
    document.getElementById("css").innerHTML = css_quiz_score;
    document.getElementById("css-per").innerHTML = css_quiz_percentage;
    if(css_quiz == 4){
        document.getElementById("css-res").innerHTML = "Yes";
        document.getElementById("css-res").style.background = "#007BFF";
        document.getElementById("css-res").style.color = "white";
        document.getElementById("css-per").style.background = "#007BFF";
        document.getElementById("css-per").style.color = "white";
        document.getElementById("css").style.background = "#007BFF";
        document.getElementById("css").style.color = "white";
    }
    else if(css_quiz == 0){
        document.getElementById("css-res").innerHTML = 'No/<br><a href="learning/css.html">কুইজ </a>';
        document.getElementById("css-res").style.background = "#DC3545";
        document.getElementById("css-res").style.color = "white";
        document.getElementById("css-per").style.background = "#DC3545";
        document.getElementById("css-per").style.color = "white";
        document.getElementById("css").style.background = "#DC3545";
        document.getElementById("css").style.color = "white";
    }
}
if(image_quiz == 0 || image_quiz == 4){
    document.getElementById("image").innerHTML = image_quiz_score;
    document.getElementById("image-per").innerHTML = image_quiz_percentage;
    if(image_quiz == 4){
        document.getElementById("image-res").innerHTML = "Yes";
        document.getElementById("image-res").style.background = "#007BFF";
        document.getElementById("image-res").style.color = "white";
        document.getElementById("image-per").style.background = "#007BFF";
        document.getElementById("image-per").style.color = "white";
        document.getElementById("image").style.background = "#007BFF";
        document.getElementById("image").style.color = "white";
    }
    else if(image_quiz == 0){
        document.getElementById("image-res").innerHTML = 'No/<br><a href="learning/image.html">কুইজ </a>';
        document.getElementById("image-res").style.background = "#DC3545";
        document.getElementById("image-res").style.color = "white";
        document.getElementById("image-per").style.background = "#DC3545";
        document.getElementById("image-per").style.color = "white";
        document.getElementById("image").style.background = "#DC3545";
        document.getElementById("image").style.color = "white";
    }
}
if(link_quiz == 0 || link_quiz == 4){
    document.getElementById("link").innerHTML = link_quiz_score;
    document.getElementById("link-per").innerHTML = link_quiz_percentage;
    if(link_quiz == 4){
        document.getElementById("link-res").innerHTML = "Yes";
        document.getElementById("link-res").style.background = "#007BFF";
        document.getElementById("link-res").style.color = "white";
        document.getElementById("link-per").style.background = "#007BFF";
        document.getElementById("link-per").style.color = "white";
        document.getElementById("link").style.background = "#007BFF";
        document.getElementById("link").style.color = "white";
    }
    else if(link_quiz == 0){
        document.getElementById("link-res").innerHTML = 'No/<br><a href="learning/link.html">কুইজ </a>';
        document.getElementById("link-res").style.background = "#DC3545";
        document.getElementById("link-res").style.color = "white";
        document.getElementById("link-per").style.background = "#DC3545";
        document.getElementById("link-per").style.color = "white";
        document.getElementById("link").style.background = "#DC3545";
        document.getElementById("link").style.color = "white";
    }
}
if(table_quiz == 0 || table_quiz == 4){
    document.getElementById("table").innerHTML = table_quiz_score;
    document.getElementById("table-per").innerHTML = table_quiz_percentage;
    if(table_quiz == 4){
        document.getElementById("table-res").innerHTML = "Yes";
        document.getElementById("table-res").style.background = "#007BFF";
        document.getElementById("table-res").style.color = "white";
        document.getElementById("table-per").style.background = "#007BFF";
        document.getElementById("table-per").style.color = "white";
        document.getElementById("table").style.background = "#007BFF";
        document.getElementById("table").style.color = "white";
    }
    else if(table_quiz == 0){
        document.getElementById("table-res").innerHTML = 'No/<br><a href="learning/table.html">কুইজ </a>';
        document.getElementById("table-res").style.background = "#DC3545";
        document.getElementById("table-res").style.color = "white";
        document.getElementById("table-per").style.background = "#DC3545";
        document.getElementById("table-per").style.color = "white";
        document.getElementById("table").style.background = "#DC3545";
        document.getElementById("table").style.color = "white";
    }
}
if(list_quiz == 0 || list_quiz == 4){
    document.getElementById("list").innerHTML = list_quiz_score;
    document.getElementById("list-per").innerHTML = list_quiz_percentage;
    if(list_quiz == 4){
        document.getElementById("list-res").innerHTML = "Yes";
        document.getElementById("list-res").style.background = "#007BFF";
        document.getElementById("list-res").style.color = "white";
        document.getElementById("list-per").style.background = "#007BFF";
        document.getElementById("list-per").style.color = "white";
        document.getElementById("list").style.background = "#007BFF";
        document.getElementById("list").style.color = "white";
    }
    else if(list_quiz == 0){
        document.getElementById("list-res").innerHTML = 'No/<br><a href="learning/list.html">কুইজ </a>';
        document.getElementById("list-res").style.background = "#DC3545";
        document.getElementById("list-res").style.color = "white";
        document.getElementById("list-per").style.background = "#DC3545";
        document.getElementById("list-per").style.color = "white";
        document.getElementById("list").style.background = "#DC3545";
        document.getElementById("list").style.color = "white";
    }
}
if(class_quiz == 0 || class_quiz == 4){
    document.getElementById("class").innerHTML = class_quiz_score;
    document.getElementById("class-per").innerHTML = class_quiz_percentage;
    if(class_quiz == 4){
        document.getElementById("class-res").innerHTML = "Yes";
        document.getElementById("class-res").style.background = "#007BFF";
        document.getElementById("class-res").style.color = "white";
        document.getElementById("class-per").style.background = "#007BFF";
        document.getElementById("class-per").style.color = "white";
        document.getElementById("class").style.background = "#007BFF";
        document.getElementById("class").style.color = "white";
    }
    else if(class_quiz == 0){
        document.getElementById("class-res").innerHTML = 'No/<br><a href="learning/class.html">কুইজ </a>';
        document.getElementById("class-res").style.background = "#DC3545";
        document.getElementById("class-res").style.color = "white";
        document.getElementById("class-per").style.background = "#DC3545";
        document.getElementById("class-per").style.color = "white";
        document.getElementById("class").style.background = "#DC3545";
        document.getElementById("class").style.color = "white";
    }
}
if(id_quiz == 0 || id_quiz == 4){
    document.getElementById("id").innerHTML = id_quiz_score;
    document.getElementById("id-per").innerHTML = id_quiz_percentage;
    if(id_quiz == 4){
        document.getElementById("id-res").innerHTML = "Yes";
        document.getElementById("id-res").style.background = "#007BFF";
        document.getElementById("id-res").style.color = "white";
        document.getElementById("id-per").style.background = "#007BFF";
        document.getElementById("id-per").style.color = "white";
        document.getElementById("id").style.background = "#007BFF";
        document.getElementById("id").style.color = "white";
    }
    else if(id_quiz == 0){
        document.getElementById("id-res").innerHTML = 'No/<br><a href="learning/id.html">কুইজ </a>';
        document.getElementById("id-res").style.background = "#DC3545";
        document.getElementById("id-res").style.color = "white";
        document.getElementById("id-per").style.background = "#DC3545";
        document.getElementById("id-per").style.color = "white";
        document.getElementById("id").style.background = "#DC3545";
        document.getElementById("id").style.color = "white";
    }
}
if(iframe_quiz == 0 || iframe_quiz == 4){
    document.getElementById("iframe").innerHTML = iframe_quiz_score;
    document.getElementById("iframe-per").innerHTML = iframe_quiz_percentage;
    if(iframe_quiz == 4){
        document.getElementById("iframe-res").innerHTML = "Yes";
        document.getElementById("iframe-res").style.background = "#007BFF";
        document.getElementById("iframe-res").style.color = "white";
        document.getElementById("iframe-per").style.background = "#007BFF";
        document.getElementById("iframe-per").style.color = "white";
        document.getElementById("iframe").style.background = "#007BFF";
        document.getElementById("iframe").style.color = "white";
    }
    else if(iframe_quiz == 0){
        document.getElementById("iframe-res").innerHTML = 'No/<br><a href="learning/iframe.html">কুইজ </a>';
        document.getElementById("iframe-res").style.background = "#DC3545";
        document.getElementById("iframe-res").style.color = "white";
        document.getElementById("iframe-per").style.background = "#DC3545";
        document.getElementById("iframe-per").style.color = "white";
        document.getElementById("iframe").style.background = "#DC3545";
        document.getElementById("iframe").style.color = "white";
    }
}
if(javascript_quiz == 0 || javascript_quiz == 4){
    document.getElementById("javascript").innerHTML = javascript_quiz_score;
    document.getElementById("javascript-per").innerHTML = javascript_quiz_percentage;
    if(javascript_quiz == 4){
        document.getElementById("javascript-res").innerHTML = "Yes";
        document.getElementById("javascript-res").style.background = "#007BFF";
        document.getElementById("javascript-res").style.color = "white";
        document.getElementById("javascript-per").style.background = "#007BFF";
        document.getElementById("javascript-per").style.color = "white";
        document.getElementById("javascript").style.background = "#007BFF";
        document.getElementById("javascript").style.color = "white";
    }
    else if(javascript_quiz == 0){
        document.getElementById("javascript-res").innerHTML = 'No/<br><a href="learning/javascript.html">কুইজ </a>';
        document.getElementById("javascript-res").style.background = "#DC3545";
        document.getElementById("javascript-res").style.color = "white";
        document.getElementById("javascript-per").style.background = "#DC3545";
        document.getElementById("javascript-per").style.color = "white";
        document.getElementById("javascript").style.background = "#DC3545";
        document.getElementById("javascript").style.color = "white";
    }
}
if(symbol_quiz == 0 || symbol_quiz == 4){
    document.getElementById("symbol").innerHTML = symbol_quiz_score;
    document.getElementById("symbol-per").innerHTML = symbol_quiz_percentage;
    if(symbol_quiz == 4){
        document.getElementById("symbol-res").innerHTML = "Yes";
        document.getElementById("symbol-res").style.background = "#007BFF";
        document.getElementById("symbol-res").style.color = "white";
        document.getElementById("symbol-per").style.background = "#007BFF";
        document.getElementById("symbol-per").style.color = "white";
        document.getElementById("symbol").style.background = "#007BFF";
        document.getElementById("symbol").style.color = "white";
    }
    else if(symbol_quiz == 0){
        document.getElementById("symbol-res").innerHTML = 'No/<br><a href="learning/symbol.html">কুইজ </a>';
        document.getElementById("symbol-res").style.background = "#DC3545";
        document.getElementById("symbol-res").style.color = "white";
        document.getElementById("symbol-per").style.background = "#DC3545";
        document.getElementById("symbol-per").style.color = "white";
        document.getElementById("symbol").style.background = "#DC3545";
        document.getElementById("symbol").style.color = "white";
    }
}
if(form_quiz == 0 || form_quiz == 4){
    document.getElementById("form").innerHTML = form_quiz_score;
    document.getElementById("form-per").innerHTML = form_quiz_percentage;
    if(form_quiz == 4){
        document.getElementById("form-res").innerHTML = "Yes";
        document.getElementById("form-res").style.background = "#007BFF";
        document.getElementById("form-res").style.color = "white";
        document.getElementById("form-per").style.background = "#007BFF";
        document.getElementById("form-per").style.color = "white";
        document.getElementById("form").style.background = "#007BFF";
        document.getElementById("form").style.color = "white";
    }
    else if(form_quiz == 0){
        document.getElementById("form-res").innerHTML = 'No/<br><a href="learning/form.html">কুইজ </a>';
        document.getElementById("form-res").style.background = "#DC3545";
        document.getElementById("form-res").style.color = "white";
        document.getElementById("form-per").style.background = "#DC3545";
        document.getElementById("form-per").style.color = "white";
        document.getElementById("form").style.background = "#DC3545";
        document.getElementById("form").style.color = "white";
    }
}
if(form_input_types_quiz == 0 || form_input_types_quiz == 4){
    document.getElementById("form_input_types").innerHTML = form_input_types_quiz_score;
    document.getElementById("form_input_types-per").innerHTML = form_input_types_quiz_percentage;

    if(form_input_types_quiz == 4){
        document.getElementById("form_input_types-res").innerHTML = "Yes";
        document.getElementById("form_input_types-res").style.background = "#007BFF";
        document.getElementById("form_input_types-res").style.color = "white";
        document.getElementById("form_input_types-per").style.background = "#007BFF";
        document.getElementById("form_input_types-per").style.color = "white";
        document.getElementById("form_input_types").style.background = "#007BFF";
        document.getElementById("form_input_types").style.color = "white";
    }
    else if(form_input_types_quiz == 0){
        document.getElementById("form_input_types-res").innerHTML = 'No/<br><a href="learning/form_input_types.html">কুইজ </a>';
        document.getElementById("form_input_types-res").style.background = "#DC3545";
        document.getElementById("form_input_types-res").style.color = "white";
        document.getElementById("form_input_types-per").style.background = "#DC3545";
        document.getElementById("form_input_types-per").style.color = "white";
        document.getElementById("form_input_types").style.background = "#DC3545";
        document.getElementById("form_input_types").style.color = "white";
        console.log(form_input_types_quiz_score);
        console.log(form_input_types_quiz_percentage);
    }
}
if(video_quiz == 0 || video_quiz == 4){
    document.getElementById("video").innerHTML = video_quiz_score;
    document.getElementById("video-per").innerHTML = video_quiz_percentage;
    if(video_quiz == 4){
        document.getElementById("video-res").innerHTML = "Yes";
        document.getElementById("video-res").style.background = "#007BFF";
        document.getElementById("video-res").style.color = "white";
        document.getElementById("video-per").style.background = "#007BFF";
        document.getElementById("video-per").style.color = "white";
        document.getElementById("video").style.background = "#007BFF";
        document.getElementById("video").style.color = "white";
    }
    else if(video_quiz == 0){
        document.getElementById("video-res").innerHTML = 'No/<br><a href="learning/video.html">কুইজ </a>';
        document.getElementById("video-res").style.background = "#DC3545";
        document.getElementById("video-res").style.color = "white";
        document.getElementById("video-per").style.background = "#DC3545";
        document.getElementById("video-per").style.color = "white";
        document.getElementById("video").style.background = "#DC3545";
        document.getElementById("video").style.color = "white";
    }
}
if(audio_quiz == 0 || audio_quiz == 4){
    document.getElementById("audio").innerHTML = audio_quiz_score;
    document.getElementById("audio-per").innerHTML = audio_quiz_percentage;
    if(audio_quiz == 4){
        document.getElementById("audio-res").innerHTML = "Yes";
        document.getElementById("audio-res").style.background = "#007BFF";
        document.getElementById("audio-res").style.color = "white";
        document.getElementById("audio-per").style.background = "#007BFF";
        document.getElementById("audio-per").style.color = "white";
        document.getElementById("audio").style.background = "#007BFF";
        document.getElementById("audio").style.color = "white";
    }
    else if(audio_quiz == 0){
        document.getElementById("audio-res").innerHTML = 'No/<br><a href="learning/audio.html">কুইজ </a>';
        document.getElementById("audio-res").style.background = "#DC3545";
        document.getElementById("audio-res").style.color = "white";
        document.getElementById("audio-per").style.background = "#DC3545";
        document.getElementById("audio-per").style.color = "white";
        document.getElementById("audio").style.background = "#DC3545";
        document.getElementById("audio").style.color = "white";
    }
}
if(youtube_quiz == 0 || youtube_quiz == 4){
    document.getElementById("youtube").innerHTML = youtube_quiz_score;
    document.getElementById("youtube-per").innerHTML = youtube_quiz_percentage;
    if(youtube_quiz == 4){
        document.getElementById("youtube-res").innerHTML = "Yes";
        document.getElementById("youtube-res").style.background = "#007BFF";
        document.getElementById("youtube-res").style.color = "white";
        document.getElementById("youtube-per").style.background = "#007BFF";
        document.getElementById("youtube-per").style.color = "white";
        document.getElementById("youtube").style.background = "#007BFF";
        document.getElementById("youtube").style.color = "white";
    }
    else if(youtube_quiz == 0){
        document.getElementById("youtube-res").innerHTML = 'No/<br><a href="learning/youtube.html">কুইজ </a>';
        document.getElementById("youtube-res").style.background = "#DC3545";
        document.getElementById("youtube-res").style.color = "white";
        document.getElementById("youtube-per").style.background = "#DC3545";
        document.getElementById("youtube-per").style.color = "white";
        document.getElementById("youtube").style.background = "#DC3545";
        document.getElementById("youtube").style.color = "white";
    }
}
if(favicon_quiz == 0 || favicon_quiz == 4){
    document.getElementById("favicon").innerHTML = favicon_quiz_score;
    document.getElementById("favicon-per").innerHTML = favicon_quiz_percentage;
    if(favicon_quiz == 4){
        document.getElementById("favicon-res").innerHTML = "Yes";
        document.getElementById("favicon-res").style.background = "#007BFF";
        document.getElementById("favicon-res").style.color = "white";
        document.getElementById("favicon-per").style.background = "#007BFF";
        document.getElementById("favicon-per").style.color = "white";
        document.getElementById("favicon").style.background = "#007BFF";
        document.getElementById("favicon").style.color = "white";
    }
    else if(favicon_quiz == 0){
        document.getElementById("favicon-res").innerHTML = 'No/<br><a href="learning/favicon.html">কুইজ </a>';
        document.getElementById("favicon-res").style.background = "#DC3545";
        document.getElementById("favicon-res").style.color = "white";
        document.getElementById("favicon-per").style.background = "#DC3545";
        document.getElementById("favicon-per").style.color = "white";
        document.getElementById("favicon").style.background = "#DC3545";
        document.getElementById("favicon").style.color = "white";
    }
}