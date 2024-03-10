#!/bin/sh

# Example usage:
# ./create-note.sh My first post

DATE=$(date +"%Y-%m-%d")
TITLE="$@"
FILE_TITLE=$(printf "$TITLE" | tr " " "-" | tr "[A-Z]" "[a-z]")
FILE_NAME="$DATE-$FILE_TITLE"

mkdir -p "app/blog/$FILE_NAME";

FULL_PATH="app/blog/$FILE_NAME/page.mdx"


cat > $FULL_PATH <<EOF
---
title: $TITLE
date: "$DATE"
author: Marco Caldera
tags: "engineering, psychology"
---

EOF
