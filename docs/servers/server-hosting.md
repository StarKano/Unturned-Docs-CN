---
title: 搭建服务器
translation:
  source: servers/server-hosting.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 搭建服务器

玩家可通过 **Unturned Dedicated Server（U3DS）** 托管多人服务器。该工具与游戏一同提供，但需要单独安装。你可以从 Steam 库安装并运行，也可以使用 [SteamCMD](/servers/steamcmd.html) 进行更高级的部署。U3DS 支持 Windows 和 Linux，不支持 macOS。

![Steam 库中的 Unturned Dedicated Server](/img/U3DS_SteamLibrary.png)

## 快速搭建 {#simple-setup}

下面的步骤适合只与几位好友游玩的私人服务器。服务器运行后，再按需配置端口转发等高级功能。

### 1. 启动 U3DS

从 Steam 库启动 **Unturned Dedicated Server**。服务器控制台会在新窗口打开；首次生成文件和加载地图可能需要几分钟。

![U3DS 加载地图](/img/U3DS_LoadingLevel.png)

当控制台显示 `Loading level: 100%` 和[服务器代码](/servers/server-codes.html)时，服务器已完成启动。

### 2. 邀请好友

可以通过 Steam 好友列表邀请玩家，也可以让他们在“直接连接”界面输入启动时生成的 **17 位 Server Code**。代码可从服务器内的“复制服务器代码”按钮或控制台取得；默认每次启动都会重新生成。你自己也可以使用该代码连接。

默认情况下，除同一局域网内的玩家外，服务器不会出现在多人游戏的服务器列表。未完成高级配置时，其他玩家通常只能通过 Steam 邀请或你分享的 Server Code 加入。

## 保存并关闭

服务器没有内置自动保存。运行时使用 `Save` 手动保存，或使用 `Shutdown` 安全保存并关闭。存档和配置文件位于 `.../U3DS/Servers/`，每个服务器各有一个文件夹。

## 配置服务器设置 {#configuration}

配置文件在相应服务器文件夹内，多数设置无法在服务器运行期间修改。按快速搭建步骤创建的服务器位于 `.../U3DS/Servers/Default/`。

常用文件包括：

| 文件 | 用途 |
| --- | --- |
| `Server/Commands.dat` | 地图、密码、最大玩家数等基本设置 |
| `Config.txt` | 难度、物品生成概率、游戏服务器登录令牌等高级设置，详见[服务器配置](/servers/server-configuration.html) |
| `WorkshopDownloadConfig.json` | 从 Steam 创意工坊下载 Mod |

### 命令

控制台命令可调整设置或生成物品。多数命令写在 `Commands.dat` 中，每行一条。下例包含常用设置；`//` 开头的行是注释，不会被执行。更多命令可查阅 [Unturned Wiki 的命令列表](https://unturned.wiki.gg/Commands)。

```text
// 服务器列表中的名称
Name My Unturned Server
// 地图名称；官方地图包括 PEI、Washington、Yukon、Russia 和 Germany
Map PEI
// 最大玩家数
MaxPlayers 24
// 将指定 SteamID64 设为服主，赋予管理员权限
// Owner YourSteamID
// 允许管理员使用生成物品或载具等作弊命令
Cheats
// 加入密码
// Password ExamplePassword1234
// 关闭玩家之间的战斗
// PvE
// 视角：First、Third、Both 或 Vehicle
Perspective Both
// 端口转发使用的端口
// Port 27015
```

有些命令只能在服务器运行时使用，例如 `Save`。可直接在服务器控制台输入；管理员也可在游戏聊天中加 `@` 或 `/` 前缀执行。可通过 `Owner`、运行时的 `Admin` 命令，或 `Adminlist.dat` 授予管理员权限。`Help` 可列出全部命令或说明指定命令。部分运行时命令（如用于生成物品的 `Give`）需要先启用 `Cheats`。

### 难度设置

在 [`Config.txt`](/servers/server-configuration.html) 中设置游戏规则、公开列表及其他玩法选项。默认按简单、普通、困难难度分别生成配置文件，服务器使用普通难度；可使用 `Difficulty` 命令切换为简单或困难难度配置。

### Steam 创意工坊 Mod

在 `WorkshopDownloadConfig.json` 中配置创意工坊 Mod。服务器启动时会安装和更新指定 Mod 及其依赖；玩家连接时会自动下载。

1. 打开 `WorkshopDownloadConfig.json`。
2. 从创意工坊页面 URL 取得文件 ID。例如 [Hawaii 地图](https://steamcommunity.com/sharedfiles/filedetails/?id=1753134636) 的 ID 为 `1753134636`。
3. 把 ID 加入 `File_IDs` 列表；多个 ID 用逗号分隔：

```json
"File_IDs": [1753134636, 1702240229],
```

4. 重启服务器，让它下载并更新这些文件。

精选地图和部分官方竞技地图也必须从创意工坊下载。以下 ID 与[官方地图清单](https://docs.smartlydressedgames.com/en/stable/servers/server-hosting.html#steam-workshop-mods)一致：

| 地图 | 文件 ID | 地图 | 文件 ID |
| --- | ---: | --- | ---: |
| A6 Polaris | 2898548949 | Athens Arena | 1454125991 |
| Arid | 2683620106 | Belgium | 1727125581 |
| Buak | 3000549606 | Bunker Arena | 1257784170 |
| California | 1905768396 | California2 | 3707778928 |
| Canyon Arena | 1850209768 | Carpat | 1497352180 |
| Cyprus Arena | 1647991167 | Cyprus Survival | 1647986053 |
| Dango | 1850228333 | Easter Island | 1983200271 |
| Escalation | 3251926587 | Elver | 2136497468 |
| France | 1975500516 | Greece | 1702240229 |
| Hawaii | 1753134636 | Hawaii Assets | 1753131903 |
| Ireland | 1411633953 | Kuwait | 2483365750 |
| PEI Arena | 2396897717 | Rio de Janeiro | 3416057692 |
| Rio de Janeiro (Original) | 1821848824 | Washington Arena | 2404652624 |

## 切换为互联网服务器 {#internet-server}

服务器默认按局域网服务器运行：玩家可通过 Steam 好友邀请或随机 Server Code 加入，但服务器不会出现在互联网服务器列表。

要公开服务器，先配置[游戏服务器登录令牌（GSLT）](/servers/game-server-login-tokens.html)。设置后，Server Code 在每次启动时也不再变化。随后在 [Fake IP](/servers/fake-ip.html) 与[端口转发](/servers/port-forwarding.html)中选择一种连接方式即可，无需同时配置；Fake IP 通常更容易启用。公开服务器应遵守[服务器托管规则](/servers/server-hosting-rules.html)。

## 相关主题

- 使用 [SteamCMD](/servers/steamcmd.html) 同时托管多个服务器。
- 通过 [Rocket（LDM）](/servers/rocket.html) 或 [OpenMod](/servers/openmod.html) 等框架安装插件。

> [官方原文](https://docs.smartlydressedgames.com/en/stable/servers/server-hosting.html)
