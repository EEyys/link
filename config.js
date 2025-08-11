// config.js - 链接配置文件
// 修改这个文件就可以更新网站上的所有链接

const linksConfig = {
    "全屏钱包": {
        icon: "💰",
        links: [
            { 
                title: "OKX钱包", 
                url: "chrome-extension://mcohilncbfahbmgdjkbpemcciiolgcge/home.html", 
                icon: "🔶",
                description: "OKX官方浏览器钱包"
            },
            { 
                title: "MetaMask钱包", 
                url: "chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html", 
                icon: "🦊",
                description: "以太坊主流钱包"
            },
            { 
                title: "Phantom钱包", 
                url: "chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/popup.html", 
                icon: "👻",
                description: "Solana生态钱包"
            }
        ]
    },
    "Chrome设置": {
        icon: "⚙️",
        links: [
            { title: "扩展管理", url: "chrome://extensions/", icon: "🧩" },
            { title: "历史记录", url: "chrome://history/", icon: "📚" },
            { title: "书签管理", url: "chrome://bookmarks/", icon: "🔖" },
            { title: "清除缓存", url: "chrome://settings/privacy", icon: "🧹" },
            { title: "设置语言", url: "chrome://settings/languages", icon: "🌐" },
            { title: "网页缩放", url: "chrome://settings/appearance", icon: "🔍" },
            { title: "APP管理", url: "chrome://apps/", icon: "📱" },
            { title: "查看版本", url: "chrome://version/", icon: "ℹ️" },
            { title: "下载管理", url: "chrome://downloads/", icon: "⬇️" },
            { title: "安全设置", url: "chrome://settings/security", icon: "🔒" }
        ]
    },
    "开发工具": {
        icon: "🛠️",
        links: [
            { title: "GitHub", url: "https://github.com", icon: "🐱" },
            { title: "GitLab", url: "https://gitlab.com", icon: "🦊" },
            { title: "Stack Overflow", url: "https://stackoverflow.com", icon: "📚" },
            { title: "MDN Web Docs", url: "https://developer.mozilla.org", icon: "📖" },
            { title: "Can I Use", url: "https://caniuse.com", icon: "✅" },
            { title: "CodePen", url: "https://codepen.io", icon: "🖊️" },
            { title: "JSFiddle", url: "https://jsfiddle.net", icon: "⚡" },
            { title: "Regex101", url: "https://regex101.com", icon: "🔤" }
        ]
    },
    "常用网站": {
        icon: "🌐",
        links: [
            { title: "Google", url: "https://google.com", icon: "🔍" },
            { title: "百度", url: "https://baidu.com", icon: "🔍" },
            { title: "腾讯邮箱", url: "https://mail.qq.com", icon: "📧" },
            { title: "网易邮箱", url: "https://mail.163.com", icon: "📧" },
            { title: "微博", url: "https://weibo.com", icon: "🐦" },
            { title: "知乎", url: "https://zhihu.com", icon: "🤔" },
            { title: "B站", url: "https://bilibili.com", icon: "📺" }
        ]
    },
    "AI工具": {
        icon: "🤖",
        links: [
            { title: "ChatGPT", url: "https://chat.openai.com", icon: "💬" },
            { title: "Claude", url: "https://claude.ai", icon: "🧠" },
            { title: "Midjourney", url: "https://midjourney.com", icon: "🎨" },
            { title: "Stable Diffusion", url: "https://stability.ai", icon: "🖼️" },
            { title: "Runway", url: "https://runwayml.com", icon: "🎬" }
        ]
    },
    "在线工具": {
        icon: "🔧",
        links: [
            { title: "TinyPNG", url: "https://tinypng.com", icon: "📷" },
            { title: "JSON格式化", url: "https://jsonformatter.org", icon: "📋" },
            { title: "Base64编码", url: "https://base64encode.org", icon: "🔐" },
            { title: "颜色选择器", url: "https://colorpicker.me", icon: "🎨" },
            { title: "二维码生成", url: "https://qr-code-generator.com", icon: "📱" },
            { title: "PDF工具", url: "https://smallpdf.com", icon: "📄" }
        ]
    }
};

// 网站配置
const siteConfig = {
    title: "🔗 常用快捷链接",
    subtitle: "快速访问常用网站和工具",
    footer: "© 2025 快捷链接导航 | 让访问更便捷",
    searchPlaceholder: "🔍 搜索链接...",
    theme: {
        primaryColor: "#667eea",
        secondaryColor: "#764ba2",
        accentColor: "#f093fb"
    }
};

// 导出配置（如果使用模块化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { linksConfig, siteConfig };
}