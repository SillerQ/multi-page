module.exports = {
    plugins: [
        require('postcss-import'), // 处理css中的@import
        require('autoprefixer')  // 自动添加浏览器前缀
    ]
}