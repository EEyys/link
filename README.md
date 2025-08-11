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


# 部署指南

本指南将帮助你将快捷链接导航网站部署到 GitHub Pages 或 Cloudflare Pages。

## 📋 准备工作

确保你有以下文件：
- `index.html` - 主页面文件
- `config.js` - 配置文件（重要！）
- `README.md` - 项目说明
- `.github/workflows/deploy.yml` - GitHub Actions配置（可选）

## 🚀 方式一：GitHub Pages 部署

### 1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" -> "New repository"
3. 输入仓库名称，如：`my-quick-links`
4. 选择 "Public"
5. 点击 "Create repository"

### 2. 上传文件

#### 方法 A：网页上传（推荐新手）

1. 在新创建的仓库页面点击 "uploading an existing file"
2. 将所有文件拖拽到上传区域
3. 输入提交信息：`Initial commit`
4. 点击 "Commit new files"

#### 方法 B：Git 命令行

```bash
# 克隆仓库
git clone https://github.com/你的用户名/仓库名.git
cd 仓库名

# 添加文件
# 将 index.html, config.js 等文件复制到此目录

# 提交文件
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. 开启 GitHub Pages

1. 进入仓库页面
2. 点击 "Settings" 标签
3. 在左侧菜单找到 "Pages"
4. 在 "Source" 下选择 "Deploy from a branch"
5. 选择 "main" 分支
6. 点击 "Save"
7. 等待几分钟，访问显示的链接

### 4. 自定义域名（可选）

1. 在 "Pages" 设置中的 "Custom domain" 输入你的域名
2. 在你的域名DNS设置中添加CNAME记录指向 `用户名.github.io`

## 🌐 方式二：Cloudflare Pages 部署

### 1. 准备 GitHub 仓库

按照上面的步骤 1-2 创建并上传文件到 GitHub 仓库。

### 2. 连接 Cloudflare Pages

1. 登录 [Cloudflare](https://dash.cloudflare.com)
2. 选择 "Pages" 选项卡
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 连接你的 GitHub 账户
6. 选择你的仓库

### 3. 配置构建设置

- **Project name**: 输入项目名称
- **Production branch**: `main`
- **Framework preset**: `None`
- **Build command**: 留空
- **Build output directory**: `/`

### 4. 部署

1. 点击 "Save and Deploy"
2. 等待构建完成
3. 访问提供的链接

### 5. 自定义域名（可选）

1. 在项目设置中点击 "Custom domains"
2. 点击 "Set up a custom domain"
3. 输入域名并按提示设置DNS

## ⚙️ 配置管理

### 修改链接

1. 编辑 `config.js` 文件
2. 修改 `linksConfig` 对象
3. 提交更改到 GitHub

```javascript
// 示例：添加新分类
"我的工具": {
    icon: "🔧",
    links: [
        { title: "我的网站", url: "https://example.com", icon: "🌐" }
    ]
}
```

### 修改网站信息

编辑 `config.js` 中的 `siteConfig`：

```javascript
const siteConfig = {
    title: "我的导航",
    subtitle: "个人常用链接",
    footer: "© 2025 我的导航网站"
};
```

## 🔄 自动部署

### GitHub Pages 自动部署

使用提供的 `.github/workflows/deploy.yml` 文件可以实现自动部署：

1. 每次推送到 `main` 分支
2. GitHub Actions 自动构建并部署
3. 几分钟后更新生效

### Cloudflare Pages 自动部署

Cloudflare Pages 默认开启自动部署：

1. 推送到 GitHub
2. Cloudflare 自动检测更改
3. 自动构建和部署

## 🐛 常见问题

### Q: GitHub Pages 显示 404？
A: 
- 确认文件名是 `index.html`（小写）
- 确认仓库是 Public
- 等待几分钟让设置生效

### Q: config.js 修改后没有生效？
A: 
- 清除浏览器缓存（Ctrl+F5）
- 确认文件已正确上传到 GitHub
- 等待自动部署完成

### Q: Chrome 扩展链接点击没反应？
A: 这是正常现象，Chrome 扩展链接只能在地址栏中输入打开。

### Q: 手机端显示不正常？
A: 检查是否有语法错误，确认 CSS 中的响应式代码完整。

## 📱 移动端优化

网站已经包含移动端优化：

- 响应式布局
- 触摸友好的按钮尺寸
- 自适应字体大小
- 移动端手势支持

## 🔒 安全建议

1. 定期检查链接的有效性
2. 避免添加可疑网站链接
3. 使用 HTTPS 链接
4. 定期备份配置文件

## 📈 性能优化

1. **图片优化**: 使用 emoji 代替图片图标
2. **缓存策略**: 利用 CDN 缓存静态文件
3. **压缩**: 在生产环境中压缩 CSS 和 JS
4. **监控**: 使用 Google Analytics 跟踪使用情况

## 📞 技术支持

遇到问题可以：

1. 检查浏览器控制台错误信息
2. 查看 GitHub/Cloudflare 的构建日志
3. 参考官方文档
4. 提交 Issue 到项目仓库

## 🎉 完成！

现在你的快捷链接导航网站已经成功部署！你可以：

- 通过访问链接查看网站
- 修改 `config.js` 更新内容
- 分享给朋友使用
- 继续自定义功能
