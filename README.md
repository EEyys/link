# 快捷链接导航网站

一个现代化的快捷链接导航网站，支持分类管理、搜索功能，可轻松托管到 GitHub Pages 或 Cloudflare Pages。

## 🌟 特性

- 📱 **响应式设计** - 完美适配手机和桌面端
- 🔍 **实时搜索** - 支持链接标题搜索
- 📂 **分类管理** - 支持多分类组织链接
- 🎨 **现代UI** - 毛玻璃效果和流畅动画
- ⚡ **快速访问** - 支持键盘快捷键 (Ctrl+K)
- 🔧 **易于配置** - 独立配置文件，方便修改
- 🚀 **零依赖** - 纯HTML/CSS/JavaScript实现

## 📁 文件结构

```
project/
├── index.html          # 主页面
├── config.js          # 配置文件（重要！）
├── README.md          # 说明文档
└── .github/
    └── workflows/
        └── deploy.yml # 自动部署配置
```

## 🚀 快速开始

### 方法一：GitHub Pages 部署

1. **Fork 或创建新仓库**
   ```bash
   git clone <your-repo>
   cd <your-repo>
   ```

2. **修改配置文件**
   编辑 `config.js` 文件，添加或修改你的链接

3. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **开启 GitHub Pages**
   - 进入仓库 Settings
   - 找到 Pages 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 点击 Save

### 方法二：Cloudflare Pages 部署

1. **连接 GitHub 仓库**
   - 登录 Cloudflare Pages
   - 点击 "Create a project"
   - 连接你的 GitHub 账户
   - 选择仓库

2. **配置构建设置**
   - Framework preset: None
   - Build command: 留空
   - Build output directory: `/`

3. **部署**
   - 点击 "Save and Deploy"
   - 等待部署完成

## ⚙️ 配置说明

### 修改链接

编辑 `config.js` 文件中的 `linksConfig` 对象：

```javascript
const linksConfig = {
    "分类名称": {
        icon: "🔥", // 分类图标
        links: [
            { 
                title: "链接标题", 
                url: "https://example.com", 
                icon: "🌐",
                description: "链接描述（可选）"
            }
        ]
    }
};
```

### 修改网站信息

编辑 `config.js` 文件中的 `siteConfig` 对象：

```javascript
const siteConfig = {
    title: "你的网站标题",
    subtitle: "网站副标题",
    footer: "© 2025 你的网站名称",
    searchPlaceholder: "搜索提示文字",
    theme: {
        primaryColor: "#667eea",
        secondaryColor: "#764ba2"
    }
};
```

## 🔧 自定义功能

### 添加新分类

```javascript
// 在 config.js 中添加
"新分类": {
    icon: "📱",
    links: [
        { title: "示例链接", url: "https://example.com", icon: "🔗" }
    ]
}
```

### 修改样式

直接编辑 `index.html` 中的 CSS 部分，或创建独立的 `style.css` 文件。

### 添加统计功能

在 `index.html` 的点击事件中添加统计代码：

```javascript
// 找到这部分代码并修改
document.addEventListener('click', (e) => {
    if (e.target.closest('.link-item')) {
        const linkTitle = e.target.closest('.link-item').querySelector('.link-title').textContent;
        // 添加你的统计代码
        gtag('event', 'click', {
            'event_category': 'link',
            'event_label': linkTitle
        });
    }
});
```

## 📱 快捷键

- `Ctrl/Cmd + K` - 聚焦搜索框
- `Esc` - 清空搜索并取消聚焦

## 🔄 更新链接

### 自动部署

推送到 GitHub 后会自动部署到 GitHub Pages 或 Cloudflare Pages。

### 手动更新

1. 修改 `config.js`
2. 提交更改：`git commit -am "Update links"`
3. 推送：`git push origin main`

## 🐛 常见问题

### Q: Chrome扩展链接无法打开？
A: 这是正常的，Chrome扩展链接只能在浏览器地址栏中直接输入打开。

### Q: 如何添加图标？
A: 使用 emoji 或者 Unicode 字符作为图标，例如：🔥、⚡、🎨

### Q: 如何修改主题颜色？
A: 编辑 CSS 中的渐变色值或 `siteConfig.theme` 配置。

## 📝 更新日志

- v1.0.0 - 初始版本
  - 响应式设计
  - 搜索功能
  - 分类管理
  - 配置文件支持

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License