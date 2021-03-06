---
title: "N1盒子装openwrt教程"
date: 2020-09-17 14:23:12
tags:
  - openwrt
  - 安装使用
categories:
  - 教程
# sticky: 1
# isShowComments: true
---

## 前言

- 买来是为了折腾一下软路由，还可以做一个电视盒子使用，自己做了内网穿透使用，半个月还能正常运行
- 斐讯 n1 在转转上购买，卖家已经刷好降级以及激活 U 盘启动
- 刚开始在[矿渣论坛](https://bbs.nas66.com)和 B 站了解这个盒子，买回来以后又知道了[恩山无线](https://www.right.com.cn/)这个大基地,教程基本在恩山和 b 站获取

## 刷 openwrt

### 参考

大神们都研究的透透的，写几个链接

- [N1 盒子 ★36+o 版 N1*OP_U 盘直刷包，及贝壳云\_OP*线刷包](https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=981406)
  ```
  下载flippy大最新版固件(感谢f大),
  本人下载是 2020-08-23更新的 N1_Openwrt_R20.7.20_k5.4.60-flippy-42+o.img
  ```
- [N1 做旁路由，K3N 做 AP..](https://www.right.com.cn/forum/thread-2284065-1-1.html)

  ```
  降级，u盘启动
  ```

- [ N1 网关模式(旁路由)详细设置指南](https://www.right.com.cn/forum/thread-4035785-1-1.html)
  ```
  配置上比较详细
  ```
- [b 站 powersee：N1 变身万能路由器 OpenWrt](https://www.bilibili.com/video/BV1w7411N7u2)
  ```
  Openwrt刷入U盘		2:00-3:13
  剩下部分也可以照敲，DHPC部分，不是自己家的可能不需要设置
  系统刷入u盘也是他分享的
  ```

### 教程

1.刷 u 盘请参照上面 3 教程，刷 u 盘后，u 盘会变得很小，不挑 u 盘

<img src="https://s1.ax1x.com/2020/09/17/wWB2y6.png">

2.以下选择一个连接即可(盒子先不用连接网络)

```
    1. wifi连接openwrt，网址输入192.168.1.1
    2. 网线将盒子和电脑连接在一起，电脑ip设置自动获取，网址输入192.168.1.1
```

3.网络-接口-修改静态 ip 为局域网随意不重复 ip，网关设置路由器 ip

- DHCP 一个解释十分详细的视频 [旁路由设置教程：推开网关大门理解旁路由设置方法](https://www.bilibili.com/video/BV18Z4y1N7UN)

  4.网络-接口-lan 的修改-物理设置 取消桥接选择 `以太网设配器 lan`

<img src="https://s1.ax1x.com/2020/09/17/wWBROK.png">

5.网络-防火墙 - 自定义规则 新增

```
# This file is interpreted as shell script.
# Put your custom iptables rules here, they will
# be executed with each firewall (re-)start.

# Internal uci firewall chains are flushed and recreated on reload, so
# put custom rules into the root chains e.g. INPUT or FORWARD or into the
# special user chains, e.g. input_wan_rule or postrouting_lan_rule.
iptables -t nat -A PREROUTING -p udp --dport 53 -j REDIRECT --to-ports 53
iptables -t nat -A PREROUTING -p tcp --dport 53 -j REDIRECT --to-ports 53

# 新增的一条规则
iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE
```

6.连接网线重启即可使用，后续什么的，看视频吧，基本结束

7. [ssr 简单设置](/views/course/n1/200925openwrt使用ssr.html)
