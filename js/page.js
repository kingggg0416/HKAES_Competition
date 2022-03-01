let user_input = {
    country : "",
    language: "",
    check_mask: false,
    check_temp: false,
    check_vax: false
}

function record_country(value) {
    user_input.country = value;
}

function record_language(value) {
    user_input.language = value;
}

function record_mask() {
    if(user_input.check_mask)
        user_input.check_mask = false;
    else
        user_input.check_mask = true;
    console.log("Mask:" + user_input.check_mask);
}

function record_temp() {
    if(user_input.check_temp)
        user_input.check_temp = false;
    else
        user_input.check_temp = true;
    console.log("temp:" + user_input.check_temp);

}

function record_vax() {
    if(user_input.check_vax)
        user_input.check_vax = false;
    else
        user_input.check_vax = true;
        console.log("Vax:" + user_input.check_vax);

}