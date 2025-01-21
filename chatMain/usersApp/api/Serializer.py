from rest_framework.serializers import ModelSerializer
from ..models import (Account,Note)

class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ('id','first_name', 'last_name', 'username', 'email', 'password')
        
class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = ('id','description')