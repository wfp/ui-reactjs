#!/usr/bin/env python
import os
import sys
import codecs
from distutils.config import PyPIRCCommand
from setuptools import setup, find_packages

dirname = 'wss_ui'

app = __import__(dirname)

reqs = 'src/requirements/install.any.pip'


def read(*files):
    here = os.path.abspath(os.path.dirname(__file__))
    content = ''
    for f in files:
        content += codecs.open(os.path.join(here, f), 'r').read()
    return content


PyPIRCCommand.DEFAULT_REPOSITORY = 'http://pypi.wfp.org/pypi/'

dev_requires = read('src/requirements/develop.pip')


setup(
    name=app.NAME,
    version=app.get_version(),
    url='http://pypi.wfp.org/pypi/%s/' % app.NAME,

    author='UN World Food Programme',
    author_email='wfp@wfp.org',
    license="WFP Property",
    description='Human Resources electronic forms',
    long_description=read('README.rst'),
    package_dir={'': 'src'},
    packages=find_packages(where='src'),
    include_package_data=True,
    dependency_links=['http://pypi.wfp.org/simple/'],
    install_requires=read('src/requirements/install.any.pip', reqs),
    tests_require=dev_requires,
    extras_require={'dev': dev_requires},
    platforms=['linux'],
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django :: 1.9',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 2.7',
        'Intended Audience :: Developers'
    ]
)
