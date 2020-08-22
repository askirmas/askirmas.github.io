#!/bin/sh
journalctl | grep systemd-sleep > sleeps.log
