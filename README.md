# Basic Wallet Demo

这是一个使用 Next.js、wagmi 和 RainbowKit 构建的基础钱包连接演示项目。该项目旨在帮助开发者熟悉 Web3 钱包连接的基本概念和实现。

## 项目目的

-   练习和熟悉 wagmi 库的使用
-   学习如何集成 RainbowKit 进行钱包连接
-   理解 Web3 应用中的基本概念和工作流程

## 技术栈

-   Next.js
-   TypeScript
-   wagmi
-   RainbowKit
-   React Query

## 快速开始

1. 克隆仓库：

    ```
    git clone https://github.com/your-username/basic-wallet-demo.git
    cd basic-wallet-demo
    ```

2. 安装依赖：

    ```
    pnpm install
    ```

3. 配置环境变量：

    创建 `.env.local` 文件并添加以下内容：

    ```
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=你的WalletConnect项目ID
    ```

    可以在 [WalletConnect Cloud](https://cloud.walletconnect.com/) 获取项目 ID。

4. 运行开发服务器：

    ```
    pnpm dev
    ```

5. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 主要功能

-   钱包连接：使用 RainbowKit 提供的 UI 组件连接各种以太坊钱包
-   链切换：支持在多个以太坊网络之间切换
-   账户信息显示：展示连接钱包的地址和余额
