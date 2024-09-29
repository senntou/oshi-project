#!/bin/bash

# 保存先ディレクトリ
SEED_DIR="./project/seed"

# 既存ファイルの最大番号を取得
MAX_VERSION=$(ls $SEED_DIR/V*.sql 2>/dev/null | awk -F'V|__' '{print $2}' | sort -n | tail -1)

# MAX_VERSIONが空なら0にする
if [ -z "$MAX_VERSION" ]; then
  MAX_VERSION=0
fi

# 新しいバージョン番号を計算
NEW_VERSION=$(printf "%02d" $(($MAX_VERSION + 1)))

# 出力ファイル名
NEW_FILE="$SEED_DIR/V${NEW_VERSION}__generated_seed.sql"

# pg_dumpコマンド実行
docker compose exec postgres pg_dump -U root -h localhost --data-only --inserts mydb > $NEW_FILE

echo "Seed file created: $NEW_FILE"
