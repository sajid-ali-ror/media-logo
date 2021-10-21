// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(document).ready(function () {
    $(".gray_inactive").hide()
    $(".card_text_area").text($(".gray_active_div").html())
    $(document).on("focusout",".input_field", function () {
        var id = this.id
        var domain;
        if (this.value.length > 4) {
            $(".card_text_area").text()
            if (this.value.includes("www")){
                 domain =  this.value.split("www.")
                if (domain.length > 1){
                    domain =  domain[1].split(".com")[0]+".com"
                }
            }else  if(this.value.includes("://")) {
                 domain =  this.value.split("://")
                if (domain.length > 1){
                    domain =  domain[1].split(".com")[0]+".com"
                }
            }else{
                domain =  this.value
            }
            $("#" + id+ "_tag").attr('href', "https://www."+domain);
            $("#" + id + "_img" ).attr('src', "https://logo.clearbit.com/" + domain + "?size=40");
            $("#" + id+ "_img_gray" ).attr('src', "https://logo.clearbit.com/" + domain + "?size=40&greyscale=true");
            $(".card_text_area").text($(".gray_active_div").html())
        }
    })
    $(document).on("click",".grayscale", function () {
        $(".card_text_area").text()
        if (this.checked) {
            $(".gray_inactive ").show()
            $(".gray_active").hide()
            $(".card_text_area").text($(".gray_inactive_div").html())
        } else {
            $(".gray_inactive ").hide()
            $(".gray_active").show()
            $(".card_text_area").text($(".gray_active_div").html())
        }
    })
    $(document).on("click",".button4", function () {
        var count = $(".input_field").length
        $(".input_dev").append(`<input class='form-control ng-pristine ng-valid ng-empty ng-touched input_field' id="input_field_${count}" placeholder='Link to Paste Here' type='text'>\n`)
        $(".gray_active").append(`<a class='prj-logo grayscale-true abcLink' href='' id="input_field_${count}_tag"  target='_blank'>\n`+
            `<img class='abcLink_img'  id="input_field_${count}_img" src='https://pressreleasejet.com/assets/media-logos/logo-abc.png' style='height: 40px'>\n` +
            `</a>`)
        $(".gray_inactive").append(`<a class='prj-logo grayscale-false abcLink prj-grayscale-true' id="input_field_${count}_tag_gray" href='' target='_blank'>\n` +
            `<img class='abcLink_img_gray' id="input_field_${count}_img_gray"  src='https://pressreleasejet.com/assets/media-logos/logo-abc.png' style='height: 40px'>\n` +
            `</a>\n`)
    })
});