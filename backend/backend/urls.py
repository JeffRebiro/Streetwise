from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from blog.views import PostView
from rest_framework import routers

# Initialize the router and register the viewset
router = routers.DefaultRouter()
router.register(r'posts', PostView, basename='post')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),  
    path('posts/<int:pk>/', PostView.as_view({'get': 'retrieve'}), name='post-detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
