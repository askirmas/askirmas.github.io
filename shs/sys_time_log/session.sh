#!/bin/sh
journalctl | grep "systemd-user:session.*\sandrii\s" > session.log

