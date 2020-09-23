---
title: "openwrt设置zerotier"
date: 2020-09-17 16:50:12
tags:
  - openwrt
  - zerotier
categories:
  - 教程
# sticky: 1
# isShowComments: true
---

## 设置 zerotier 局域网

### 1. 参考：

1.[【韩风 Talk】Openwrt 的 Zerotier 插件玩法...](https://www.bilibili.com/video/BV1hT4y1E78k)
2:12-6:50 介绍 zerotier 配置使用
8:48-12:12 介绍 zerotier 服务器 moom

### 2. 配置客户端使用

1. https://my.zerotier.com/ 注册账号，新建局域网

2. 启用后，在 zerotier.com 上确认加入局域网，然后可能造成 N1 盒子无响应，不知道原理

3. 网络>接口 新增接口，ip 设置为 my.zerotier.com 上分配的 ip，并取消桥接，选择下面带`gan`后缀的接口，并记住`ztyxarzgan` 要配置到防火墙里

<img src="https://s1.ax1x.com/2020/09/17/wWskoF.png" alt="wWskoF.png" border="0" />

4. 三行命令配置到防火墙，然后点击保存运行
   iptables -I FORWARD -i ztyxarzgan -j ACCEPT
   iptables -I FORWARD -o ztyxarzgan -j ACCEPT
   iptables -t nat -I POSTROUTING -o ztyxarzgan -j MASQUERADE

5. 已经可以添加新的客户来访问了

### 3. 配置服务端 moom

- 原因：zerotier 服务器都在国外，如果没有自己搭建的 moom 服务器做中间连线，延迟高还容易丢包
- 服务器只是做个牵线作用，并没有做流量转发，实际网速取决于两边网络

1. 云服务器端口打开 9993，剩下的看视频跟随设置吧
   ```
    1、 curl -s https://install.zerotier.com/ | sudo bash
    2、zerotier-cli join 网络ID
    3、cd /var/lib/zerotier-one
       sudo zerotier-idtool initmoon identity.public > moon.json
    4、修改配置文件moon.json
        "stableEndpoints": [ "23.23.23.23/9993" ]
    5、sudo zerotier-idtool genmoon moon.json
        mkdir moons.d
        mv ./*.moon ./moons.d/
    6、systemctl restart zerotier-one
   ```
2. 服务端设置好之后，记住 moom 产生的 id，不需要第二次
3. xshell 连接 openwrt，加入 moon 的命令
   `zerotier-cli orbit moomid moomid` 4.检验的命令,出现箭头所指字段即为加入成功
   `zerotier-cli listpeers`
   <img src="https://s1.ax1x.com/2020/09/17/wWhaOH.png" alt="wWhaOH.png" border="0" />

5.我配置了之后，延迟有时高有时低，没怎么用
