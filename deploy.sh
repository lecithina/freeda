#!/bin/bash
set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BUILD_DIR="$SCRIPT_DIR/dist"

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Hey Freeda Deploy Script             ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Step 1: Build
echo -e "${BLUE}[1/2]${NC} Building Hey Freeda..."
if (cd "$SCRIPT_DIR" && npx vite build); then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

if [ ! -f "$BUILD_DIR/index.html" ]; then
    echo -e "${RED}✗ Build verification failed: index.html not found${NC}"
    exit 1
fi
echo ""

# Step 2: Deploy to Cloudflare Pages
echo -e "${BLUE}[2/2]${NC} Deploying to Cloudflare Pages..."
if (cd "$SCRIPT_DIR" && npx wrangler pages deploy dist --project-name=freeda-one --commit-dirty=true); then
    echo -e "${GREEN}✓ Deployed to Cloudflare Pages${NC}"
else
    echo -e "${RED}✗ Cloudflare deployment failed${NC}"
    echo -e "  Make sure you're logged in: npx wrangler login"
    exit 1
fi
echo ""

echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║     ✓ Deploy Completed!                ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""
echo -e "${BLUE}📁 Build output:${NC} $BUILD_DIR"
echo -e "${BLUE}☁️  Live at:${NC} https://freeda-one.pages.dev"
echo ""
