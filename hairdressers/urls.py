from  django.urls import path
from .views import StylistListView, StylistDetailView, ServiceListView, ServiceDetailView, GalleryListView, GalleryDetaileView

urlpatterns = [
    path('stylists', StylistListView.as_view()),
    path('stylists/<int:pk>/', StylistDetailView.as_view()),
    path('services', ServiceListView.as_view()),
    path('services/<int:pk>/', ServiceDetailView.as_view()),
    path('gallery', GalleryListView.as_view()),
    path('gallery/<int:pk>/', GalleryDetaileView.as_view())

]
