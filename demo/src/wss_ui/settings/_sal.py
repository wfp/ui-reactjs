from .default import *  # NOQA

DEBUG = True

SECRET_KEY = 'very_secret_key'
ALLOWED_HOSTS = ['*']


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'wss_ui_dev',
        'HOST': '127.0.0.1',
        'PORT': '',
        'USER': 'postgres',
        'PASSWORD': ''
    }
}
