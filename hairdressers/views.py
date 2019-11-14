# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
# from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Stylist, Service, Gallery
from .serializers import StylistSerializer, ServiceSerializer, GallerySerializer

class StylistListView(ListCreateAPIView):
    # permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = Stylist.objects.all()
    serializer_class = StylistSerializer

class StylistDetailView(RetrieveUpdateDestroyAPIView):
    # permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = Stylist.objects.all()
    serializer_class = StylistSerializer


class ServiceListView(ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ServiceDetailView(RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class GalleryListView(ListAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class GalleryDetaileView(RetrieveAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
