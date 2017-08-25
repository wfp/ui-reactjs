#!/usr/bin/env python
import os
import sys

ROOT = os.path.abspath(os.path.dirname(__file__))
SRC = os.path.realpath(os.path.join(ROOT, 'src'))
sys.path.insert(0, SRC)

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wss_ui.settings._%s' % os.environ['USER'])

    from django.core.management import execute_from_command_line
    execute_from_command_line(sys.argv)
