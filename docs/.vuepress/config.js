// .vuepress/config.js
module.exports = {
    theme: 'yuu',
    themeConfig: {
        navbar: false,
        yuu: {
            defaultDarkTheme: true,
        },
        sidebar: {
            '/guide/': [
                '',  //该目录下的README.md文件
                'person', //该目录下的a.md文件
            ],
        }
    }
}
