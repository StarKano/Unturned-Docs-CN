---
title: Unity 项目概览
translation:
  source: u3-sdk/unity-project.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Unity 项目概览

## 下载

Unturned 项目文件使用 [Git](https://git-scm.com/) 版本控制。安装 Git CLI 后：

```bash
git clone https://github.com/SmartlyDressedGames/U3-SDK.git
```

## 开始使用

需要与[开始使用](/about/getting-started.html)相同版本的 Unity；也可查看 `ProjectSettings/ProjectVersion.txt`。

Steam 必须运行并安装 [Unturned](https://store.steampowered.com/app/304930)。Workshop Mod 和大型二进制文件从官方最新版读取。

在 Editor 运行游戏：打开 `GameStartup.unity` 并点击 Play。

::: tip
游戏运行时建议关闭 Unity **Hierarchy**，除非确实需要。Unturned 为优化包含大量顶层 GameObject，会拖慢 Hierarchy。
:::

## Editor Preferences

Unturned 不支持 Hot Reload。修改代码时建议把 **Script changes while playing** 设为 **Recompile after playing**。

## Play Mode Settings

从 **Window > Unturned > Editor Settings** 打开，主要用于设置平时由命令行指定的[启动参数](/about/launch-options.html)。

- **Auto Load Level and Auto Load Mode**：填写关卡文件夹名可绕过菜单直接进单人或关卡编辑器。
- **Glazier**：覆盖默认 Glazier。

## 故障排查

查看 Unity 日志。Windows 项目目录有最近日志 `Unity Editor.log` 和日志目录快捷方式 `UnityEditor Logs Folder`。

## 文件结构

- `Assets/Game/Sources`：Asset Bundle 资源的源文件和导入文件，例如 `.blend`、`.fbx`。
- `Assets/Resources`：由 Unity `Resources` 加载；应尽量避免新增。
- `Assets/Runtime`：全部 Player 代码。大多数仍在 `Assembly-CSharp`；截至 2024-10-18，重命名可能破坏 Asset Bundle 脚本引用。
- `Assets/Runtime/Assembly-CSharp/NetGen`：生成的网络代码，提交到 Git 以简化首次运行。
- `Builds`：导出的 Unity Player。

## 网络代码

多数玩法需要 RPC，单人本质上也是一人服务器。生成 RPC：

1. **Window > Unturned > Net Gen**。
2. 点击 **Generate**。
3. 切出再切回 Unity，确保脚本被导入。

## 持续集成

官方每次 Commit 由 [Jenkins](https://www.jenkins.io/) 构建并测试，也可上传到 Steam 分支。2024-10-18 时 Jenkins 为本地托管，不对互联网开放。

Pipeline 脚本为 `Build_Scripts/Jenkinsfile.txt`；Unity 版本由 `Build_Scripts/JenkinsBootstrapper.exe` 选择，查找：

- `C:\UnityEditors`
- `C:\Unity Editors`
- `C:\Program Files\Unity\Hub\Editor`

目前开发和构建流程仍明显偏向 Windows。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://en.wikipedia.org/wiki/Version_control>
- <https://learn.unity.com/tutorial/unity-tips#64622ce0edbc2a32a219b25e>

> 上游原文：[u3-sdk/unity-project.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/u3-sdk/unity-project.rst)
