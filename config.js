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
            { title: "密码管理", url: "chrome://password-manager/passwords", icon: "🔑" }
        ]
    },
    "推特快捷链接": {
        icon: "🐦",
        links: [
            { title: "修改密码", url: "https://x.com/settings/password", icon: "🔑" },
            { title: "语言设置", url: "https://x.com/settings/language", icon: "🌐" },
            { title: "资料设置", url: "https://x.com/settings/profile", icon: "📚" },
            { title: "修改邮箱", url: "https://x.com/settings/email", icon: "📧" },
            { title: "2FA", url: "https://x.com/settings/account/login_verification", icon: "🔒" }
        ]
    },
    "Discord": {
        icon: "🌐",
        links: [
            { title: "首页", url: "https://discord.com/channels/@me", icon: "🏠" }
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
