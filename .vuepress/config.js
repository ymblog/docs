module.exports = {
    title: 'lk', 
    description: '林焜的博客',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico'}]
    ],
    base:'/blog/',
    dest:'docs/dist',
    themeConfig:{
    	nav:[
    		{text:'首页',link:'/'},
            {text:'工作',link:'/docs/work/'},
    		{text:'项目',link:'/docs/resume/'},
            {text:'博客',link:'https://github.com/ymblog/blog'},
    		{text:'GitHub',link:'https://github.com/ymblog'},
            {text:'segmentfault',link:'https://segmentfault.com/u/ymup'},
    	],
        sidebar:{
            '/docs/blog/javascript/':[
                '',
                'upload'//图片上传
            ],
            '/docs/blog/vue/':[
                '',
                'guide'
            ],
            '/docs/blog/css/':[
                '',
                'ued'
            ],
            '/docs/blog/html/':[
                ''
            ],
            '/docs/blog/optimize/':[
                '',
                'ued'
            ],
            '/docs/blog/other/':[
                ''
            ],
            '/docs/resume/':[
                ''
            ],
            '/docs/work/':[//前端规范
                '',
                'vue',
                'html',
                'css',
                'javascript',
                'mobile',
                'solution',
                'plugin',
                'webview'
            ]
        }
    }
}