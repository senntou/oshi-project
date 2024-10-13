# Build stage
FROM golang:1.23 AS builder

# 作業ディレクトリを作成
WORKDIR /app

# モジュールファイルをコピーして依存関係をダウンロード
COPY go.mod go.sum ./
RUN go mod download

# ソースコードを全てコピー
COPY . .

# バイナリをビルド
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o server ./main.go

# Runtime stage（軽量なコンテナにバイナリを移動）
FROM gcr.io/distroless/base-debian10

WORKDIR /app

# ビルドしたバイナリをコピー
COPY --from=builder /app/server /app/

# アプリケーションを起動
CMD ["/app/server"]
