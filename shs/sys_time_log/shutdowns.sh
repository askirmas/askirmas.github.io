#!/bin/sh
journalctl | grep systemd-shutdown > ./shutdowns.log
