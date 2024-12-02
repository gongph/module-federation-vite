# module-federation-vue

Use the module-federation third-party library to make a vue module federation demo

## Directory structure

- **host-vue**：The host side, import the module from the remote side

- **remote-\***：The remote side, expose the module to the host side

## Preview

- remote vue

![preview](./media/截屏2024-12-02%2015.09.25.png)

- remote react

![preview](./media/截屏2024-12-02%2015.09.35.png)

## Usage

- Clone the project

```bash
git clone https://github.com/zhengyuxiang/module-federation-vue.git
```

- Install dependencies

```bash
cd remote-vue
pnpm i
pnpm preview

cd remote-react
pnpm i
pnpm preview

cd host-vue
pnpm i
pnpm dev # localhost:5173
```
