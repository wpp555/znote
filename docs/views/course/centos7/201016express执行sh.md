---
title: "express执行sh脚本"
date: 2020-10-16 10:46:12
tags:
  - express
  - sh
categories:
  - 教程
# sticky: 1
# isShowComments: false
---

## 前言

github 上有一个 webhook 功能，可以让我们在进行操作时发送到指定服务器一个一次性链接，告诉我们，你正在执行一个操作

我们可以用来，在本地 push 到 github 上之后，服务器直接拉取 github 上的代码，然后重新运行服务，完全不需要自己手动操作

## 前题

1、外网能够访问的服务(云服务器),有域名好记
2、环境 node、git(启动脚本不需要)
3、最好使用防火墙，然后 Nginx 转发请求到指定端口

## 实现

1.根目录新建文件夹 shell，shell 中新建 test.md

```
#!/bin/sh
echo 接收到pull请求
sleep 3
echo 写入日志到根目录push.log最后一行 >> ./push.log
```

2.接口信息,get 和 post 各写一个，相同语句(测试 get、github 请求是 post)

```
router.get(`/sh/:id`, function (req, res) {})
router.post(`/sh/:id`, function (req, res) {
    const { id } = req.params;
    var exec = require("child_process").exec; //需要执行的命令字符串
    var cli = "sh ./shell/" + id + ".sh"; // 执行命令
    exec(cli, { encoding: "utf8" }, function (err, stdout, stderr) {
        if (err) {  // 如果抛出错误

            return;
        }
        // 如果没有错误,则执行命令成功
    });
});
```

3.启动本地服务 8822(22 端口占用)，`localhost:8822/sh/test`,即可执行代码，别忘记返回`res.send`
