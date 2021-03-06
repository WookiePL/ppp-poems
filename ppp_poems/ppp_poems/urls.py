"""ppp_poems URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from poems.api.views import AuthorView, PoemView, PoemsView, AuthorsView, ApplicationView, UserProfileView, \
    UserRegistration, RateView, RateCreateView, CommentView, CommentViewCreate, PoemCreateView
from rest_framework_swagger.views import get_swagger_view

admin.autodiscover()

schema_view = get_swagger_view(title='PPP poems API')
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^swagger/', schema_view),
    url(r'^api/author/(?P<pk>\d+)/$', AuthorView.as_view()),
    url(r'^api/authors$', AuthorsView.as_view()),
    url(r'^api/poem/(?P<pk>\d+)/$', PoemView.as_view()),
    url(r'^api/poem/create$', PoemCreateView.as_view()),
    url(r'^api/poems$', PoemsView.as_view()),
    url(r'^api/user/(?P<username>.+)/$', UserProfileView.as_view()),
    url(r'^api/rate/create$', RateCreateView.as_view()),
    url(r'^api/rate/(?P<pk>\d+)/$', RateView.as_view()),
    url(r'^api/user/create$', UserRegistration.as_view()),
    url(r'^api/application/(?P<name>.+)/$', ApplicationView.as_view()),
    url(r'^api/comment/(?P<poem_id>.+)/$', CommentView.as_view()),
    url(r'^api/comment/$', CommentViewCreate.as_view()),
    url(r'^api/o/', include('oauth2_provider.urls', namespace='oauth2_provider'))
]
