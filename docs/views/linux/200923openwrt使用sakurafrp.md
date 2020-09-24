---
title: "openwrt使用sakurafrp内网穿透"
date: 2020-09-23 15:26:12
tags:
  - openwrt
  - frp
  - sakurafrp
categories:
  - 教程
# sticky: 1
# isShowComments: true
---

## 前言

- 云服务器并不是谁都有，而且带宽低或者流量贵，因此寻找一些免费的大带宽穿透网站 [sakurafrp 官网](https://www.natfrp.com/)
- 免费流量获取有些困难，需要每天登录进行签到获取 1-4GB 流量，远程够用，上传下载临时用用
- 官方宣称高速流量 为 10Mbps 上行 / 10Mbps 下行，但我实测下载 750KB 左右，上传 160-180KB 晚上 10 点测试，虽然不符，但是比云服务器的 1M（125KB）宽带好太多了

## 教程

1.在官网新建隧道，随意选择节点(此次选择#24)

2.n1 盒子是 arm 架构，因此选择[Linux (arm64)](https://www.natfrp.com/tunnel/download)链接下载

```
wget https://qianqu.me/frp/frpc_linux_arm64
# 赋予权限
chmod + x frpc_linux_arm64
```

3.尝试一下使用， `./frpc_linux_arm64`,输入属于自己的密钥后选择一个节点 _命令行启动只能选择一个节点下的隧道_

4.openwrt 脚本 `vim /etc/init.d/sakurafrp`,

```
vim /etc/init.d/sakurafrp
#!/bin/sh /etc/rc.common
START=99
STOP=15

start() {
  # 开启 #24下的所有隧道
  /root/wpp/sakura/frpc_linux_arm64 -f 1234567890:n24
  # 开启同一节点下的隧道(不是同一节点会报错)
  # /root/wpp/sakura/frpc_linux_arm64 -f 1234567890:1000,1001,1002
}
```

5.赋予权限、开机启动

```
chmod + x sakurafrp
/etc/init.d/sakurafrp enable 	# 开机项
/etc/init.d/sakurafrp stop	# 关闭，没写
```

6.创建一个脚本`sakurareboot`，监测是否开启 sakurafrp，未开则启动`sakurafrp`脚本

- 监测脚本本身占用进程，必须要去除
- 后续定时任务也是一个进程，名称不能和监测脚本查询的名称有相同之处

```
#!/bin/sh /etc/rc.common
START=99
STOP=15

start() {
    RUNNING=`ps | grep frpc_linux_arm64 | grep -v grep`
  curtime=`date "+%F %H:%M:%S"`
  if [ "$RUNNING" ]; then
  # echo $curtime "test start" $RUNNING
  exit
  else
  /etc/init.d/sakurafrp start
  echo $curtime "sakurafrp starting" >> /root/wpp/sakura/sakurareboot.log
  fi
}
```

chmod + x sakurareboot

7.定时任务，每 5 分钟执行`sakurareboot`脚本

```
vim /etc/crontabs/root
# 添加脚本
*/5 * * * *  /etc/init.d/sakurareboot start
:wq保存退出
# 加载任务,使之生效
crontab /etc/crontabs/root
# 查看任务
crontab -l
```
