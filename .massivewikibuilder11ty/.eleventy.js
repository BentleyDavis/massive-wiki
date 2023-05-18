const wikiTransforms = require('./utils/wikiTransforms.js');

module.exports = function (eleventyConfig) {

    // Links and images
    eleventyConfig.addTransform("wikiTransforms", wikiTransforms);

    // copy static files
    eleventyConfig.addPassthroughCopy({ "../.massivewikibuilder11ty/static/": "/" });


    // //copy over all markdown files 
    // eleventyConfig.addPassthroughCopy('../**/*.md', {
    //     expand: true, // expand symbolic links
    //     filter: "!*", // copy all files
    // }
    //     // , {
    //     //     filter: []//, '!**massivewikibuilder**']//, '!**/node_modules/**', '!**/output/**', '!**/static/**', '!**/obsidian/**', '!**/.obsidian/**', '!**/.massivewikibuilder/**', '!**/.massivewikibuilder11ty/**', '!**/.git/**', '!**/.gitignore/**', '!**/.gitattributes/**', '!**/.github/**', '!**/.github/w]
    //     //     //filter: (a, b, c) => { console.log(a, b, c); return true; },
    //     // }
    // );

    for (const ignore of [
        '../.massivewikibuilder/**',
        '../.massivewikibuilder11ty/output/**',
        '../.massivewikibuilder11ty/README.md',
        '../.massivewikibuilder11ty/node_modules/**',
        '../.obsidian/**',
    ]) {
        eleventyConfig.ignores.add(ignore);
        eleventyConfig.watchIgnores.add(ignore);
    }

    return {
        templateFormats: ['md', 'png'],
        dir: {
            input: '../',
            output: 'output',
            data: '.massivewikibuilder11ty/_data',
            layouts: '.massivewikibuilder11ty/_layouts',
            includes: '.massivewikibuilder11ty/_includes',
        }
    }
}

