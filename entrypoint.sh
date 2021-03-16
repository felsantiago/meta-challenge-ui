#!/bin/sh
set -e

if [ "$1" = "START" ]; then
  exec npx next start -p $PORT
else
  exec "$@"
fi
