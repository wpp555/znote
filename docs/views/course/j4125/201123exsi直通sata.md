---
title: "201123exsi直通sata控制器"
date: 2020-11-23 17:20:12
tags:
  - exsi
categories:
  - 教程
# sticky: 1
# isShowComments: false
---

## 准备 

1.[ESXi 直通板载SATA接口](https://www.ceer.cc/774)

2.注意系统不能安装在sata接口上

3.xshell和xftp


## 操作

1.exsi开启ssh功能
```
exsi网页端>管理>服务>搜索 ssh>启动
```

2.xshell连接exsi的ip，并输入命令
```
lspci -v | grep "Class 0106" -B 1
```

查看是否有以下显示(`8c02`会随着机器不同而改变)

```

0000:00:1f.2 SATAcontroller Mass storage controller: Intel Corporation Lynx Point AHCIController [vmhba0]

         Class 0106: 8086:8c02
```

3.手工配置直通，使用vi 命令或者xftp工具
```
vi /etc/vmware/passthru.map
```
添加如下代码
```
#Intel Corporation Lynx Point AHCI Controller
8086   8c02    d3d0    false
```

4.重启 reboot

5.在管理>硬件中可以看到`SATA控制器`已经可以切换直通，注意切换后重启生效

