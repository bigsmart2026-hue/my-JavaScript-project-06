function showProfile() {

    let profile = {
        firstName: "Big",
        lastName: "Smart",
        age: 22,
        hobbies: ["Coding", "Football", "Music"]
    };

    console.log(profile.firstName + " " + profile.lastName);

    
    console.log("Number of hobbies: " + profile.hobbies.length);

    for (let i = 0; i < profile.hobbies.length; i++) {
        console.log(profile.hobbies[i]);
    }

}

showProfile();