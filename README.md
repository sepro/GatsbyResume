[![autobuild](https://github.com/sepro/sepro.github.io/actions/workflows/autobuild.yaml/badge.svg)](https://github.com/sepro/sepro.github.io/actions/workflows/autobuild.yaml)
[![auto update citations](https://github.com/sepro/sepro.github.io/actions/workflows/auto_update.yaml/badge.svg)](https://github.com/sepro/sepro.github.io/actions/workflows/auto_update.yaml)

# Resume Sebastian Proost

This is build upon gatsby-starter-clean-resume. Check out their live demo [here](https://gatsby-starter-clean-resume.netlify.com/). This is designed to be an academic resume and included items like
publications, training, confernces, media, ... These data is stored in different YAML files located in ./content/. 

Which in turn is based on [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world). This project uses the [Milligram](https://github.com/milligram/milligram) framework for styling.


## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the clean-resume starter.

    ```shell
    # create a new Gatsby site using the clean-resume starter
    gatsby new my-resume-starter https://github.com/masoudkarimif/gatsby-starter-clean-resume
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-resume-starter/
    npm install
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!


    Open the `my-resume-starter` directory in your code editor of choice and edit `gatsby-config.js`. Save your changes and the browser will update in real time!

## Customizing `gatsby-config.js`

All the information that appear on your resume is in this file. With solely changing the content of this file, you can customize the whole website. There's no need to change any other part of the code--although you're more than welcome to do so :)

1. **Name, contact, and social media**

   ```shell
   name: `Luke Skywalker`,
   role: `Software Developer`,
   email: `luke@thelightside.com`,
   socialMedia : [
       {"name": "github", "link": "https://github.com"},
       {"name": "linkedin", "link": "https://linkedin.com"},
       {"name": "facebook", "link": "https://facebook.com"},
       {"name": "twitter", "link": "https://twitter.com"},
       {"name": "instagram", "link": "https://instagram.com"},
     ],
   ```

   You can simply delete any social link you want by removing the corresponding object (line) and it won't appear on your website. You can also add more social media links. This project uses the [react-social-icons](https://www.npmjs.com/package/react-social-icons) library. You can find the list of supported icons [here](http://jaketrent.github.io/react-social-icons/).

<br/>

2. **About**

   ```shell
   about: `<p>The son of Jedi Knight Anakin Skywalker and Senator Padmé Amidala,
    Luke Skywalker was born along with his twin sister Leia in 19 BBY.</p>
    <p>More info <a href="https://starwars.fandom.com/wiki/Luke_Skywalker">here</a></p>`
   ```

   Anything that you put here will appear under About page, which is the main page of the website. As you can see, you can also include `HTML` tags.

<br/>

3. **Education**

   The various places you studied can be added to ./content/education.yaml

   ```yaml
   - degree: "Doctor"
      major: "Science : Biotechnology"
      school: Universiteit Gent (Doctoral Schools)
      where: Gent, Belgium
      when: 2007 - 2012
      moreInfo: ""
      highlight: 1
   ```

<br/>

4. **Experience**

Experience can be added to ./content/experience.yaml

   ```yaml
   - role: Senior PostDoc
      company: KULeuven | VIB - Center for Microbiology
      where: Leuven, Belgium
      when: 2018 - now
      moreInfo: ""
      highlight: 1
   ```
<br/>

5. **Skills**

   ```shell
   skills: [
         {
           name: "JavaScript",
           level: "85",
           experience: "5 years"
         },
         {
           name: "Python",
           level: "75",
           experience: "2 years"
         },
   ]
   ```

   You will specify your skill set here. The `level` parameter should be between **0** and **100**.

<br/>

6. **Interests**

   ```shell
     interests: [
   	    "Reading",
   	    "Programming",
   	    "Playing the violin",
   	    "Running",
   	    "Watching Monty Python and the Holy Grail"
   	    ],
   ```

   Here you will list your Interests for the Interests page.

<br/>

7. **Fonts**

   ```shell
   font: "default"
   ```

   There are currently two fonts available: `default` which uses the `Helvetica` font; and `programmer` which uses the `IBM Plex Mono` from Google Fonts.

<br/>

8. **Sitemap**

    ```shell
    siteUrl: "YOUR_SITE_URL"
    ```

    Sitemap plugin from Gatsby needs you to put your site url here. Currently, it's the url of the demo site; so just replace it with yours.

9. **Changing profile photo and favicon**

Simply replace the `profile.jpg` and `favicon.ico` files in the `/static` directory.

## License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)
