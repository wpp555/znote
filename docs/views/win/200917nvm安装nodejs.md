---
title: "nvm安装使用nodejs"
date: 2020-09-17 08:04:00
tags:
  - nvm
  - nodejs
categories:
  - 教程
# sticky: 1
# isShowComments: false
---

## 1.nvm是什么
nvm是nodejs的版本管理工具，为什么要用nvm，你能百度到这篇文章相比是遇到不得不用的原因了，我们知道nodejs官方更新的速度非常快，有时候业务需要需要用某某版本，如果用的是msi安装，虽然安装的时候挺简单，但是后面就麻烦了，学会了以后能省去很过时间。

## 2.下载nvm
打开  [github下载地址](https://github.com/coreybutler/nvm-windows/releases) 本次使用安装版

```
nvm-noinstall.zip：绿色免安装版，但使用时需进行配置。
nvm-setup.zip：安装版，推荐使用
```
<img src="https://s1.ax1x.com/2020/08/14/dC7m3d.png">

## 3.安装
1.卸载原来nodejs，并删除相关文件夹

2.双击zip中 `nvm-setup.exe` ，第一步同意协议就不上截图了

<img src="https://s1.ax1x.com/2020/09/17/wRi2aq.png" width="30%">
<img src="https://s1.ax1x.com/2020/09/17/wRi5zF.png" width="30%">
<img src="https://s1.ax1x.com/2020/09/17/wRivRO.png" width="30%">

3.第5步点击`Finish`安装完成，然后cmd输入`nvm`，显示安装版本 1.1.7

<img src="https://s1.ax1x.com/2020/08/14/dCqV4U.png" width="70%">

4.`不用配置环境变量了`，安装的时候已经配置了`用户变量`和`系统变量`

## 4.安装nodejs
1.nvm可能需要科学上网，也可能是国外网址下载太慢，切换淘宝镜像
* 打开nvm安装目录下的`settings.txt`，最后一行换行添加
    ```
    node_mirror: https://npm.taobao.org/mirrors/node/
    npm_mirror: https://npm.taobao.org/mirrors/npm
    ```
* 或者执行
    ```
    nvm node_mirror https://npm.taobao.org/mirrors/node/
    nvm npm_mirror https://npm.taobao.org/mirrors/npm/
    ```
<img src="https://s1.ax1x.com/2020/09/17/wRFwwR.png">

2.下载nodejs( 默认是64位，32位需指定)
```
nvm ls available        # 列出远程服务器上所有的可用版本
nvm install latest      # 最新稳定版
nvm install v12.14.0    # 下载其他指定版本
nvm list                # 查看下载的所有版本
nvm use v12.14.0        # 指定使用版本
nvm uninstall v12.14.0  # 删除已安装的指定版本，语法与install类似
```
<img src="https://s1.ax1x.com/2020/09/17/wRF2OH.png" width="30%">
<img src="https://s1.ax1x.com/2020/09/17/wRFhTI.png" width="30%">
<img src="https://s1.ax1x.com/2020/09/17/wRFxkq.png" width="30%">

3.此时打开h5文件夹，发现多了nodejs快捷方式
<img src="https://s1.ax1x.com/2020/09/17/wRFb6g.png" width="80%">

4.使用没有问题，更改依赖位置可参考 [nodejs安装、更改全局位置](https://blog.csdn.net/wpp555/article/details/107839016)

