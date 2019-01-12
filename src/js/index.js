import "../style/index.scss";

/**
 *  1) Here are all the variables to be used in the conditions
 */
function render(variables = {}) {
  /**
   *  2) The conditional rendering logic starts here
   */
  // here we ask the logical questions to make decitions on how to build the heml
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let pepe = "Name";
  if (variables.name !== null) {
    pepe = variables.name;
  }
  console.log(pepe);

  let rose = "Last name";
  if (variables.lastname !== null) {
    rose = variables.lastname;
  }
  console.log(rose);

  let twit = "twitter";
  if (variables.twitter !== null) {
    twit = variables.twitter;
  }
  console.log(twit);

  let gitt = "github";
  if (variables.github !== null) {
    gitt = variables.github;
  }
  console.log(gitt);

  let home = "linkedin";
  if (variables.linkedin !== null) {
    home = variables.linkedin;
  }
  console.log(home);

  let pizza = "instagram";
  if (variables.instagram !== null) {
    pizza = variables.instagram;
  }
  console.log(pizza);

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />

          <h1>${pepe} ${rose}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city} ${variables.country}</h3>

          
          <ul class=${variables.socialMediaPosition}>
            <li><a href="https://twitter.com/${
              variables.twitter
            }"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github
            }"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin
            }"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram
            }"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}
//ignore this lines, here is where we do the logic for the dropdowns
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL:
      "https://avatars2.githubusercontent.com/u/45579135?s=400&u=4ca71af2490f687a3c555b4fdb84e79e263b6343&v=4",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "sashaco",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
