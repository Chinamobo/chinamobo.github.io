---
layout: post
title: Office 剪辑使用
description: 本文介绍 Office 剪辑（剪贴画）的使用，使用共享剪辑收藏集
category: 教程
tags: [内部培训, 软件使用]
author: BB9z
author_url: https://github.com/BB9z

---

什么是剪辑，为什么要用
----
Microsoft Office 一直有一个内建的素材管理、使用的机制，可以管理包含图像、音频、视频在内的素材，称这之为剪辑。不过最常用的还是图像，所以又叫剪贴画。

使用剪辑的好处：

* 支持矢量格式的图像剪辑，便于创建高品质的文档；
* 剪辑有相应关键属性，可以通过关键字快速找到所需的素材；
* 对于企业、组织来说，可以通过共享剪辑实现素材统一管理、更新，尤其适合公司标示的使用。


如何使用
----
下面通过几个动画进行展示。

1. 添加到文档：

    ![通过菜单添加剪辑到文档]({{ site.url }}/img/office/clips/add_to_document_1.gif)
    
    其他 Office 应用方式类似，都在插入里能找到。

2. 另一种添加方式：

    ![通过占位符按钮添加剪辑到文档]({{ site.url }}/img/office/clips/add_to_document_2.gif)
    
3. 通过关键字搜索剪辑：

    ![搜索剪辑演示]({{ site.url }}/img/office/clips/search_demo.gif)
    
    提示：取消“包括 Office.com 内容”以加快搜索；搜索内容为空时点击搜索可以列出本地所有剪辑。
    
4. 如果剪辑是矢量的可以随意缩放而不用担心图像失真：

    ![矢量剪辑缩放演示]({{ site.url }}/img/office/clips/resize_demo.gif)


添加公司素材剪辑
----
1. 打开 Office 剪辑管理器，你应该可以在开始菜单中找到，如下图所示：

    ![从开始菜单中打开剪辑管理器]({{ site.url }}/img/office/clips/open_clips_manager_in_startup_menu.png)

2. 进入剪辑管理器后，通过菜单添加共享的剪辑收藏集，步骤参考下面动画：

    ![添加收藏集步骤演示]({{ site.url }}/img/office/clips/clips_manager_add_share_collection.gif)
    
    公司共享收藏集的路径是：
    
    ```
    \\fs\Company\3.标识 & VI\Office Clips\Chinamobo.mgc
    ```
    

3. 重启剪辑管理器后你应该能在收藏集列表中看到新增的收藏集了，如下所示：

    ![共享收藏集]({{ site.url }}/img/office/clips/clips_manager_verify_share_collection_loaded.png)

4. 开始在其他 Office 应用中使用剪辑吧～