import os

from wss_ui.settings.default import *  # noqa

RAVEN_CONFIG = {
    'dsn': '{{raven_dsn}}',
}

SESSION_COOKIE_NAME = 'wss_ui_{{config_label}}'

DATABASES = {
    'default': {
        'ENGINE': {{database_default_engine}},
        'NAME': {{database_default_name}},
        'HOST': {{database_default_host}},
        'PORT': {{database_default_port}},
        'USER': {{database_default_user}},
        'PASSWORD': {{database_default_password}}
    },
}

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    # 'wfp_djangolib.backends.AliasingBackend',
)

ALLOWED_HOSTS = ['*']

DEBUG = STATIC_FILES_DEBUG = {{django_debug}}

SECRET_KEY = {{django_secret_key}}

ADMINS = ({{django_admins}})

TIME_ZONE = {{django_time_zone}}

STATIC_ROOT = '{{django_static_root}}'



