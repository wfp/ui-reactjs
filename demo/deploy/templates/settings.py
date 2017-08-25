import os
from pathlib import Path
from wss_demo.settings.default import *  # noqa

RAVEN_CONFIG = {
    'dsn': '{{raven_dsn}}',
}

SESSION_COOKIE_NAME = 'wfp_eforms_{{config_label}}'

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

EMAIL_BACKEND = {{ django_email_backend }}
EMAIL_HOST = {{ django_email_host }}
EMAIL_VFIRE_RECIPIENT = {{ vfire_email_recipient }}
EMAIL_ETHICAL_OFFICE = {{ ethical_email_recipient }}
HR044_MADGATE_EMAIL = {{ medgate_email }}
EMAIL_CONF_MOCK_EMAILS_RECIPIENTS = {{ mock_emails }}

AUTHENTICATION_BACKENDS = (
    'wfp_ldap.core.WFPLDAPBackend',
    'wss_demo.apps.core.backends.HRFormBackend',
    'django.contrib.auth.backends.ModelBackend',
    # 'wfp_djangolib.backends.AliasingBackend',
)

ALLOWED_HOSTS = ['*']

DEBUG = STATIC_FILES_DEBUG = {{django_debug}}

SECRET_KEY = {{django_secret_key}}

ADMINS = ({{django_admins}})

TIME_ZONE = {{django_time_zone}}

STATIC_ROOT = '{{django_static_root}}'

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'BUNDLE_DIR_NAME': 'dist/',  # must end with slash
        'STATS_FILE': '{{webpack_stats_file}}',
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
        'IGNORE': ['.+\.hot-update.js', '.+\.map']
    }
}

MEDIA_ROOT = '{{django_media_root}}'
COMPRESS_ROOT = {{django_compress_root}}
ATTACHMENTS_ROOT = str(Path(MEDIA_ROOT, 'forms'))
DOCUMENTS_ROOT = str(Path(MEDIA_ROOT, 'users'))
PAPER_MODULE_ROOT = str(Path(MEDIA_ROOT, 'paper_modules'))


GEO_CACHE = '{{geo_cache_folder}}'

# APPs
INSTALLED_APPS_EXTRA = [{{application_apps}}]

if INSTALLED_APPS_EXTRA:
    INSTALLED_APPS = list(INSTALLED_APPS) + [{{application_apps}}]

# ANALYTICS
ANALYTICS = '{{analytics}}'

LOG_DIR = '{{ config_logdir }}'


# LDAP
WFP_LDAP_BIND_DN = wallet.ldap.username
WFP_LDAP_BIND_PASSWORD = wallet.ldap.password
WFP_AD_BIND_DN = wallet.ldap.username
WFP_AD_BIND_PASSWORD = wallet.ldap.password


# COMMON API
COMMONAPI_SERVER = CAPI_LOADER_SERVER = "{{ capi_host }}"
COMMONAPI_ID = wallet.api.id
COMMONAPI_PWD = wallet.api.pwd
CAPI_LOADER_TIMEOUT = COMMONAPI_TIMEOUT = 60

WINGS_ODATA_SERVER = "{{ wings_server }}"


BROKER_URL = "{{ broker_url }}"


def file_handler(name, level):
    return {
        'level': level,
        'maxBytes': 300000,
        'backupCount': 5,
        'class': 'logging.handlers.RotatingFileHandler',
        'formatter': 'verbose',
        'filename': os.path.join(LOG_DIR, '%s.log' % name),
    }

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'full': {
            'format': '%(levelname)-8s: %(asctime)s %(module)s %(process)d %(thread)d %(message)s'
        },
        'verbose': {
            'format': '%(levelname)-8s: %(asctime)s %(name)20s %(message)s'
        },
        'simple': {
            'format': '%(levelname)-8s: %(asctime)s %(name)20s: %(funcName)s %(message)s'
        }
    },
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'null': {
            'level': 'DEBUG',
            'class': 'logging.NullHandler'
        },
        'errors': file_handler('errors', 'DEBUG'),
        'security': file_handler('security', 'DEBUG'),
        'tasks': file_handler('tasks', 'DEBUG'),
        'loader': file_handler('loader', 'DEBUG'),
        'root': file_handler('messages', 'DEBUG'),
        'application': file_handler('selfservice', 'DEBUG'),
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'verbose'
        },
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler',
            'include_html': True
        },
        'sentry': {
            'level': 'ERROR',
            'class': 'raven.contrib.django.raven_compat.handlers.SentryHandler',
        },
    },
    'loggers': {
        '': {
            'handlers': ['root'],
            'propagate': False,
            'level': '{{config_loglevel}}'
        },
        'django.request': {
            'handlers': ['root'],
            'level': '{{config_loglevel}}',
            'propagate': False
        },
        'django.db.backends': {
            'handlers': ['null'],
            'level': '{{config_loglevel}}',
            'propagate': False
        },
        'errors': {
            'handlers': ['errors'],
            'level': '{{config_loglevel}}',
            'propagate': False
        },
        'exceptions': {
            'handlers': ['errors'],
            'level': '{{config_loglevel}}',
            'propagate': False
        },
        'security': {
            'handlers': ['security', 'console'],
            'level': '{{config_loglevel}}',
            'propagate': False
        },
        'testing': {
            'handlers': ['console'],
            'level': '{{config_loglevel}}',
            'propagate': True
        },
        'wfp_ldap': {
            'handlers': ['console'],
            'level': '{{config_loglevel}}',
            'propagate': False
        },
        'celery': {
            'handlers': ['tasks'],
            'level': '{{config_loglevel}}',
            'propagate': False
        },
        # 'wfp_eforms': {
        #     'handlers': ['application'],
        #     'level': '{{config_loglevel}}',
        #     'propagate': False
        # },
        'wfp_eforms': {
            'handlers': ['application', 'sentry'],
            'level': 'DEBUG',
            'propagate': True
        },
        'andy': {
            'level': 'ERROR',
            'handlers': ['sentry'],
            'propagate': False,
        },
        'wss_demo.apps.loader.tasks': {
            'handlers': ['console', 'tasks'],
            'level': '{{config_loglevel}}',
            'propagate': False
        },
        'wss_demo.apps.loader': {
            'handlers': ['loader'],
            'level': '{{config_loglevel}}',
            'propagate': False
        },
    },
}

# PIPELINE_YUI_BINARY = 'yuicompressor'


# PAYOFF
PAYOFF = {{payoff}}

from wss_demo.apps.core.config import conf

USERS_TO_LOAD = {{users_to_load}}

PROVIDE_FEEDBACK = {{show_provide_feedback}}

SITE_URL = {{site_url}}

for DIR in [BUILD_DIR, DEFAULT_TMP_DIR, MEDIA_ROOT, STATIC_ROOT,
            ATTACHMENTS_ROOT, DOCUMENTS_ROOT]:
    if not Path(DIR).exists():
        Path(DIR).mkdir()

PDF_STATIC_HOST = {{ pdf_static_host }}

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.filebased.FileBasedCache',
        'LOCATION': os.path.expanduser('~/var/cache'),
    },
    'resources': {
        'BACKEND': 'django.core.cache.backends.filebased.FileBasedCache',
        'LOCATION': os.path.expanduser('~/var/cache'),
    }
}
DISABLED_MENUS = {{disabled_menus}}
