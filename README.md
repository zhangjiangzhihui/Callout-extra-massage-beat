# Callout Extra Message 插件使用说明


注意：此插件为非计算机专业学生开发（AI 加持),目前存在非常多的bug，待开发（如果有大佬愿意帮忙一下，争取早日开源）
## 目录
- [插件简介](#插件简介)
- [基础功能](#基础功能)
  - [Callout 备注功能](#callout-备注功能)
  - [快速转换文本](#快速转换文本)
- [场景管理](#场景管理)
  - [创建场景](#创建场景)
  - [编辑场景](#编辑场景)
  - [删除场景](#删除场景)
  - [复制场景配置](#复制场景配置)
- [笔记类型配置](#笔记类型配置)
  - [添加笔记类型](#添加笔记类型)
  - [编辑笔记类型](#编辑笔记类型)
  - [删除笔记类型](#删除笔记类型)
- [图标设置](#图标设置)
  - [图标样式](#图标样式)
  - [图标大小](#图标大小)
  - [图标位置](#图标位置)
- [导出功能](#导出功能)
- [授权说明](#授权说明)
- [常见问题](#常见问题)

## 插件简介

Callout Extra Message 是一个为 Obsidian 的 Callout 功能增加额外备注功能的插件。它允许用户为每个 Callout 添加多条备注信息,并支持自定义 Callout 的样式和图标显示。
![image.png](https://zhangjiangchong.oss-cn-chengdu.aliyuncs.com/20241207195019.png)
![image.png](https://zhangjiangchong.oss-cn-chengdu.aliyuncs.com/20241207200116.png)
![image.png](https://zhangjiangchong.oss-cn-chengdu.aliyuncs.com/20241207200149.png)
## 基础功能

### Callout 备注功能

1. **添加备注**
   - 点击 Callout 右上角的消息图标
   - 在弹出的输入框中输入备注内容
   - 点击保存即可添加备注

2. **查看备注**
   - 点击 Callout 右上角的数字图标
   - 在右侧面板中查看该 Callout 的所有备注
   - 支持按时间顺序显示所有备注记录

3. **编辑备注**
   - 在右侧面板中点击备注的"编辑"按钮
   - 修改备注内容后保存即可

4. **删除备注**
   - 在右侧面板中点击备注的"删除"按钮
   - 确认后即可删除该条备注
  
  ![image.png](https://zhangjiangchong.oss-cn-chengdu.aliyuncs.com/20241207195222.png)

### 快速转换文本

1. **使用右键菜单转换**
   - 选中要转换的文本
   - 右键点击选择"我的笔记类型"
   - 在弹出的窗口中选择要使用的笔记类型
   - 文本将自动转换为对应样式的 Callout

2. **使用命令转换**
   - 选中要转换的文本
   - 使用快捷键打开命令面板
   - 搜索并选择"将选中文本转换为 Callout"
   - 选择要使用的笔记类型

![image.png](https://zhangjiangchong.oss-cn-chengdu.aliyuncs.com/20241207195501.png)


## 场景管理

### 创建场景

1. 在插件设置中点击"添加新的场景"按钮
2. 输入场景名称
3. 为新场景添加笔记类型配置

### 编辑场景

1. 点击场景标签旁的编辑按钮
2. 修改场景名称
3. 保存更改

### 删除场景

1. 点击场景标签旁的删除按钮
2. 确认删除操作
   > 注意：默认场景无法删除
![image.png](https://zhangjiangchong.oss-cn-chengdu.aliyuncs.com/20241207195644.png)

### 复制场景配置

1. 选择目标场景
2. 点击"从其他场景复制配置"按钮
3. 选择要复制配置的源场景
4. 确认复制

## 笔记类型配置

### 添加笔记类型

1. 在场景设置中点击"添加新的笔记类型"
2. 配置以下参数：
   - 文字颜色
   - Callout 颜色
   - Callout 名称
   - Callout 类型
   - 背景颜色
  ![image.png](https://zhangjiangchong.oss-cn-chengdu.aliyuncs.com/20241207195733.png)

### 编辑笔记类型

1. 在笔记类型设置中直接修改各项参数
2. 修改会自动保存

### 删除笔记类型

1. 点击笔记类型右上角的删除按钮
2. 确认删除操作
   > 注意：每个场景必须保留至少一个笔记类型

## 图标设置

### 图标样式

1. 支持 5 种不同的图标样式
2. 在设置中选择喜欢的样式
3. 更改后所有 Callout 的图标会立即更新

### 图标大小

1. 通过滑块调整图标大小
2. 支持 16-48 像素的范围
3. 可以实时预览效果

### 图标位置

1. 调整顶部间距（0-32 像素）
2. 调整右侧间距（8-100 像素）
3. 在预览区域查看效果
![image.png](https://zhangjiangchong.oss-cn-chengdu.aliyuncs.com/20241207195800.png)
## 导出功能

1. 在右侧面板中点击"导出笔记"按钮
2. 在预览窗口中查看导出内容
3. 确认后选择保存位置
4. 导出为 PDF 文件
![image.png](https://zhangjiangchong.oss-cn-chengdu.aliyuncs.com/20241207195957.png)

## 授权说明

1. **试用版**
   - 首次安装可获得 6 小时试用期
   - 试用期结束后需要激活才能继续使用
   - 重新安装插件可重置试用期

2. **激活版**
   - 输入有效的激活码
   - 点击激活按钮
   - 重启 Obsidian 后生效

