# pylint: disable=no-member,arguments-differ
from rest_framework import serializers
from .models import Stylist, Service, Gallery

class NestedStylistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stylist
        fields = ('id', 'name', 'profile_pic', 'about', 'emergency', 'services', 'gallery')


class NestedSeviceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = ('id', 'name', 'price')


class NestedGallerySerializer(serializers.ModelSerializer):

    class Meta:
        model = Gallery
        fields = ('name', 'image')


class ServiceSerializer(serializers.ModelSerializer):

    stylists = NestedStylistSerializer(many=True)

    class Meta:
        model = Service
        fields = ('id', 'name', 'price', 'stylists')


class GallerySerializer(serializers.ModelSerializer):

    stylists = NestedStylistSerializer(many=True)

    class Meta:
        model = Gallery
        fields = ('id', 'name', 'image', 'stylists')


class StylistSerializer(serializers.ModelSerializer):

    services = NestedSeviceSerializer(many=True)
    gallery = NestedGallerySerializer(many=True)

    def create(self, data):
        gallery_data = data.pop('gallery')
        services_data = data.pop('services')

        stylist = Stylist(**data)
        services = [Service.objects.get(**service_data) for service_data in services_data]
        gallery = [Gallery.objects.get(**gallery_data) for gallery_data in gallery_data]
        stylist.save()
        stylist.services.set(services)
        stylist.gallery.set(gallery)
        return stylist

    def update(self, stylist, data):
        gallery_data = data.pop('gallery')
        services_data = data.pop('services')

        stylist.name = data.get('name', stylist.name)
        stylist.profile_pic = data.get('profile_pic', stylist.profile_pic)

        services = [Service.objects.get(**service_data) for service_data in services_data]
        gallery = [Gallery.object.get(**gallery_data) for gallery_data in gallery_data]

        stylist.save()
        stylist.services.set(services)
        stylist.gallery.set(gallery)
        return stylist


    class Meta:
        model = Stylist
        fields = ('id', 'name', 'profile_pic', 'about', 'emergency', 'services', 'gallery')
