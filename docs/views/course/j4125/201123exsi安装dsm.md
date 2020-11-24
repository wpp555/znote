---
title: "exsi安装dsm"
date: 2020-11-23 16:57:12
tags:
  - dsm
  - exsi
categories:
  - 教程
# sticky: 1
# isShowComments: false
---

## 准备

1.寻找文件[ESXi 虚拟机安装黑群晖 NAS 网盘系统](https://www.bilibili.com/video/BV1xE411L7KZ),使用的这个文件
## 安装

### 虚拟硬盘安装

1.引导文件首先转换成虚拟机专用，已经有转换好的文件

2.创建注册虚拟机>默认下一页>win+win7 64位>
```
cpu分配完全，内存先分配8g，整理好可降低一半，删除硬盘，可删除CD/DVD，保存
```

3.右键编辑
```
添加现有硬盘，上传引导文件(50M)，选择上传的引导，然后添加新的硬盘20g做系统盘，两个硬盘都选择sata控制器0-保存
```

4.开启电源，等10秒后打开synology Assistant搜索局域网群晖，搜不到多次搜索，识别后同意协议，进入安装界面，手动上传固件(pat结尾).....

### 直通硬盘安装

1.默认已经直通sata控制器[exsi直通sata](/views/course/j4125/201123exsi直通sata.html)

2.创建注册虚拟机>默认下一页>win+win7 64位>
```
cpu分配完全，内存先分配8g，整理好可降低一半，删除硬盘，可删除CD/DVD，保存
```

3.右键编辑-添加直通sata控制器
```
添加现有硬盘，上传引导文件(50M)，硬盘选择sata控制器0，
再添加其他设备>PCI设备>选择sata控制器-保存
```

4.开启电源，等10秒后打开synology Assistant搜索局域网群晖，
* 若硬盘里不存在群辉系统，安装群辉即可
* 若硬盘里存在群辉系统，直接进入群辉，不过此时半洗白可能已经失效，需要重新半洗白[vm-dsm半洗白](/views/course/dsm/200926vm-dsm半洗白.html)

