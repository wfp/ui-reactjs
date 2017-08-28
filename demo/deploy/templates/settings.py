import os

from wss_ui.settings.default import *  # noqa

SESSION_COOKIE_NAME = 'wss_ui_demo'

DATABASES = {
    'default': {
        'ENGINE': {{database.default.engine}},
        'NAME': {{database.default.name}},
        'HOST': {{database.default.host}},
        'PORT': {{database.default.port}},
        'USER': {{database.default.user}},
        'PASSWORD': {{database.default.password}}
    },
}

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    # 'wfp_djangolib.backends.AliasingBackend',
)

ALLOWED_HOSTS = ['*']

DEBUG = STATIC_FILES_DEBUG = {{django_debug}}

SECRET_KEY = {{django_secret_key}}

STATIC_ROOT = '{{django_static_root}}'



