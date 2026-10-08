---
title: 数据文件格式
translation:
  source: assets/data-file-format.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 数据文件格式

本文介绍 Unturned `.dat` 与 `.asset` 文件使用的语法。

每一行都是由空格分隔的键值对。键和值都可以选择使用引号包裹，例如：

~~~text
Key1 First value
"Key2 in quotes" Second value
Key3 "Third value"
~~~

会被解析为：

~~~text
"Key1" = "First value"
"Key2 in quotes" = "Second value"
"Key3" = "Third value"
~~~

给值加引号的主要用途，是允许在同一行末尾添加注释。被引号包裹的键或值内部如果还要出现引号，可以使用反斜杠 `\` 转义，例如 `"a \"b\" c"` 会被解析成 `b` 两侧带引号的文本。

键也支持引号，以便理论上允许键名中包含空格，不过原版游戏目前没有使用带空格的键。

::: note
键名不区分大小写。例如 `Use_Cool_Option true` 与 `UsE_cOoL_oPtIoN true` 完全相同。同一个字典中的键应保持唯一。
:::

一个键能接受什么值取决于对应数据类型。大多数（但并非全部）属性会使用 C# 内置类型。

## 对象 / 字典

一组键值对构成一个字典（有时也称 Object）。文件最外层本身就是一个字典，并可以使用 `{ }` 花括号添加子字典。

在某个键的下一行写 `{` 会开始一个子字典，与之配对的 `}` 用来结束它。

下面示例中，`object1` 是根字典的子字典，`object2` 是它的下一层子字典：

~~~text
object1
{
    object2
    {
        key value
    }
}
~~~

## 数组 / 列表

列表（有时也称 Array）使用 `[ ]` 方括号。在某个键的下一行写 `[` 会开始列表，与之配对的 `]` 用来结束它。

下面的 `values` 是字符串列表：

~~~text
values
[
    first value
    second value
    third value
]
~~~

列表也可以包含字典：

~~~text
List_Of_Objects
[
    {
        x 1
        y 2
    }
    {
        x 3
        y 4
    }
]
~~~

::: note
许多较老的资源属性出现于列表语法加入之前，因此这些旧字段通常用“元素数量 + 带索引的键名”表示数组或列表，例如：

~~~text
// Total number of elements in old-style list
Elements 2

// First element has an index of 0
Element_0 A

// Second element has an index of 1
Element_1 B
~~~
:::

## 注释

以 `//` 开头的整行会被视为注释，不参与解析。注释适合在资源文件里加入解释说明。

如果值使用引号包裹，也可以在行末追加注释。例如：

~~~text
// a comment
key1 value1
key2 "value2" // in-line comment
~~~

但下面这种写法中，因为值没有被引号包裹，`//` 后面的内容不会从值中排除：

~~~text
key value // this is not treated as a comment because the value is not in quotes
~~~

## 常见问题

### 如何写多行值？

使用 `\n` 转义序列开始新的一行，例如：

~~~text
Text First line\nSecond line
~~~

会把 `Text` 的值设置为：

~~~text
First line
Second line
~~~

### 值本身包含引号时，如何在后面添加行内注释？

行内注释要求整个值使用引号包裹，因此值内部的引号需要写成 `\"`：

~~~text
// The parser will read the comment as part of the value because it doesn't know where the value ends.
Text Why use so-called "scare quotes" instead of /s? // Comment here

// The parser will exclude the comment from the value and replace the \" with quotation marks.
Text "Why use so-called \"scare quotes\" instead of /s?" // Comment here
~~~

### 为什么不能把列表或字典的起始括号放在键的同一行？

很遗憾，这种写法不受支持，因为它会破坏与最早期 `.dat` 文件的向后兼容性。旧文件可能把 `[` 或 `{` 当作普通值的第一个字符。

例如下面这种写法存在兼容性问题：

~~~text
SomeDictionary {
    SomeList [
    ]
}
~~~

正确写法必须把起始的 `[` 或 `{` 放到下一行：

~~~text
SomeDictionary
{
    SomeList
    [
    ]
}
~~~

## 历史

在 3.23.6.0 更新之前，Unturned 曾同时存在两套自定义语法：`.dat` 使用“v1”，`.asset` 使用“v2”。

v1 只支持键值对；v2 加入了字典和列表，并且要求键和值都使用引号。

这也是为什么 `{` 与 `[` 必须单独放在新的一行：已有 v1 资源可能本来就把 `{` 或 `[` 当作值的第一个字符。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/assets/data-file-format.html)
