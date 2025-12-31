---
title: Trojan
description: Trojan是一种基于HTTPS协议的代理工具，设计目的是为了隐蔽和高效地绕过网络审查。Trojan利用TLS加密，使其流量看起来与正常的HTTPS流量无异，从而难以被防火长城（GFW）等网络审查机制检测和拦截。
head:
  - - meta
    - name: keywords
      content: clash for windows,Trojan
---

# Trojan

Trojan是一种基于HTTPS协议的代理工具，设计目的是为了隐蔽和高效地绕过网络审查。Trojan利用TLS加密，使其流量看起来与正常的HTTPS流量无异，从而难以被防火长城（GFW）等网络审查机制检测和拦截。

## Trojan 的特点

- **HTTPS协议**：Trojan使用HTTPS（基于TLS的HTTP）进行数据传输，因此其流量与普通的HTTPS流量难以区分，有效规避流量分析和检测。
- **加密**：由于使用了TLS，Trojan的流量自动得到强加密保护，确保数据的安全性和隐私性。
- **高性能**：Trojan设计简洁高效，性能优异，适用于各种网络环境，提供稳定和快速的代理服务。
- **多平台支持**：Trojan支持Windows、macOS、Linux等多种操作系统，客户端和服务器均有相应的实现。
- **易于部署**：Trojan服务器的部署相对简单，通常与Web服务器（如Nginx）结合使用，以进一步增强流量隐蔽性。

## Trojan 的工作原理

- **客户端配置**：用户在本地配置Trojan客户端，指定服务器地址、端口、密码等信息。
- **服务器配置**：在远程服务器上部署Trojan服务端，配置TLS证书和密钥，设置监听端口和验证密码等。
- **连接建立**：客户端与服务器通过TLS建立安全连接，传输的数据全部经过加密处理。
- **数据传输**：一旦连接建立，所有客户端请求的数据通过Trojan服务器转发到目标地址，响应数据同样通过Trojan服务器返回客户端。

## 应用场景

- **绕过网络审查**：由于其流量伪装为普通HTTPS流量，Trojan可以有效绕过各种网络审查和封锁。
- **隐私保护**：通过TLS加密，Trojan确保用户数据在传输过程中的隐私和安全。
- **高效代理**：适用于需要高性能和稳定性的网络代理需求，如浏览网页、流媒体、在线游戏等。

## 与其他代理工具的关系

Trojan与[Shadowsocks](/wiki/Shadowsocks.md)、[VMess](/wiki/VMess.md)等代理工具类似，都是用于科学上网和绕过网络审查的工具。与这些工具不同的是，Trojan更注重流量的隐蔽性和与常规HTTPS流量的相似性，从而在一些严格的网络审查环境中表现更为出色。


::: warning ⚠️注意

- Clash for Windows已经停止更新，建议使用最新客户端Clash Verge。下载地址：[Clash Verge](https://clash-verge.uk)

:::

::: tip 🎉 节点推荐
- 🚀 <a href="https://c.jichangs.com/1yuan" rel="sponsored nofollow noopener" target="_blank">一元机场：IEPL/IPLC 高速专线，￥15.00/月</a><br>
:::

::: warning  💬 交流群

- 🫂 Telegram:[@jichang360](https://t.me/jichang360)

:::