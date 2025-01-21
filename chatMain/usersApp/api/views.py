from rest_framework.viewsets import ModelViewSet, ViewSet
from ..models import (Account, Note)
from rest_framework.permissions import (IsAuthenticated)
from rest_framework.response import Response
from .Serializer import (AccountSerializer, NoteSerializer)



class AccountViewSet(ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class NoteViewSet(ViewSet):
    permission_classes = [IsAuthenticated]
    def list(self, request):
        user = request.user
        notes = Note.objects.filter(owner=user)
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
