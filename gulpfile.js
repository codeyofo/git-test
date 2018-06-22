var gulp = require('gulp');
// 文件操作
var del = require('del'), // 删除文件
    rename = require('gulp-rename'), // 重命名文件
    contact = require('gulp-concat'), // 合并文件
    filter = require('gulp-filter'); // 筛选文件
// 文件压缩
var uglify = require('gulp-uglify'), // 压缩js
    csso = require('gulp-csso'), // 压缩css
    cleanCSS = require('gulp-clean-css'), // 压缩css
    imagemin = require('gulp-imagemin'), // 压缩图片
    imageminPngquant = require('imagemin-pngquant'), // 深度压缩图片
    cache = require('gulp-cache'), // 压缩修改过的图片
    base64 = require('gulp-base64'), // 把小图片转成base64字符串
    spriter = require("gulp-spriter"), // css自动合并雪碧图
    svgo = require('svgo'); // 压缩svg
// 文件修改
var autoprefixer = require('gulp-autoprefixer'), // 添加css浏览器前缀
    changed = require('gulp-changed'), // 传递更改过的文件
    header = require('gulp-header'), // 给文件头部添加信息
    ejs = require("gulp-ejs"), // 模板ejs,分离公用文件
    rev = require('gulp-rev'), // 给静态资源文件名添加hash值
    revReplace = require('gulp-rev-replace'), // 重写被gulp-rev重命名的文件名,更改引用路径
    sourcemaps = require('gulp-sourcemaps'), // 生成sourcemap文件
    useref = require('gulp-useref'); // 解析HTML文件中的构建块,对html页面中的js，css引用进行合并
// 流控制
var gulpif = require('gulp-if'), // 控制流条件判断
    lazypipe = require('lazypipe'), // 分离流的公共部分
    gulpSequence = require('gulp-sequence'), // 顺序执行任务
    requireDir = require('require-dir'), // 分离任务到多个文件
    watch = require('gulp-watch'); // 监听文件变化并执行更新
// 工具、其他
var browserSync = require('browser-sync').create(); // 自动刷新


