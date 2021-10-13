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
    $(".card_text_area").text($(".gray_active").html())
    $(".input_field").on(" focusout", function () {
        debugger
        var id = this.id
        if (this.value.length > 4) {
            $(".card_text_area").text()
            $("." + id).attr('href', this.value);
            $("." + id + "_img").attr('src', "//logo.clearbit.com/" + this.value + "?size=40");
            $("." + id + "_img_gray").attr('src', "//logo.clearbit.com/" + this.value + "?size=40&greyscale=true");
            $(".card_text_area").text($(".gray_active").html())
        }
    })
    $(".grayscale").on("click", function () {
        $(".card_text_area").text()
        if (this.checked) {
            $(".gray_inactive ").show()
            $(".gray_active").hide()
            $(".card_text_area").text($(".gray_inactive").html())
        } else {
            $(".gray_inactive ").hide()
            $(".gray_active").show()
            $(".card_text_area").text($(".gray_active").html())
        }
    })
});