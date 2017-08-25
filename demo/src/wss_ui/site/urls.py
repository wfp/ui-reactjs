# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

# from andy import remote
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.views.generic.base import TemplateView

from .views import LoginView, LogoutView

admin.autodiscover()

urlpatterns = [
    url(r'^403/$', TemplateView.as_view(template_name='403.html')),
    url(r'^404/$', TemplateView.as_view(template_name='404.html')),
    url(r'^500/$', TemplateView.as_view(template_name='500.html')),
    url(r'^wip/$', TemplateView.as_view(template_name='wip.html')),

    url(r'^login/$', LoginView.as_view(), name="login"),
    url(r'^logout/$', LogoutView.as_view(url='/'), name='logout'),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^$', login_required(TemplateView.as_view(template_name='base.html')), name='home'),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

