#!/bin/bash

set -e

BASE_DIR="/www/wwwroot/unturned-docs"
SOURCE_DIR="$BASE_DIR/source"
PUBLIC_DIR="$BASE_DIR/public"
NEW_DIR="$BASE_DIR/public.new"
OLD_DIR="$BASE_DIR/public.old"
LOG="/www/wwwlogs/unturned-docs-deploy.log"

exec >> "$LOG" 2>&1

echo ""
echo "=========================================="
echo "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
echo "=========================================="

cd "$SOURCE_DIR"

echo "[1/5] 同步 main"
git fetch origin
git reset --hard origin/main

echo "[2/5] 安装依赖"
pnpm install --no-frozen-lockfile

echo "[3/5] 构建 VuePress"
pnpm docs:build

echo "[4/5] 准备新版"
rm -rf "$NEW_DIR"
mkdir -p "$NEW_DIR"
cp -a docs/.vuepress/dist/. "$NEW_DIR/"

echo "[5/5] 切换正式版本"
rm -rf "$OLD_DIR"

if [ -d "$PUBLIC_DIR" ]; then
  mv "$PUBLIC_DIR" "$OLD_DIR"
fi

mv "$NEW_DIR" "$PUBLIC_DIR"

echo "Deploy success."
