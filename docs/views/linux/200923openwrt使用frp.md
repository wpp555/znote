---
title: "200923openwrt使用frp插件-内网穿透"
date: 2020-09-23 15:26:12
tags:
  - openwrt
  - frp
categories:
  - 教程
# sticky: 1
# isShowComments: true
---

## 前言

- 云服务一台，最好绑定域名使用
- frp 原理是通过云服务器转发本地的数据来达到公网访问局域网的目的，需要在服务器上开启 frps

## 服务端设置(centos7)

1.详细设置先不谈，之前写过一次[CentOS7 下 无公网 IP、有公网服务器方案 frp ](https://blog.csdn.net/wpp555/article/details/107050752)

2.云服务器设置 frps.ini 为下图，并 subdomain_host 是域名，并已经解析到本服务器 ip,防火墙开启`20001` 、 `20003`
<img src="https://s1.ax1x.com/2020/09/23/wvPhB4.png" alt="图片1" border="0">

## frpc 设置

1.安装好插件 frp 客户端

2.服务器填写云服务 ip，`端口`、`令牌`和`HTTP穿透服务端口`，填写与服务器相同即可

<img src="https://s1.ax1x.com/2020/09/23/wvPIE9.png" alt="图片2" border="0">

3.添加接口时，域名类型选择子域名，如下图，可以通过 `openwrt.域名:20003`访问内网主机的 3000 端口

<img src="https://s1.ax1x.com/2020/09/23/wvP4HJ.png" alt="图片3" border="0">
