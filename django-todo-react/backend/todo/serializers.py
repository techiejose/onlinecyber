from rest_framework import serializers

from .models import Registerkrapin


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registerkrapin
        fields = ('id', 'firstname', 'profession', 'idnumber', 'dob','mobilenumber','town', 'county','box')