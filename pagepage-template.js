//module.exports = generatePage;

// const generatePage = (user, githubName) => {
//     /* line break */return `
// <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Portfolio Demo</title>
//     </head>
    
//     <body>
//         <h1>${user}</h1>
//         <h2><a href="https://github.com/${githubName}">Github</a></h2>
//     </body>
// </html>
//     `;/* line break */
// };

// //ES6 version of module.exports????


//create the about section
generateAbout = aboutText => {
    if(!aboutText) {
        return '';
    }

    return `
            <section class="my-3" id="about">
                <h2 class="text-dark bg-primary p-2 display-inline-block">
                    About Me
                </h2>
                <p>
                    ${aboutText}
                </p>
            </section>`;
}

generateProjects = projectsArr => {
    // get array of just featured projects
  
    return `
            <section class="my-3 id-portfolio">
                <h2 class="text-dark bg-primary p-2 display-inline-block">
                    Work
                </h2>
                <div class="flex-row justify-space-between">
                ${projectsArr
                    .filter(({feature}) => feature)//implicit return value into .map()
                    .map(({ name, description, languages, link }) => {
                        return `
                <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="portfolio-item-title text-light">
                        ${name}
                    </h3>
                    <h5 class="portfolio-languages">
                        Built With: ${languages.join(', ')}
                    </h5>
                    <p>
                        ${description}
                    </p>
                    <a target="_blank" href="${link}" class="btn mt-auto">
                        <i class="fab fa-github mr-2"></i>View Project on GitHub
                    </a>
                </div>
                        `;
                    })
                    .join('')
                }
                
                ${projectsArr
                    .filter(({ feature }) => !feature)//implicit return value into .map() 
                    .map(({ name, description, languages, link }) => {
                        return `
                <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="portfolio-item-title text-light">
                        ${name}
                    </h3>
                    <h5 class="portfolio-languages">
                        Built With: ${languages.join(', ')}
                    </h5>
                    <p>
                        ${description}
                    </p>
                    <a target="_blank" href="${link}" class="btn mt-auto">
                        <i class="fab fa-github mr-2"></i>View Project on GitHub
                    </a>
                </div>
                        `;
                    })
                    .join('')
                }
                </div>        
            </section>
        `
}

//take in the templateData object with all our answers
module.exports = templateData => {
    console.log(templateData);
    //destructure the about and project data based on their property key names
    //this isn't an array destructuring so we are not worried about the order
    //as long as the property names match to what is declared inside the object already
    //using rest operator with header, to store the 'REST' of the data that we didnt destructure
    //  from templateData and storing it in a new object called header
    const { projects, about, ...header } = templateData;

    console.log("======================");
    console.log("checking if we are grabbing the right objects out of templateData");
    console.log(projects);
    console.log(about);
    console.log(header); 

    // const header = {
    //     name: templateData.name,
    //     github: templateData.github
    // };

    
    
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">
                    ${header.name}
                </h1>
                <nav class="flex-row">
                    <a target="_blank" href="https://github.com/${header.github}" class="ml-2 my-1 px-2 py-1 bg-secondary text-dark">
                        GitHub
                    </a>
                </nav> 
            </div>
        </header>
        <main class="container my-5">
            ${generateAbout(about)}
            ${generateProjects(projects)}
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">
                &copy; ${new Date().getFullYear()} by ${header.name}
            </h3>
        </footer>
    </body>
</html>
    `;
};