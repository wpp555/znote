---
title: "201123exsi安装ikuai"
date: 2020-11-23 16:55:12
tags:
  - ikuai
  - exsi
categories:
  - 教程
# sticky: 1
# isShowComments: false
---

## 准备
1.[爱快官网下载iso](https://www.ikuai8.com/component/download)，不要选择3.4.*版本即可


## 安装

1.创建ikuai VedioTalk的视频，国内没有视频

2.官网下载最新版3.4.4 iso 64位

3.创建注册虚拟机>默认下一页>linux+其他linux64位
```
cpu自己分配，最低内存2g,硬盘默认8g即可
新增几个网卡适配器，保存

再编辑->CD/DVD驱动器选择文件时，上传ik的iso，选择ik的iso
将网卡适配器选择不同的网卡，保存，启动电源

运行ikuai，输入1回车，再输入y回车
重新运行后选择2，再输入0，设置lan的ip为局域网下ip 10.10.10.253
```
4.基本设置
```
浏览器输入ip，登录默认帐号密码是admin/admin

点击网络设置>内外网设置>看情况设置
内网端口点击高级设置，可以lan扩展模式，设置拓展网卡
```




