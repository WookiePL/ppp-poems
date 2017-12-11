# in views.py
from rest_framework import response, schemas
from rest_framework.decorators import api_view, renderer_classes
from rest_framework_swagger.renderers import OpenAPIRenderer, SwaggerUIRenderer

from ppp_poems_core.ppp_poems import urls


# Create your views here.


@api_view()
@renderer_classes([SwaggerUIRenderer, OpenAPIRenderer])
def schema_view(request):
    generator = schemas.SchemaGenerator(title='PPP poems API', patterns=urls.urlpatterns, url='/api/')
    return response.Response(generator.get_schema())
