module.exports = function (eleventyConfig) {

    const wikilinkRegex = /\[\[([^\]]+)\]\]/g;
    const wikilinkReplace = '<a href="/$1">$1</a>';

    eleventyConfig.addTransform("massive-wiki", async function (content) {
        // console.log(this.page.inputPath, this.page.outputPath, content.length);
        result = content.replace(wikilinkRegex, wikilinkReplace);
        return result;
    });

    // copy statis files
    eleventyConfig.addPassthroughCopy({ "../.massivewikibuilder11ty/static/": "/" });


    //Globbing pattern to match a directory named "assets" unless it is in the sub directory named "mouse"
    // eleventyConfig.addPassthroughCopy({
    //     "../.massivewikibuilder11ty/static/": {
    //         glob: "**/!(mouse)/**"





    //copy over all markdown files 
    eleventyConfig.addPassthroughCopy("../**/*.md", {
        filter: "**!(massivewikibuilder)**"
    });

    // const markdownItEmoji = require("markdown-it-emoji");
    // const markdownItObsidianImages = require('markdown-it-obsidian-images');
    // const wikilinks = require('markdown-it-wikilinks');
    // eleventyConfig.amendLibrary("md", mdLib => mdLib.use(wikilinks).use(markdownItEmoji).use(markdownItObsidianImages));
    // eleventyConfig.setLibrary('md', md);

    for (const ignore of [
        '../.massivewikibuilder/**',
        '../.massivewikibuilder11ty/output/**',
        '../.massivewikibuilder11ty/node_modules/**',
        '../.obsidian/**',
    ]) {
        eleventyConfig.ignores.add(ignore);
        eleventyConfig.watchIgnores.add(ignore);
    }

    return {
        templateFormats: ['md'],
        dir: {
            input: '../',
            output: 'output',
            data: '.massivewikibuilder11ty/_data',
            layouts: '.massivewikibuilder11ty/_layouts',
            includes: '.massivewikibuilder11ty/_includes',
        }
    }
}

    // config.addPassthroughCopy({ public: './' })

    // config.setBrowserSyncConfig({
    //   files: ['dist/**/*'],
    // })