# ベースイメージとしてNode.jsを指定する
FROM node:18-alpine

ENV NEXT_PUBLIC_GOOGLE_API_KEY="AIzaSyDdYBpNKcBlN5bCzh5MQ3WizyiL2A3y9UU"
ENV NEXT_PUBLIC_GOOGLE_AUTH_DOMAIN="oshi-project-c1633.firebaseapp.com"
ENV NEXT_PUBLIC_PROJECT_ID="oshi-project-c1633"
ENV NEXT_PUBLIC_STORAGE_BUCKET="oshi-project-c1633.appspot.com"
ENV NEXT_PUBLIC_MESSAGING_SENDER_ID="1009019761465"
ENV NEXT_PUBLIC_APP_ID="1:1009019761465:web:b3e51984236183822d6ee8"
ENV NEXT_PUBLIC_MEASUREMENT_ID="G-JF4J1BMJMZ"

# 作業ディレクトリを作成して移動
WORKDIR /app 

# パッケージ情報をコピー
COPY /package*.json ./

# 依存関係をインストール
RUN npm install

# プロジェクトのすべてのファイルをコンテナにコピー
COPY . .

# Next.jsのビルドを実行
RUN npm run build

# サーバーを起動
CMD ["npm", "run", "start"]
