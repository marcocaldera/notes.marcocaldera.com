#!/bin/sh

# Example usage:
# ./create-project.sh "My Project Title"

DATE=$(date +"%Y-%m-%d")
TITLE="$@"
FILE_TITLE=$(printf "$TITLE" | tr " " "-" | tr "[A-Z]" "[a-z]")
FILE_NAME="$DATE-$FILE_TITLE"

mkdir -p "app/projects/$FILE_NAME"

FULL_PATH="app/projects/$FILE_NAME/page.mdx"

cat > $FULL_PATH <<EOF
---
title: $TITLE
date: "$DATE"
author: Marco Caldera
technologies: ["engineering", "psychology"]
status: new
---

{/* excerpt-start */}
Project description goes here
{/* excerpt-end */}

# $TITLE

## Overview

Detailed description of the project goes here...

## Features

- Feature 1
- Feature 2
- Feature 3

## Technical Details

### Technologies Used

- Engineering
- Psychology

### Implementation

Details about how the project was implemented...

## Challenges and Solutions

Describe the main challenges faced and how they were solved...

## Lessons Learned

What was learned from building this project...

EOF
