/* Function to toggle between the information connected to the
three buttons under the Samuel Beckett quote, on the landing page. 
Will need to optimise */

function show_introduction() {

    intro_button = document.getElementById("intro-button");
    history_button = document.getElementById("history-button");
    what_we_do_button = document.getElementById("what-we-do-button");

    intro_wrapper = document.getElementById("intro-wrapper");
    history_wrapper = document.getElementById("history-wrapper");
    what_we_do_wrapper = document.getElementById("what-we-do-wrapper");

    intro_button.addEventListener("click", function() {

        intro_wrapper.classList.add("d-block");
        intro_wrapper.classList.remove("d-none");

        history_wrapper.classList.add("d-none");
        history_wrapper.classList.remove("d-block");

        what_we_do_wrapper.classList.add("d-none");
        what_we_do_wrapper.classList.remove("d-block");

    });

    history_button.addEventListener("click", function() {

        intro_wrapper.classList.add("d-none");
        intro_wrapper.classList.remove("d-block");

        history_wrapper.classList.add("d-block");
        history_wrapper.classList.remove("d-none");

        what_we_do_wrapper.classList.add("d-none");
        what_we_do_wrapper.classList.remove("d-block");
    });

    what_we_do_button.addEventListener("click", function() {
        
        intro_wrapper.classList.add("d-block");
        intro_wrapper.classList.remove("d-block");

        history_wrapper.classList.add("d-none");
        history_wrapper.classList.remove("d-block");

        what_we_do_wrapper.classList.add("d-block");
        what_we_do_wrapper.classList.remove("d-none");
    });

}

show_introduction();

