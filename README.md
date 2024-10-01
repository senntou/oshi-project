# 構成
### frontend
* 主アプリのフロントエンド
* Next.js
* Tailwind CSS

### backend
* 主アプリのバックエンド
* Go
* Echo
* PostgreSQL

### admin
* 管理者用Webサイトのフロント・バックエンド
* Typescript
* Node.js
* Express
* ejs

# 導入
- Goのインストール
- Nodeのインストール
- npm install

# 起動
### コンテナ立ち上げ
```
make compose/up
make migrate    // なくても良い
make seed       // なくても良い
```
### 実行
```
make run/backend
make run/frontend
make run/admin
```

