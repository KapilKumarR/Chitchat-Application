from rest_framework.serializers import ModelSerializer
from ..models import Account

class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ('id','first_name', 'last_name', 'username', 'email', 'password')