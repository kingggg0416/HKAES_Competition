let user_input = {
    country : "",
    language: "",
    check_mask: false,
    check_temp: true,
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

function load_workflow() {
    for (const key in user_input) {
        console.log(key);
        console.log(user_input[key]);
        if(key == "check_mask" || key == "check_temp" || key == "check_vax") {
            if(user_input[key] == true) {
                console.log("true");
                var new_div = document.createElement("div");
                new_div.innerHTML = key;
                new_div.setAttribute('class', 'workflow-confirm-design');
                let section = document.getElementById("workflow-confirmation-body");
                section.appendChild(new_div);
            }
        }
    }
}