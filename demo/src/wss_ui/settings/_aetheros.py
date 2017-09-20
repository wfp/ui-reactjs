from .default import *  # NOQA

DEBUG = True

SECRET_KEY = 'very_secret_key'
ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'mydatabase',
    }
}
