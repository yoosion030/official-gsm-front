# official-gsm-front
![image](https://github.com/yoosion030/official-gsm-front/assets/80191860/08b29c78-bd45-4c2c-9c0f-a369522ce80b)

광주소프트웨어마이스터고등학교 공식 홈페이지입니다.
> 현재는 임시 운영 기간입니다.  
> 임시 운영 기간동안, 230+ 명의 사용자와 680+ 건의 페이지 뷰를 기록하였습니다.

### GET Start

> root `package.json` scripts에 `--filter` command를 포함하여 작성해두었습니다.

```bash
$ git clone https://github.com/themoment-team/official-gsm-front.git
$ cd official-gsm-front
$ pnpm install

# command of a specific package
$ pnpm <package-name> <command>

# example
$ pnpm client dev
```

### Skill Set

```txt
- application
  Next.js - App Router

- core library
  Storybook
  Typescript
  emotion
  @tanstack/react-query
  axios
```

### Directory Structure

```bash
...
│── apps
│   └── client
│   └── admin
│   └── storybook
│
│── packages
│   └── api
│   └── common
│   └── eslint-config-custom
│   └── tsconfig
│   └── types
│   └── ui
...
```
